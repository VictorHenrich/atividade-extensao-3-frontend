import { memo } from "react";
import MapContainer from "@/components/map/MapContainer";
import { Center } from "@chakra-ui/react";
import MapMarker from "@/components/map/MapMarker";



function HomeView(){
    return (
        <Center width="100vw" height="100vh">
            <MapContainer center={{
                latitude: 1000,
                longitude: 1000
            }}>
                <MapMarker position={{
                    latitude: 1000,
                    longitude: 1000
                }}/>
            </MapContainer>
        </Center>
    );
}


export default memo(HomeView);