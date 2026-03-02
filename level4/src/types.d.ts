declare global {
    interface window {
        appVersion: string;
    }

    type ApiResponse<T> = {
        data: T;
        error?: string
    }
}

export {}