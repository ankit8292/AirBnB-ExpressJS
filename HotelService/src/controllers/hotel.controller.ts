import { Request, Response, NextFunction } from 'express';
import { createHotelService, getAllHotelsService, getHotelByIdService, softDeleteHotelService } from '../services/hotel.service';
import { StatusCodes } from 'http-status-codes';

export async function createHotelHandler(req: Request, res: Response, next: NextFunction) {

    // call the service function to create hotel
    const hotelRes= await createHotelService(req.body);
    // send response back to client
    res.status(StatusCodes.CREATED).json({
        message: 'Hotel created successfully',
        success: true,
        data: hotelRes
    }); 

    
}

export async function getHotelByIdHandler(req: Request, res: Response, next: NextFunction) {
    // call the service function to get hotel by id
    const hotel = await getHotelByIdService(Number(req.params.id));
    // send response back to client
    res.status(StatusCodes.OK).json({
        message: 'Hotel fetched successfully',
        success: true,
        data: hotel
    });

}

export async function getAllHotelsHandler(req: Request, res: Response, next: NextFunction) {
    // call the service layer to get all hotels
    const Allhotels = await getAllHotelsService();
    // send response back to client
    res.status(StatusCodes.OK).json({
        message: 'Hotels fetched successfully',
        success: true,
        data: Allhotels
    });
   
}

export async function deleteHotelHandler(req: Request, res: Response, next: NextFunction) {
    // extract hotel id from req.params
    // call the service layer to delete the hotel
    const result = await softDeleteHotelService(Number(req.params.id));
    // send response back to client
    res.status(StatusCodes.OK).json({
        message: 'Hotel deleted successfully',
        success: true,
        data: result
    });
    
}