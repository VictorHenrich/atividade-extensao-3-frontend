import { Location } from "@/models/location";



export default class GeolocationService{
    public static async getCurrentLocation(): Promise<Location>{
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(
                (position)=> {
                    const { latitude, longitude } = position.coords;

                    resolve({
                        latitude,
                        longitude
                    });
                },
                (error)=> {
                    reject(error);
                }
            )
        });
    }
}