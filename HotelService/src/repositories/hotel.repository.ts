import logger from "../config/logger.config";
import Hotel from "../db/models/hotel";
import { CreateHotelDTO } from "../dto/hotel.dto";
import { NotFoundError } from "../utils/errors/app.error";

// db interaction logic will be here

export async function createHotel(hotelData: CreateHotelDTO){
    const hotel = await Hotel.create({
        name: hotelData.name,
        address: hotelData.address,
        location: hotelData.location,
        rating: hotelData.rating,
        rating_count: hotelData.rating_count
    });
    logger.info('Hotel created: ' + hotel.id);
    return hotel;
}

export async function getHotelById(hotelId: number){
    const hotel = await Hotel.findByPk(hotelId);
    if(!hotel){
        logger.error(`Hotel with id ${hotelId} not found`);
        throw new NotFoundError('Hotel not found');
    }
    logger.info(`Hotel with id ${hotelId} found: ${hotel.name}`);
    return hotel;
}

export async function getAllHotels(){
    const hotels = await Hotel.findAll({
        where: { deletedAt: null }
    });
    if(hotels.length === 0){
        logger.error('No hotels found');
        throw new NotFoundError('No hotels found');
    }
    logger.info(`Total hotels found: ${hotels.length}`);
    return hotels;
}

export async function softDeleteHotel(Id: number){
    const hotel = await Hotel.findByPk(Id);
    if(!hotel){
        logger.error(`Hotel with id ${Id} not found`);
        throw new NotFoundError('Hotel not found');
    }
    hotel.deletedAt = new Date();
    await hotel.save();
    logger.info(`Hotel with id ${Id} soft deleted`);
    return true;
}
