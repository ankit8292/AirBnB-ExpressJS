// business logic for hotel will be here

import { CreateHotelDTO } from "../dto/hotel.dto";
import { createHotel, getAllHotels, getHotelById, softDeleteHotel } from "../repositories/hotel.repository";


export async function createHotelService(hotelData: CreateHotelDTO){
    // validate the data
    // call the repository function to save the data
    // send a welcome email to hotel owner
    // return the created hotel object
    const hotel = await createHotel(hotelData);
    return hotel;
}

export async function getHotelByIdService(hotelId: number){
    // validate the data
    // call the repository function to get the data
    // return the hotel object
    const hotel = await getHotelById(hotelId);
    return hotel;
}

export async function getAllHotelsService(){
    // call the repository function to get all hotels
    // return the list of hotels
    const hotels = await getAllHotels();
    return hotels;
}

export async function softDeleteHotelService(Id: number){
    const result = await softDeleteHotel(Id);
    return result;
}