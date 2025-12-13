import { MapContainer as LeafletMapContainer, TileLayer } from 'react-leaflet';
import type { MapContainerProps } from "@/types/map";


export default function MapContainer({
    center,
    zoom,
    scrollWheelZoom,
    children,
    leafletMapContainerProps
}: MapContainerProps){
    return (
        <LeafletMapContainer
            center={!center ? null : [center.latitude, center.longitude]}
            zoom={zoom || 15}
            scrollWheelZoom={scrollWheelZoom || true}
            className="leaflet-container"
            style={{ height: "100%", width: "100%" }}
            {...(leafletMapContainerProps || {})}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {children}
        </LeafletMapContainer>
    )
}