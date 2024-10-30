export interface Photo {
    id: string;
    description: string | null;
    urls: {
        small: string;
        regular: string;
    };
    likes?: number;
    alt_description?: string | null;
}
