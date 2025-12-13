import { Route } from "@/models/route";


export const routes: Route[] = [
    {
        price: 10.0,
        navigation: {
            distanceToDestination: 1000,
            startTimeToDestination: new Date(),
            finishTimeToDestination: new Date(new Date().getTime() + 40 * 60 * 1000),
            finishTimeToPoint: new Date(new Date().getTime() + 5 * 60 * 1000),
            startTimeToPoint: new Date(),
        },
        points: [
            {
                description: "Centro Capivari",
                latitude: 0,
                longitude: 0
            },
            {
                description: "Farol Shopping",
                latitude: 0,
                longitude: 0
            }
        ],
        vehicle: {
            location: {
                latitude: 0,
                longitude: 0
            }
        }
    }
]