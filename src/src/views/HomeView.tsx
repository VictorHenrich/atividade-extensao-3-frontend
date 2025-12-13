import React from "react";
import MapContainer from "@/components/map/MapContainer";
import { Center, AbsoluteCenter, Stack, Icon } from "@chakra-ui/react";
import MapMarker from "@/components/map/MapMarker";
import Heading from "@/components/texts/Heading";
import Input from "@/components/inputs/Input";
import { TbCurrentLocation } from "react-icons/tb";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";



function HomeView(){
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
                    <MapMarker position={{
                        latitude: "-28.4126723",
                        longitude: "-48.9586688"
                    }}/>
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
            </Center>
        </Stack>
    );
}


export default React.memo(HomeView);