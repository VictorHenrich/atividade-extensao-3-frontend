import { type PropsWithChildren } from "react";
import type Location from "@/models/location";


export interface MapContainerProps extends PropsWithChildren{
    center?: Location;
    zoom?: number;
    scrollWheelZoom?: boolean;
}

export interface MapMarkerProps extends PropsWithChildren{
    position: Location;
    iconURL?: string;
    width?: number;
    height?: number;
}