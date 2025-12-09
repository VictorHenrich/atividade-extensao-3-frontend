import { memo } from "react";
import MapContainer from "@/components/map/MapContainer";
import MapMarker from "@/components/map/MapMarker";



function HomeView(){
    return (
        <MapContainer>
            <MapMarker position={{
                latitude: 1000,
                longitude: 1000
            }}/>
        </MapContainer>
    );
}


export default memo(HomeView);