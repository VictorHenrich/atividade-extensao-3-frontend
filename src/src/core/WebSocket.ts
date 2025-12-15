import { io, Socket } from "socket.io-client";
import Settings from "@/core/settings";



export interface WebSocketServiceProps{
    url: string;
    maxRetries: number;
    connectionTimeout: number;
}

export class WebSocketService{
    public createWebSocketClient({
        url = Settings.WEBSOCKET_BASE_URL,
        maxRetries = Settings.WEBSOCKET_MAX_RETRIES,
        connectionTimeout = Settings.WEBSOCKET_TIMEOUT
    }: Partial<WebSocketServiceProps> = {}): Socket{
        return io(url, {
            reconnection: true,
            reconnectionAttempts: maxRetries,
            timeout: connectionTimeout
        });
    }
}

export default new WebSocketService();