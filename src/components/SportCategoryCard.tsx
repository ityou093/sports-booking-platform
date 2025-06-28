import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import type { SportType } from '../types/types';

interface SportCategoryCardProps {
  sport: SportType;
  isSelected: boolean;
  onClick: () => void;
}

function SportCategoryCard({ sport, isSelected, onClick }: SportCategoryCardProps) {
  return (
    <Card 
      sx={{ 
        textAlign: 'center', 
        cursor: 'pointer',
        backgroundColor: isSelected ? 'var(--main-color)' : '#ffffff',
        color: isSelected ? 'white' : 'var(--text-primary)',
        border: isSelected ? '2px solid var(--main-color)' : '2px solid #e9ecef',
        borderRadius: 'var(--border-radius-lg)',
        minHeight: '60px',
        maxWidth: '120px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: isSelected ? '0 4px 20px rgba(29, 184, 166, 0.3)' : '0 2px 8px rgba(0,0,0,0.1)',
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'translateY(-3px)',
          backgroundColor: isSelected ? 'var(--main-color-dark)' : 'var(--main-color)',
          color: 'white',
          borderColor: 'var(--main-color)',
          boxShadow: '0 6px 25px rgba(29, 184, 166, 0.4)',
        }
      }}
      onClick={onClick}
    >
      <CardContent sx={{ py: 1, px: 1, '&:last-child': { pb: 1 } }}>
        <Typography 
          variant="h4" 
          sx={{ 
            mb: 0.5, 
            fontSize: '1.8rem',
            filter: 'drop-shadow(1px 1px 2px rgba(0,0,0,0.1))'
          }}
        >
          {sport.icon}
        </Typography>
        <Typography 
          variant="body2" 
          className="font-bold"
          sx={{ 
            fontSize: '0.8rem',
            letterSpacing: '0.3px',
            lineHeight: 1.2
          }}
        >
          {sport.name}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default SportCategoryCard; 