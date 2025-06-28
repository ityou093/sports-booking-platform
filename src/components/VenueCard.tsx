import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Card, 
  CardContent, 
  Typography, 
  Box, 
  Rating, 
  Avatar, 
  Button
} from '@mui/material';
import { LocationOn as LocationIcon } from '@mui/icons-material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import type { SportsVenue } from '../types/types';
import { formatCurrency } from '../utils/formatUtils';
import { useAppStore } from '@store/store';
import { getTranslation } from '@services/i18n';

interface VenueCardProps {
  venue: SportsVenue;
}

function VenueCard({ venue }: VenueCardProps) {
  const navigate = useNavigate();
  const { selectedLanguage } = useAppStore();
  const t = getTranslation(selectedLanguage);

  const handleTimeSlotClick = (slotId: string) => {
    navigate(`/venue/${venue.id}?timeSlot=${slotId}`);
  };

  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
              {venue.name}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <LocationIcon fontSize="small" color="action" />
              <Typography variant="body2" color="textSecondary" sx={{ ml: 0.5 }}>
                {venue.location}
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Rating value={venue.rating} readOnly size="small" />
              <Typography variant="body2" color="textSecondary" sx={{ ml: 1 }}>
                {venue.rating}
              </Typography>
            </Box>
          </Box>
          <Avatar 
            sx={{
              backgroundColor: 'white',  // 배경을 흰색으로 설정
              border: '2px solid var(--main-color)',  // 테두리를 파란색으로 설정
              padding: 1,  // 아이콘이 잘 안 보일 경우 패딩 조정
            }}
          >
          <FavoriteIcon sx={{ color: 'var(--main-color)' }} />  {/* 하트 아이콘의 색상 설정 */}
          </Avatar>
        </Box>

        {/* Time Slots */}
        <Typography variant="subtitle2" sx={{ fontWeight: 'bold', mb: 1 }}>
          {t.main.availableSlots}
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          {venue.timeSlots.map((slot) => (
            <Button
              key={slot.id}
              variant={slot.available ? "outlined" : "text"}
              disabled={!slot.available}
              size="small"
              onClick={() => handleTimeSlotClick(slot.id)}
              sx={{
                minWidth: '80px',
                color: slot.available ? 'primary.main' : 'text.disabled',
                cursor: slot.available ? 'pointer' : 'not-allowed'
              }}
            >
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="caption" display="block">
                  {slot.time}
                </Typography>
                <Typography variant="caption" display="block">
                  {formatCurrency(slot.price)}
                </Typography>
              </Box>
            </Button>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
}

export default VenueCard; 