import { Marker } from 'react-leaflet';
import L from 'leaflet';
import type { MapMarkerProps } from "@/types/map";
import MarkerDefault from "@/assets/icons/marker_default.png";

export default function MapMarker({
    position,
    iconURL = MarkerDefault,
    width = 50,
    height = 50,
    children,
    leafletMarkerProps
}: MapMarkerProps){
    const icon = L.icon({
        iconUrl: iconURL,
        iconSize: [width, height]
    });

    return (
        <Marker 
            position={[position.latitude, position.longitude]}
            icon={icon}
            {...(leafletMarkerProps || {})}
        >
            {children}
        </Marker>
    )
}