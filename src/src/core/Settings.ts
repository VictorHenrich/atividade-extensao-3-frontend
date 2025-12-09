

export default class Settings{
    public static API_BASE_URL: string = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000/api";
    public static API_TIMEOUT: number = parseInt(import.meta.env.VITE_API_TIMEOUT || "30000");

    public static WEBSOCKET_BASE_URL: string = import.meta.env.VITE_WEBSOCKET_BASE_URL || "ws://localhost:8000/api";
    public static WEBSOCKET_MAX_RETRIES: number = parseInt(import.meta.env.VITE_WEBSOCKET_MAX_RETRIES || "5");
    public static WEBSOCKET_TIMEOUT: number = parseInt(import.meta.env.VITE_WEBSOCKET_TIMEOUT || "5000");
}