import { Marker } from 'react-leaflet';
import L from 'leaflet';
import type { MapMarkerProps } from "@/types/map";
import MarkerDefault from "@/assets/icons/marker_default.png";

export default function MapMarker({
    position,
    iconURL = MarkerDefault,
    width = 200,
    height = 200,
    children
}: MapMarkerProps){
    const icon = L.icon({
        iconUrl: iconURL,
        iconSize: [width, height]
    });

    return (
        <Marker 
            position={[position.latitude, position.longitude]}
            icon={icon}
        >
            {children}
        </Marker>
    )
}