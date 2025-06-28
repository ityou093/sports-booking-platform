import React from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Box,
  Container
} from '@mui/material';
import { useAppStore } from '@store/store';
import { getTranslation } from '@services/i18n';
import LanguageSelector from '@components/LanguageSelector';

function Header() {
  const { selectedLanguage } = useAppStore();
  const t = getTranslation(selectedLanguage);

  return (
    <AppBar 
      position="static" 
      elevation={0}
      sx={{ 
        backgroundColor: '#ffffff',
        color: 'var(--text-primary)',
        borderBottom: '1px solid #e9ecef',
        boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
      }}
    >
      <Container>
        <Toolbar sx={{ py: 1 }}>
          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: 'var(--main-color)',
            borderRadius: 'var(--border-radius-md)',
            px: 2,
            py: 1,
            mr: 2,
            boxShadow: '0 4px 15px rgba(29, 184, 166, 0.2)'
          }}>
            <Typography 
              variant="h5" 
              sx={{ 
                fontWeight: 'bold',
                color: 'white',
                fontSize: '1.5rem'
              }}
            >
              {t.header.brandName}
            </Typography>
          </Box>
          
          <Box sx={{ flexGrow: 1 }} />
          
          <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
            <Button sx={{
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
            }}>
              {t.header.bookingHistory}
            </Button>
            
            <Button sx={{
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
            }}>
              {t.header.login}
            </Button>
            
            <LanguageSelector />
            
            <Button sx={{
              backgroundColor: 'var(--main-color)',
              color: 'white',
              fontWeight: 'bold',
              borderRadius: 'var(--border-radius-sm)',
              px: 3,
              py: 1,
              boxShadow: '0 4px 15px rgba(29, 184, 166, 0.3)',
              '&:hover': {
                backgroundColor: 'var(--main-color-dark)',
                transform: 'translateY(-2px)',
                boxShadow: '0 6px 20px rgba(29, 184, 166, 0.4)'
              },
              transition: 'all 0.3s ease'
            }}>
              {t.header.signup}
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header; 