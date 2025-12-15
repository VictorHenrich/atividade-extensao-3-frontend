import { Marker, Tooltip } from 'react-leaflet';
import L from 'leaflet';
import type { MapMarkerProps } from "@/types/map";
import MarkerDefault from "@/assets/icons/default_bus_marker.png";

export default function MapMarker({
    position,
    icon = MarkerDefault,
    width = 50,
    height = 50,
    tooltip,
    children,
    leafletMarkerProps,
    tooltipProps
}: MapMarkerProps){
    const Icon = L.icon({
        iconUrl: icon,
        iconSize: [width, height]
    });

    return (
        <Marker 
            position={[position.latitude, position.longitude]}
            icon={Icon}
            {...(leafletMarkerProps || {})}
        >
            {
                tooltip 
                    ? (
                        <Tooltip 
                            {...(tooltipProps || {})}
                        >
                            {tooltip}
                        </Tooltip>
                    )

                    : null
            }
            {children}
        </Marker>
    )
}