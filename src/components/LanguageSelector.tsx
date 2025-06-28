import React, { useState, useCallback } from 'react';
import { 
  Button, 
  Menu, 
  MenuItem, 
  Box, 
  Typography 
} from '@mui/material';
import { ExpandMore as ExpandMoreIcon } from '@mui/icons-material';
import { useAppStore, languageOptions } from '@store/store';
import { getTranslation } from '@services/i18n';
import type { SupportedLanguage } from '../types/types';

function LanguageSelector() {
  const { selectedLanguage, setSelectedLanguage } = useAppStore();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  
  const t = getTranslation(selectedLanguage);
  const currentLanguage = languageOptions.find(lang => lang.code === selectedLanguage);

  const handleClick = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  }, []);

  const handleClose = useCallback(() => {
    setAnchorEl(null);
  }, []);

  const handleLanguageSelect = useCallback((language: SupportedLanguage) => {
    setSelectedLanguage(language);
    handleClose();
  }, [setSelectedLanguage, handleClose]);

  return (
    <Box>
      <Button
        onClick={handleClick}
        endIcon={<ExpandMoreIcon />}
        sx={{
          color: 'var(--text-secondary)',
          fontWeight: 'bold',
          borderRadius: 'var(--border-radius-sm)',
          px: 3,
          py: 1,
          '&:hover': {
            backgroundColor: '#f8f9fa',
            color: 'var(--main-color)',
          },
          transition: 'all 0.3s ease'
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Typography component="span" sx={{ fontSize: '1.2rem' }}>
            {currentLanguage?.flag}
          </Typography>
          <Typography component="span">
            {t.header.language}
          </Typography>
        </Box>
      </Button>
      
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        sx={{
          '& .MuiPaper-root': {
            borderRadius: 'var(--border-radius-md)',
            boxShadow: 'var(--shadow-medium)',
            border: '1px solid #e9ecef',
            mt: 1,
          }
        }}
      >
        {languageOptions.map((language) => (
          <MenuItem
            key={language.code}
            onClick={() => handleLanguageSelect(language.code)}
            selected={language.code === selectedLanguage}
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 2,
              px: 3,
              py: 2,
              '&:hover': {
                backgroundColor: 'var(--bg-glass)',
              },
              '&.Mui-selected': {
                backgroundColor: 'var(--main-color)',
                color: 'white',
                '&:hover': {
                  backgroundColor: 'var(--main-color-dark)',
                },
              }
            }}
          >
            <Typography component="span" sx={{ fontSize: '1.2rem' }}>
              {language.flag}
            </Typography>
            <Typography component="span" className="font-bold">
              {language.name}
            </Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}

export default LanguageSelector; 