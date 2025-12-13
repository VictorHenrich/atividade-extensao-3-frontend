import { Location } from "./location";

export interface Point extends Location{
    street?: string;
    number?: string;
    neighborhood?: string;
    city?: string;
    state?: string;
    country?: string;
    postalCode?: string;
    description: string;
}