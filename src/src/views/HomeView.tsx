import React, { useState, useEffect, useMemo } from "react";
import Moment from "moment";
import MapContainer from "@/components/map/MapContainer";
import { Center, Stack, Icon, Card } from "@chakra-ui/react";
import MapMarker from "@/components/map/MapMarker";
import Heading from "@/components/texts/Heading";
import Input from "@/components/inputs/Input";
import Drawer from "@/components/menus/Drawer";
import Text from "@/components/texts/Text";
import Link from "@/components/texts/Link";
import Loading from "@/components/feedbacks/Loading";
import { TbCurrentLocation } from "react-icons/tb";
import { FaLongArrowAltRight, FaRoute, FaSearch } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import UserMarker from "@/assets/icons/default_user_marker.png";
import StopMarker from "@/assets/icons/default_stop_marker.png";
import { Route } from "@/models/route";
import { Location } from "@/models/location";
import { Vehicle } from "@/models/vehicle";
import { routes as mockRoutes } from "./mocks/home.mock";
import GeolocationService from "@/services/geolocation";
import websocket from "@/core/websocket";
import Button from "@/components/buttons/Button";
import { Point } from "@/models/point";


type SearchFields = {
    sourceField: string;
    destinationField: string
};

function HomeView(){
    const [userLocation, setUserLocation] = useState<Location | void>();

    const [vehicleLocation, setVehicleLocation] = useState<Location | void>();

    const [routeSelected, setRouteSelected] = useState<Route | void>();

    const [vehicleSelected, setVehicleSelected] = useState<Vehicle | void>();

    const [openMenu, setOpenMenu] = useState<boolean>(false);

    const [routes, setRoutes] = useState<Route[]>([]);

    const [searchFields, setSearchFields] = useState<SearchFields>({
        destinationField: "",
        sourceField: "Localização Atual"
    });

    useEffect(()=> {
        loadInformations();
    }, []);

    useEffect(()=> {
        connectOnWebSocket();

    }, [vehicleSelected]);

    const mapCenter: Location | undefined = useMemo(()=> {
        return vehicleLocation || userLocation || undefined;
    }, [userLocation, vehicleLocation]);

    function connectOnWebSocket(){
        if(!vehicleSelected)
            return

        const socket = websocket.createWebSocketClient();

        socket.on(`vehicle-position:${vehicleSelected.id}`, (data: Location)=> {
            console.log("Posição do veículo: ", data);

            setVehicleLocation(data);
        });

        socket.on("teste", (data: any)=> console.debug("DADOS DE TESTE: ", data));

        socket.emit("teste", {vehicleId: vehicleSelected.id});
    }

    async function loadInformations(){
        const location: Location = await GeolocationService.getCurrentLocation();

        setUserLocation(location);

        setRoutes(mockRoutes);
    }

    function calculateTime(start: Date, finish: Date): (number | string)[]{
        const startTime = Moment(start);

        const finishTime = Moment(finish);

        const duration: Moment.Duration = Moment.duration(finishTime.diff(startTime));
        
        const time: number = duration.asMinutes();

        if(time < 60)
            return [time, "Minutos"];

        else
            return [duration.asHours(), "Horas"];
    }

    function calculateDistance(distance: number): (number | string)[]{
        if(distance >= 1000)
            return [distance / 1000, "km"];

        else
            return [distance, "metros"];
    }

    function viewOnMap(route: Route): void{
        setRouteSelected(route);

        setVehicleSelected(route.vehicle);

        setOpenMenu(false);
    }

    function getFirstAndLastPoint(route: Route): {firstPoint: Point, lastPoint: Point}{
        const firstPoint: Point = route.points[0];
                                    
        const lastPoint: Point = route.points[route.points.length - 1];

        return {
            firstPoint, 
            lastPoint
        }
    }

    const routeInserted = useMemo(()=> {
        if(!routeSelected) return;

        return getFirstAndLastPoint(routeSelected);
    }, [routeSelected]);

    return (
        <Stack 
            width="100vw" 
            height="100vh"
            backgroundColor="primary"
        >
            <Center
                paddingY={4}
                paddingX={2}
            >
                <Heading 
                    color="white"
                    fontSize={15}
                >
                    Rota Inserida: {routeInserted ? `${routeInserted.firstPoint.description}` : "[Ponto de Partida]"}
                    <Icon
                        display="inline"
                        size="inherit"
                    >
                        <FaLongArrowAltRight />
                    </Icon>
                    {routeInserted ? `${routeInserted.lastPoint.description}` : "[Destino]"}
                </Heading>
            </Center>
            <Center
                width="full"
                height="full"
                borderTopRadius={25}
                overflow="hidden"
                position="relative"
            >
                <Stack
                    padding={5}
                    width="full"
                    position="absolute"
                    top={0}
                    zIndex={10}
                    pointerEvents="auto"
                >
                    <Input
                        onBlur={({ target: { value }})=> {
                            setSearchFields({...searchFields, sourceField: value });
                        }}
                        placeholder="Sua localização atual"
                        paddingY={0.3}
                        startElement={
                            <Icon
                                size="md"
                                color="detail"
                            >
                                <TbCurrentLocation />
                            </Icon>
                        }
                    />
                    <Input
                        placeholder="Para onde você quer ir?"
                        paddingY={0.3}
                        onBlur={({ target: { value }})=> {
                            setSearchFields({...searchFields, destinationField: value });
                        }}
                        startElement={
                            <Icon
                                size="md"
                                color="detail"
                            >
                                <FaLocationDot />
                            </Icon>
                        }
                    />
                    <Stack 
                        justify="end"
                        direction="row"
                    >
                        <Button
                            width="auto"
                            backgroundColor="detail"
                            onClick={()=> setOpenMenu(true)}
                        >
                                Localizar Rotas
                                <Icon
                                    color="white"
                                >
                                    <FaSearch />
                                </Icon>
                        </Button>
                    </Stack>
                </Stack>
                {
                    mapCenter 
                        ? <MapContainer
                            leafletMapContainerProps={{
                                style: {
                                    position: "absolute",
                                    inset: 0,
                                    zIndex: 1
                                }
                            }}
                            zoom={10}
                            center={mapCenter}
                        >   
                            {routeSelected 
                                ? routeSelected.points.map(point => {
                                    return (
                                        <MapMarker
                                            height={30}
                                            width={30}
                                            position={point}
                                            icon={StopMarker}
                                            tooltip={`Ponto de Ônibos: ${point.description}`}
                                        /> 
                                    );
                                })
                            : null
                        
                            }
                            {
                                userLocation 
                                    ? <MapMarker 
                                            position={userLocation}
                                            icon={UserMarker}
                                        /> 
                                    : null
                            }
                            
                            {
                                vehicleLocation 
                                    ? <MapMarker 
                                            position={vehicleLocation}
                                        /> 
                                    : null
                            }
                        </MapContainer> 
                        : <Loading 
                            open={true}
                            text="Carregando mapa..."
                            backgroundColor="container"
                            color="detail"
                        />
                }
                <Drawer 
                    closeOnEscape={true}
                    onExitComplete={()=> setOpenMenu(false)}
                    size="xl"
                    placement="bottom"
                    open={openMenu}
                    onOpenChange={(details)=> {
                        if(!details.open)
                            setOpenMenu(false);
                    }}
                    drawerBodyProps={{
                        backgroundColor: "container",
                        maxHeight: "50vh"
                    }}
                    body={
                        <Stack
                            direction="column"
                            gap={5}
                            height="100%"
                            overflowY="auto"
                        >
                            {
                                routes.map((route, index) => {
                                    const { firstPoint, lastPoint } = getFirstAndLastPoint(route);
                                    
                                    const [durationToDestination, descriptionToDestination] = calculateTime(route.navigation.startTimeToDestination, route.navigation.finishTimeToDestination)

                                    const [durationToPoint, descriptionToPoint] = calculateTime(route.navigation.startTimeToPoint, route.navigation.finishTimeToPoint);
                                    
                                    const [distance, descriptionDistance] = calculateDistance(route.navigation.distanceToDestination);

                                    return (
                                        <Card.Root
                                            borderRadius={20}
                                            boxShadow="md"
                                            border="none"
                                            key={`route-${index}`}
                                        >
                                            <Card.Header>
                                                <Heading
                                                    fontSize={20}
                                                    color="detail"
                                                >
                                                    {`${firstPoint?.description} > ${lastPoint?.description}`}
                                                </Heading>
                                            </Card.Header>
                                            <Card.Body>
                                                <Heading
                                                    fontSize={25}
                                                    color="black"
                                                >
                                                    {`${durationToDestination} ${descriptionToDestination}`}
                                                </Heading>
                                            </Card.Body>
                                            <Card.Footer>
                                                <Stack>
                                                    <Heading
                                                        fontSize={15}
                                                        color="black"
                                                    >
                                                        Detalhes da viajem
                                                    </Heading>
                                                    <Text
                                                        fontSize={12}
                                                        color="detail"
                                                    >
                                                        Valor da Passagem: 
                                                        &nbsp;
                                                        <Text
                                                            display="inline"
                                                            fontSize="inherit"
                                                            color="grey"
                                                        >
                                                            R$ {route.price}
                                                        </Text>
                                                    </Text>
                                                    <Text
                                                        fontSize={12}
                                                        color="detail"
                                                    >
                                                        Tempo até o ponto mais próximo: 
                                                        &nbsp;
                                                        <Text
                                                            display="inline"
                                                            fontSize="inherit"
                                                            color="grey"
                                                        >
                                                            {`${durationToPoint} ${descriptionToPoint}`}
                                                        </Text>
                                                    </Text>
                                                    <Text
                                                        fontSize={12}
                                                        color="detail"
                                                    >
                                                        Distancia: 
                                                        &nbsp;
                                                        <Text
                                                            display="inline"
                                                            fontSize="inherit"
                                                            color="grey"
                                                        >
                                                            {`${distance} ${descriptionDistance}`}
                                                        </Text>
                                                    </Text>
                                                    <Center
                                                        width="full"
                                                        paddingTop={5}
                                                        alignItems="end"
                                                    >
                                                        <Link
                                                            onClick={()=> viewOnMap(route)}
                                                        >
                                                            Visualizar Rota no Mapa
                                                            <Icon
                                                                fontSize="inherit"
                                                                color="inherit"
                                                            >
                                                                <FaRoute />
                                                            </Icon>
                                                        </Link>
                                                    </Center>
                                                </Stack>
                                            </Card.Footer>
                                        </Card.Root>
                                    );
                                })
                            }
                        </Stack>
                    }
                />
            </Center>
        </Stack>
    );
}


export default React.memo(HomeView);