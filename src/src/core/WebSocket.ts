import ReconnectingWebSocket from 'reconnecting-websocket';
import Settings from '@/core/settings';


export interface WebSocketServiceProps{
    baseURL: string,
    connectionTimeout: number,
    maxRetries: number,
}


export class WebSocketServiceError extends Error{
    constructor(message: string){
        const errorMessage: string = `Falha no serviço de WebSocket: ${message}`;

        super(errorMessage);
    }
}

export class WebSocketService{
    private readonly config: WebSocketServiceProps;

    private websocket: any | null = null;

    constructor({
        baseURL = Settings.WEBSOCKET_BASE_URL,
        maxRetries = Settings.WEBSOCKET_MAX_RETRIES,
        connectionTimeout = Settings.WEBSOCKET_TIMEOUT
    }: Partial<WebSocketServiceProps> = {}){
        this.config = {
            baseURL,
            maxRetries,
            connectionTimeout
        }
    }

    connect({
        route,
        onOpen,
        onClose,
        onMessage,
        onError
    }: {
        route?: string,
        onOpen?: (event: Event) => void;
        onClose?: (event: CloseEvent) => void;
        onMessage?: (event: MessageEvent) => void;
        onError?: (event: Event) => void;
    }): void{
        let url: string = `${this.config.baseURL}`;

        if(route)
            url += route;

        if(this.websocket){
            this.websocket.close();

            this.websocket = null;
        }

        this.websocket = new ReconnectingWebSocket(url, [], this.config);

        if(onOpen)
            this.websocket.addEventListener("open", onOpen);

        if(onClose)
            this.websocket.addEventListener("close", onClose);

        if(onMessage)
            this.websocket.addEventListener("message", onMessage);

        if(onError)
            this.websocket.addEventListener("error", onError);
    }

    sendMessage(data: any): void{
        if(!this.websocket)
            throw new WebSocketServiceError("Não existe nenhum objeto websocket vinculado.");

        if (this.websocket.readyState !== WebSocket.OPEN)
            throw new WebSocketServiceError("A conexão com websocket não está aberta.");

        this.websocket.send(JSON.stringify(data));
    }   
}

export default new WebSocketService();