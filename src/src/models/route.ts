import { Navigation } from "./navigation";
import { Point } from "./point";
import { Vehicle } from "./vehicle";



export interface Route{
    vehicle: Vehicle;
    points: Point[];
    price: number;
    navigation: Navigation;
}