import { create } from 'zustand';
import type { SportType, SportsVenue, Booking, SupportedLanguage, LanguageOption } from '../types/types';

interface AppState {
  selectedSport: string;
  selectedDate: Date;
  selectedLocation: string;
  selectedLanguage: SupportedLanguage;
  venues: SportsVenue[];
  bookings: Booking[];
  setSelectedSport: (sport: string) => void;
  setSelectedDate: (date: Date) => void;
  setSelectedLocation: (location: string) => void;
  setSelectedLanguage: (language: SupportedLanguage) => void;
  setVenues: (venues: SportsVenue[]) => void;
  addBooking: (booking: Booking) => void;
}

export const useAppStore = create<AppState>((set) => ({
  selectedSport: 'soccer',
  selectedDate: new Date(),
  selectedLocation: '서울',
  selectedLanguage: 'ko',
  venues: [],
  bookings: [],
  setSelectedSport: (sport) => set({ selectedSport: sport }),
  setSelectedDate: (date) => set({ selectedDate: date }),
  setSelectedLocation: (location) => set({ selectedLocation: location }),
  setSelectedLanguage: (language) => set({ selectedLanguage: language }),
  setVenues: (venues) => set({ venues }),
  addBooking: (booking) => set((state) => ({ 
    bookings: [...state.bookings, booking] 
  })),
}));

export const sportsData: SportType[] = [
  { id: 'soccer', name: '축구', icon: '⚽', color: '#4CAF50' },
  { id: 'basketball', name: '농구', icon: '🏀', color: '#FF9800' },
  { id: 'tennis', name: '테니스', icon: '🎾', color: '#2196F3' },
  { id: 'badminton', name: '배드민턴', icon: '🏸', color: '#9C27B0' },
  { id: 'futsal', name: '풋살', icon: '⚽', color: '#607D8B' },
];

export const languageOptions: LanguageOption[] = [
  { code: 'ko', name: '한국어', flag: '🇰🇷' },
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'ph', name: 'Filipino', flag: '🇵🇭' },
]; 