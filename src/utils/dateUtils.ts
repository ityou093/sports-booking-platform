import type { SupportedLanguage } from '../types/types';
import { getTranslation } from '../services/i18n';

export const formatDate = (date: Date, language: SupportedLanguage = 'ko'): string => {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  
  const t = getTranslation(language);
  
  if (date.toDateString() === today.toDateString()) {
    return t.common.today;
  } else if (date.toDateString() === tomorrow.toDateString()) {
    return t.common.tomorrow;
  }
  return `${date.getMonth() + 1}월 ${date.getDate()}일`;
};

export const formatTime = (timeString: string): string => {
  return timeString;
};

export const getDayOfWeek = (date: Date, language: SupportedLanguage = 'ko'): string => {
  const t = getTranslation(language);
  const dayKeys: (keyof typeof t.days)[] = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
  const dayKey = dayKeys[date.getDay()];
  return t.days[dayKey];
};

export const getDateRange = (days: number): Date[] => {
  const dates = [];
  for (let i = 0; i < days; i++) {
    const date = new Date();
    date.setDate(date.getDate() + i);
    dates.push(date);
  }
  return dates;
}; 