

export type Sushi = {
    id: string;
    name: string;
    price: number;
    imageUrl: string;
    sizes: number[];
    types: number[];
}

export interface ISushiSliceState {
    items: Sushi[],
    status: 'loading' | 'success' | 'error';
}
