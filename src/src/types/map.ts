import { type PropsWithChildren } from "react";
import type { Location } from "@/models/location";
import type { 
    MapContainerProps as MapContainerLeafletProps,
    TooltipProps as LeafletTooltipProps;
    MarkerProps as LeafletMarkerProps;
} from "react-leaflet";


export interface MapContainerProps extends PropsWithChildren{
    center?: Location;
    zoom?: number;
    scrollWheelZoom?: boolean;
    leafletMapContainerProps?: MapContainerLeafletProps
}

export interface MapMarkerProps extends PropsWithChildren{
    position: Location;
    icon?: any;
    width?: number;
    height?: number;
    tooltip?: string;
    tooltipProps?: LeafletTooltipProps;
    leafletMarkerProps?: LeafletMarkerProps
}