import type { SportsVenue, SupportedLanguage } from '../types/types';

// 다국어 venue 데이터
export const mockVenuesMultiLang: Record<SupportedLanguage, SportsVenue[]> = {
  ko: [
    {
      id: '1',
      name: '서울 광진 리더스 축구장',
      sportType: 'soccer',
      location: '서울 광진구',
      rating: 4.5,
      timeSlots: [
        { id: '1', time: '15:00', available: true, price: 80000 },
        { id: '2', time: '16:00', available: true, price: 80000 },
        { id: '3', time: '17:00', available: false, price: 80000 },
        { id: '4', time: '18:00', available: true, price: 90000 },
        { id: '5', time: '19:00', available: true, price: 90000 },
        { id: '6', time: '20:00', available: false, price: 90000 },
      ]
    },
    {
      id: '2',
      name: 'SKY 풋살파크 B구장',
      sportType: 'futsal',
      location: '서울 강남구',
      rating: 4.3,
      timeSlots: [
        { id: '7', time: '15:00', available: true, price: 60000 },
        { id: '8', time: '16:00', available: true, price: 60000 },
        { id: '9', time: '17:00', available: true, price: 70000 },
        { id: '10', time: '18:00', available: false, price: 70000 },
        { id: '11', time: '19:00', available: true, price: 80000 },
        { id: '12', time: '20:00', available: true, price: 80000 },
      ]
    },
    {
      id: '3',
      name: '홍익대 농구장',
      sportType: 'basketball',
      location: '서울 마포구',
      rating: 4.1,
      timeSlots: [
        { id: '13', time: '15:00', available: true, price: 40000 },
        { id: '14', time: '16:00', available: true, price: 40000 },
        { id: '15', time: '17:00', available: true, price: 50000 },
        { id: '16', time: '18:00', available: true, price: 50000 },
        { id: '17', time: '19:00', available: false, price: 60000 },
        { id: '18', time: '20:00', available: true, price: 60000 },
      ]
    },
    {
      id: '4',
      name: '서울 도봉 루다 풋살장',
      sportType: 'soccer',
      location: '서울 도봉구',
      rating: 4.5,
      timeSlots: [
        { id: '19', time: '15:00', available: true, price: 80000 },
        { id: '20', time: '16:00', available: true, price: 80000 },
        { id: '21', time: '17:00', available: false, price: 80000 },
        { id: '22', time: '18:00', available: true, price: 90000 },
        { id: '23', time: '19:00', available: true, price: 90000 },
        { id: '24', time: '20:00', available: false, price: 90000 },
      ]
    },
    {
      id: '5',
      name: '서울 스타디움 가산 마리오 단일 구장',
      sportType: 'soccer',
      location: '서울 가산동',
      rating: 4.5,
      timeSlots: [
        { id: '25', time: '15:00', available: true, price: 80000 },
        { id: '26', time: '16:00', available: true, price: 80000 },
        { id: '27', time: '17:00', available: false, price: 80000 },
        { id: '28', time: '18:00', available: true, price: 90000 },
        { id: '29', time: '19:00', available: true, price: 90000 },
        { id: '30', time: '20:00', available: false, price: 90000 },
      ]
    }
  ],
  en: [
    {
      id: '1',
      name: 'Seoul Gwangjin Leaders Soccer Field',
      sportType: 'soccer',
      location: 'Gwangjin-gu, Seoul',
      rating: 4.5,
      timeSlots: [
        { id: '1', time: '15:00', available: true, price: 80000 },
        { id: '2', time: '16:00', available: true, price: 80000 },
        { id: '3', time: '17:00', available: false, price: 80000 },
        { id: '4', time: '18:00', available: true, price: 90000 },
        { id: '5', time: '19:00', available: true, price: 90000 },
        { id: '6', time: '20:00', available: false, price: 90000 },
      ]
    },
    {
      id: '2',
      name: 'SKY Futsal Park Court B',
      sportType: 'futsal',
      location: 'Gangnam-gu, Seoul',
      rating: 4.3,
      timeSlots: [
        { id: '7', time: '15:00', available: true, price: 60000 },
        { id: '8', time: '16:00', available: true, price: 60000 },
        { id: '9', time: '17:00', available: true, price: 70000 },
        { id: '10', time: '18:00', available: false, price: 70000 },
        { id: '11', time: '19:00', available: true, price: 80000 },
        { id: '12', time: '20:00', available: true, price: 80000 },
      ]
    },
    {
      id: '3',
      name: 'Hongik University Basketball Court',
      sportType: 'basketball',
      location: 'Mapo-gu, Seoul',
      rating: 4.1,
      timeSlots: [
        { id: '13', time: '15:00', available: true, price: 40000 },
        { id: '14', time: '16:00', available: true, price: 40000 },
        { id: '15', time: '17:00', available: true, price: 50000 },
        { id: '16', time: '18:00', available: true, price: 50000 },
        { id: '17', time: '19:00', available: false, price: 60000 },
        { id: '18', time: '20:00', available: true, price: 60000 },
      ]
    },
    {
      id: '4',
      name: 'Seoul Dobong Ruda Futsal Field',
      sportType: 'soccer',
      location: 'Dobong-gu, Seoul',
      rating: 4.5,
      timeSlots: [
        { id: '19', time: '15:00', available: true, price: 80000 },
        { id: '20', time: '16:00', available: true, price: 80000 },
        { id: '21', time: '17:00', available: false, price: 80000 },
        { id: '22', time: '18:00', available: true, price: 90000 },
        { id: '23', time: '19:00', available: true, price: 90000 },
        { id: '24', time: '20:00', available: false, price: 90000 },
      ]
    },
    {
      id: '5',
      name: 'Seoul Stadium Gasan Mario Single Court',
      sportType: 'soccer',
      location: 'Gasan-dong, Seoul',
      rating: 4.5,
      timeSlots: [
        { id: '25', time: '15:00', available: true, price: 80000 },
        { id: '26', time: '16:00', available: true, price: 80000 },
        { id: '27', time: '17:00', available: false, price: 80000 },
        { id: '28', time: '18:00', available: true, price: 90000 },
        { id: '29', time: '19:00', available: true, price: 90000 },
        { id: '30', time: '20:00', available: false, price: 90000 },
      ]
    }
  ],
  ph: [
    {
      id: '1',
      name: 'Seoul Gwangjin Leaders Soccer Field',
      sportType: 'soccer',
      location: 'Gwangjin-gu, Seoul',
      rating: 4.5,
      timeSlots: [
        { id: '1', time: '15:00', available: true, price: 80000 },
        { id: '2', time: '16:00', available: true, price: 80000 },
        { id: '3', time: '17:00', available: false, price: 80000 },
        { id: '4', time: '18:00', available: true, price: 90000 },
        { id: '5', time: '19:00', available: true, price: 90000 },
        { id: '6', time: '20:00', available: false, price: 90000 },
      ]
    },
    {
      id: '2',
      name: 'SKY Futsal Park Court B',
      sportType: 'futsal',
      location: 'Gangnam-gu, Seoul',
      rating: 4.3,
      timeSlots: [
        { id: '7', time: '15:00', available: true, price: 60000 },
        { id: '8', time: '16:00', available: true, price: 60000 },
        { id: '9', time: '17:00', available: true, price: 70000 },
        { id: '10', time: '18:00', available: false, price: 70000 },
        { id: '11', time: '19:00', available: true, price: 80000 },
        { id: '12', time: '20:00', available: true, price: 80000 },
      ]
    },
    {
      id: '3',
      name: 'Hongik University Basketball Court',
      sportType: 'basketball',
      location: 'Mapo-gu, Seoul',
      rating: 4.1,
      timeSlots: [
        { id: '13', time: '15:00', available: true, price: 40000 },
        { id: '14', time: '16:00', available: true, price: 40000 },
        { id: '15', time: '17:00', available: true, price: 50000 },
        { id: '16', time: '18:00', available: true, price: 50000 },
        { id: '17', time: '19:00', available: false, price: 60000 },
        { id: '18', time: '20:00', available: true, price: 60000 },
      ]
    },
    {
      id: '4',
      name: 'Seoul Dobong Ruda Futsal Field',
      sportType: 'soccer',
      location: 'Dobong-gu, Seoul',
      rating: 4.5,
      timeSlots: [
        { id: '19', time: '15:00', available: true, price: 80000 },
        { id: '20', time: '16:00', available: true, price: 80000 },
        { id: '21', time: '17:00', available: false, price: 80000 },
        { id: '22', time: '18:00', available: true, price: 90000 },
        { id: '23', time: '19:00', available: true, price: 90000 },
        { id: '24', time: '20:00', available: false, price: 90000 },
      ]
    },
    {
      id: '5',
      name: 'Seoul Stadium Gasan Mario Single Court',
      sportType: 'soccer',
      location: 'Gasan-dong, Seoul',
      rating: 4.5,
      timeSlots: [
        { id: '25', time: '15:00', available: true, price: 80000 },
        { id: '26', time: '16:00', available: true, price: 80000 },
        { id: '27', time: '17:00', available: false, price: 80000 },
        { id: '28', time: '18:00', available: true, price: 90000 },
        { id: '29', time: '19:00', available: true, price: 90000 },
        { id: '30', time: '20:00', available: false, price: 90000 },
      ]
    }
  ]
};

// 기존 mockVenues는 한국어 버전으로 유지
export const mockVenues: SportsVenue[] = mockVenuesMultiLang.ko;

// 언어별 데이터를 가져오는 함수
export const getVenuesByLanguage = (language: SupportedLanguage): SportsVenue[] => {
  return mockVenuesMultiLang[language] || mockVenuesMultiLang.ko;
}; 