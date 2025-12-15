import { Route } from "@/models/route";

export const routes: Route[] = [
    {
        price: 6.5,
        navigation: {
            distanceToDestination: 3200,
            startTimeToDestination: new Date(),
            finishTimeToDestination: new Date(Date.now() + 35 * 60 * 1000),
            startTimeToPoint: new Date(),
            finishTimeToPoint: new Date(Date.now() + 6 * 60 * 1000),
        },
        points: [
            {
                description: "Terminal Central",
                latitude: -28.4675,
                longitude: -49.0069,
            },
            {
                description: "Parada Av. Marcolino Martins Cabral",
                latitude: -28.4697,
                longitude: -49.0098,
            },
            {
                description: "Parada Ponte Nereu Ramos",
                latitude: -28.4689,
                longitude: -49.0051,
            },
            {
                description: "Centro Capivari",
                latitude: -28.4682,
                longitude: -49.0081,
            },
        ],
        vehicle: {
            id: "1234",
            plate: "ABC1D23",
        },
    },
    {
        price: 8.0,
        navigation: {
            distanceToDestination: 5400,
            startTimeToDestination: new Date(),
            finishTimeToDestination: new Date(Date.now() + 48 * 60 * 1000),
            startTimeToPoint: new Date(),
            finishTimeToPoint: new Date(Date.now() + 10 * 60 * 1000),
        },
        points: [
            {
                description: "Parada Bairro Dehon",
                latitude: -28.4716,
                longitude: -49.0109,
            },
            {
                description: "Farol Shopping",
                latitude: -28.4661,
                longitude: -49.0174,
            },
            {
                description: "Parada Hospital Nossa Senhora da Conceição",
                latitude: -28.4702,
                longitude: -49.0137,
            },
            {
                description: "Universidade Unisul",
                latitude: -28.4629,
                longitude: -49.0133,
            },
        ],
        vehicle: {
            id: "1234",
            plate: "DEF4G56",
        },
    },
    {
        price: 5.25,
        navigation: {
            distanceToDestination: 2100,
            startTimeToDestination: new Date(),
            finishTimeToDestination: new Date(Date.now() + 22 * 60 * 1000),
            startTimeToPoint: new Date(),
            finishTimeToPoint: new Date(Date.now() + 4 * 60 * 1000),
        },
        points: [
            {
                description: "Parada Bairro Oficinas",
                latitude: -28.4741,
                longitude: -49.0126,
            },
            {
                description: "Parada Rua Laguna",
                latitude: -28.4729,
                longitude: -49.0104,
            },
            {
                description: "Centro Histórico",
                latitude: -28.4688,
                longitude: -49.0063,
            },
        ],
        vehicle: {
            id: "1234",
            plate: "HIJ7K89",
        },
    },
    {
        price: 9.75,
        navigation: {
            distanceToDestination: 7600,
            startTimeToDestination: new Date(),
            finishTimeToDestination: new Date(Date.now() + 60 * 60 * 1000),
            startTimeToPoint: new Date(),
            finishTimeToPoint: new Date(Date.now() + 12 * 60 * 1000),
        },
        points: [
            {
                description: "Terminal Rodoviário",
                latitude: -28.4723,
                longitude: -49.0211,
            },
            {
                description: "Parada Bairro Humaitá",
                latitude: -28.4608,
                longitude: -49.0024,
            },
            {
                description: "Parada Av. Patrício Lima",
                latitude: -28.4754,
                longitude: -49.0192,
            },
            {
                description: "Parada Praia do Camacho",
                latitude: -28.4884,
                longitude: -49.0289,
            },
        ],
        vehicle: {
            id: "1234",
            plate: "LMN2P34",
        },
    },
];
