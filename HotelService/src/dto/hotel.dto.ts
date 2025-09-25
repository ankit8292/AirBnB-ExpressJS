
export type CreateHotelDTO = {
    name: string;
    address: string;
    location: string;
    rating?: number;
    rating_count?: number;
}