import { type PropsWithChildren } from "react";
import type { Location } from "@/models/location";
import type { 
    MapContainerProps as MapContainerLeafletProps,
    MarkerProps as LeafletMarkerProps
} from "react-leaflet";


export interface MapContainerProps extends PropsWithChildren{
    center?: Location;
    zoom?: number;
    scrollWheelZoom?: boolean;
    leafletMapContainerProps?: MapContainerLeafletProps
}

export interface MapMarkerProps extends PropsWithChildren{
    position: Location;
    iconURL?: string;
    width?: number;
    height?: number;
    leafletMarkerProps?: LeafletMarkerProps
}