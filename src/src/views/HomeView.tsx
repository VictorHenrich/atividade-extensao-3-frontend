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
import { TbCurrentLocation } from "react-icons/tb";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { Route } from "@/models/route";
import { Location } from "@/models/location";
import { routes as mockRoutes } from "./mocks/home.mock";
import GeolocationService from "@/services/geolocation";


function HomeView(){
    const [userLocation, setUserLocation] = useState<Location | void>();

    const [routes, setRoute] = useState<Route[]>([]);

    const [vehicleLocation, setVehicleLocation] = useState<Location | void>();

    useEffect(()=> {
        loadInformations();
    }, []);

    async function loadInformations(){
        const location: Location = await GeolocationService.getCurrentLocation();

        setUserLocation(location);

        setRoute(mockRoutes);
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
                    Rota Inserida: [Ponto de Partida]
                    <Icon
                        display="inline"
                        size="inherit"
                    >
                        <FaLongArrowAltRight />
                    </Icon>
                    [Destino]
                </Heading>
            </Center>
            <Center
                width="full"
                height="full"
                borderTopRadius={25}
                overflow="hidden"
                position="relative"
            >
                <MapContainer
                    leafletMapContainerProps={{
                        style: {
                            position: "absolute",
                            inset: 0,
                            zIndex: 1
                        }
                    }}
                    center={{
                        latitude: "-28.4126723",
                        longitude: "-48.9586688"
                    }}
                >   
                    {
                        userLocation 
                            ? <MapMarker 
                                    position={userLocation}
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
                <Stack
                    padding={5}
                    width="full"
                    position="absolute"
                    top={0}
                    zIndex={10}
                    pointerEvents="auto"
                >
                    <Input
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
                        startElement={
                            <Icon
                                size="md"
                                color="detail"
                            >
                                <FaLocationDot />
                            </Icon>
                        }
                    />
                </Stack>
                <Drawer 
                    size="xl"
                    placement="bottom"
                    open={true}
                    hasBackdrop={false}
                    drawerBodyProps={{
                        backgroundColor: "container",
                        position: "relative",
                        overflow: "visible"
                    }}
                    body={
                        <Stack
                            direction="column"
                            gap={5}
                            overflowY="auto"
                            position="relative"
                            top={-20}
                        >
                            {
                                routes.map(route => {
                                    const [fistPoint, lastPoint] = route.points;
                                    
                                    const [durationToDestination, descriptionToDestination] = calculateTime(route.navigation.startTimeToDestination, route.navigation.finishTimeToDestination)

                                    const [durationToPoint, descriptionToPoint] = calculateTime(route.navigation.startTimeToPoint, route.navigation.finishTimeToPoint);
                                    
                                    const [distance, descriptionDistance] = calculateDistance(route.navigation.distanceToDestination);

                                    return (
                                        <Card.Root 
                                            onClick={()=> setVehicleLocation(route.vehicle.location)}
                                            borderRadius={20}
                                            boxShadow="md"
                                            border="none"
                                        >
                                            <Card.Header>
                                                <Heading
                                                    fontSize={20}
                                                    color="detail"
                                                >
                                                    {`${fistPoint?.description} > ${lastPoint?.description}`}
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
                                                        <Link>
                                                            Visualizar Rota no Mapa
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