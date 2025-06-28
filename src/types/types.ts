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

export interface VenueImage {
  id: string;
  url: string;
  alt: string;
}

export interface VenueDetail {
  id: string;
  name: string;
  location: string;
  rating: number;
  images: VenueImage[];
  description: string;
  facilities: string[];
  rules: string[];
  contact: {
    phone: string;
    email: string;
  };
  matchPoints: {
    parking: boolean;
    shower: boolean;
    toilet: boolean;
    drink: boolean;
    rental: boolean;
  };
  operatingHours: {
    start: string;
    end: string;
  };
      price: {
      weekday: number;
      weekend: number;
    };
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

// 다국어 지원을 위한 새로운 타입들
export type SupportedLanguage = 'ko' | 'en' | 'ph';

export interface LanguageOption {
  code: SupportedLanguage;
  name: string;
  flag: string;
}

export interface LocalizedSportsVenue {
  id: string;
  name: string;
  sportType: string;
  location: string;
  rating: number;
  timeSlots: TimeSlot[];
}

export interface LocalizedSportType {
  id: string;
  name: string;
  icon: string;
  color: string;
}

export interface Translation {
  header: {
    brandName: string;
    bookingHistory: string;
    login: string;
    signup: string;
    language: string;
  };
  main: {
    bookNow: string;
    availableSlots: string;
    allRegions: string;
    deadlineApproaching: string;
    event: string;
    gender: string;
    level: string;
    promoEventTitle: string;
    promoEventDescription: string;
    teamMatchingTitle: string;
    teamMatchingDescription: string;
    soccerMatchTitle: string;
    soccerMatchDescription: string;
  };
  venueDetail: {
    venueNotFound: string;
    backToHome: string;
    matchPoints: string;
    allLevels: string;
    bothGenders: string;
    vs6_3matches: string;
    players10to18: string;
    soccerShoes: string;
    noFemalePlayersYet: string;
    managerLed: string;
    parking: string;
    shower: string;
    toilet: string;
    drinkSales: string;
    equipmentRental: string;
    available: string;
    unavailable: string;
    matchData: string;
    levelDistribution: string;
    expectedAverageLevel: string;
    amateur5: string;
    isLevel: string;
    levelWarning: string;
    playStyle: string;
    teamLeader: string;
    overallAverage: string;
    matchMethod: string;
    matchRules: string;
    progressMethod: string;
    goodToKnow: string;
    refundPolicy: string;
    cancelRefundPolicy: string;
    daysBefore2: string;
    dayBefore1: string;
    sameDay: string;
    within90min: string;
    freeCancellation: string;
    refund80: string;
    refund20: string;
    noRefund: string;
    contactInfo: string;
    applyNow: string;
    perTwoHours: string;
    applyNowToConfirm: string;
    confirmationFaster: string;
    promotionMessage: string;
    mapView: string;
    likes: string;
    // 매치 규칙
    rule1: string;
    rule2: string;
    rule3: string;
    // 진행 방식
    progress1: string;
    progress2: string;
    progress3: string;
    progress4: string;
    progress5: string;
    // 알아두면 좋아요
    goodInfo1: string;
    goodInfo2: string;
    goodInfo3: string;
    goodInfo4: string;
    // 환불 정책 추가 정보
    specialCancelCondition: string;
    refundNote1: string;
    refundNote2: string;
  };
  sports: {
    soccer: string;
    basketball: string;
    tennis: string;
    badminton: string;
    futsal: string;
  };
  common: {
    today: string;
    tomorrow: string;
    loading: string;
    error: string;
  };
  days: {
    sun: string;
    mon: string;
    tue: string;
    wed: string;
    thu: string;
    fri: string;
    sat: string;
  };
} 