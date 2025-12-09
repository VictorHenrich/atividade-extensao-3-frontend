import { PropsWithChildren } from "react";
import { MapContainer as LeafletMapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import Location from "@/models/location";
import type { MapContainerProps } from "@/types/map";


export default function MapContainer({
    center,
    zoom = 13,
    scrollWheelZoom = true,
    children
}: MapContainerProps){
    return (
        <LeafletMapContainer
            center={center}
            zoom={zoom}
            className="leaflet-container"
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {...children}
        </LeafletMapContainer>
    )
}