export interface SportType {
  id: string;
  name: string;
  icon: string;
  color: string;
}

export interface TimeSlot {
  id: string;
  time: string;
  available: boolean;
  price: number;
}

export interface SportsVenue {
  id: string;
  name: string;
  sportType: string;
  location: string;
  rating: number;
  timeSlots: TimeSlot[];
}

export interface Booking {
  id: string;
  venueId: string;
  venueName: string;
  sportType: string;
  date: string;
  timeSlot: string;
  price: number;
  status: 'confirmed' | 'pending' | 'cancelled';
} 