import type { SportsVenue, Booking } from '../types/types';
import { mockVenues } from './mockData';

export const venueService = {
  // 모든 장소 조회
  getVenues: async (): Promise<SportsVenue[]> => {
    // TODO: 실제 API 호출로 대체
    return new Promise((resolve) => {
      setTimeout(() => resolve(mockVenues), 500);
    });
  },

  // 스포츠 타입별 장소 조회
  getVenuesBySport: async (sportType: string): Promise<SportsVenue[]> => {
    const venues = await venueService.getVenues();
    return venues.filter(venue => venue.sportType === sportType);
  },

  // 지역별 장소 조회
  getVenuesByLocation: async (location: string): Promise<SportsVenue[]> => {
    const venues = await venueService.getVenues();
    return venues.filter(venue => venue.location.includes(location));
  },

  // 특정 장소 상세 조회
  getVenueById: async (id: string): Promise<SportsVenue | null> => {
    const venues = await venueService.getVenues();
    return venues.find(venue => venue.id === id) || null;
  }
};

export const bookingService = {
  // 예약 생성
  createBooking: async (booking: Omit<Booking, 'id'>): Promise<Booking> => {
    // TODO: 실제 API 호출로 대체
    const newBooking: Booking = {
      ...booking,
      id: Date.now().toString()
    };
    
    return new Promise((resolve) => {
      setTimeout(() => resolve(newBooking), 1000);
    });
  },

  // 사용자 예약 조회
  getUserBookings: async (): Promise<Booking[]> => {
    // TODO: 실제 API 호출로 대체
    return new Promise((resolve) => {
      setTimeout(() => resolve([]), 500);
    });
  },

  // 예약 취소
  cancelBooking: async (bookingId: string): Promise<boolean> => {
    // TODO: 실제 API 호출로 대체
    console.log('Cancelling booking:', bookingId);
    return new Promise((resolve) => {
      setTimeout(() => resolve(true), 1000);
    });
  }
}; 