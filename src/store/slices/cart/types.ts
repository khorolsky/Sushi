export type CartItem = {
    id: string;
    name: string;
    price: number;
    imageUrl: string;
    type: string;
    size: number;
    count: number;
}

export interface ICartSliseState {
    totalPrice: number;
    items: CartItem[];
}
