import { useState } from 'react';
import { 
  Container,
  Box,
  Typography,
  Chip,
  Tab,
  Tabs,
  Stack
} from '@mui/material';
import { useAppStore } from '@store/store';
import { getVenuesByLanguage } from '@services/mockData';
import { getTranslation, getSportsByLanguage } from '@services/i18n';
import { formatDate, getDayOfWeek } from '@utils/dateUtils';
import SportCategoryCard from '@components/SportCategoryCard';
import VenueCard from '@components/VenueCard';
import SliderComponent, { type SlideData } from '@components/Slider';

function HomePage() {
  const { 
    selectedSport, 
    setSelectedSport,
    selectedLanguage
  } = useAppStore();

  const [tabValue, setTabValue] = useState(0);
  
  // 다국어 지원
  const t = getTranslation(selectedLanguage);
  const localizedSports = getSportsByLanguage(selectedLanguage);
  const localizedVenues = getVenuesByLanguage(selectedLanguage);

  // 슬라이드 데이터 정의 (언어별 번역 적용)
  const slides: SlideData[] = [
    {
      id: 1,
      title: t.main.soccerMatchTitle,
      description: t.main.soccerMatchDescription,
      image: {
        desktop: 'https://d31wz4d3hgve8q.cloudfront.net/media/banner-starter_pc.png',
        mobile: 'https://d31wz4d3hgve8q.cloudfront.net/media/banner-starter_m.png'
      }
    },
    {
      id: 2,
      title: t.main.promoEventTitle,
      description: t.main.promoEventDescription,
      image: {
        desktop: 'https://d31wz4d3hgve8q.cloudfront.net/media/banner-6member_pc.png',
        mobile: 'https://d31wz4d3hgve8q.cloudfront.net/media/banner-6member_m.png'
      }
    },
    {
      id: 3,
      title: t.main.teamMatchingTitle,
      description: t.main.teamMatchingDescription,
      image: {
        desktop: 'https://d31wz4d3hgve8q.cloudfront.net/media/banner-manner_pc.png',
        mobile: 'https://d31wz4d3hgve8q.cloudfront.net/media/banner-manner_m.png'
      }
    },
  ];

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const filteredVenues = localizedVenues.filter(venue => 
    venue.sportType === selectedSport
  );

  return (
    <Box sx={{ flexGrow: 1, minHeight: '200vh', backgroundColor: '#ffffff' }}>
      {/* 메인 배너 */}
      <div className="text-white py-12 md:py-16 text-center">
        <Container maxWidth="xl">
          <div className="relative w-full max-w-7xl mx-auto rounded-xl overflow-hidden">
            <SliderComponent slides={slides} />
          </div>
        </Container>
      </div>

      <Container sx={{ pb: 4 }}>
        {/* Sports Categories */}
        <Box className="container-margin">
          <Box 
            sx={{ 
              display: 'grid',
              gridTemplateColumns: { 
                xs: 'repeat(5, 1fr)', 
                sm: 'repeat(5, 1fr)', 
                md: 'repeat(5, 1fr)' 
              },
              gap: 1,
              mb: 4
            }}
          >
            {localizedSports.map((sport) => (
              <Box key={sport.id}>
                <SportCategoryCard 
                  sport={sport}
                  isSelected={selectedSport === sport.id}
                  onClick={() => setSelectedSport(sport.id)}
                />
              </Box>
            ))}
          </Box>
        </Box>

        {/* Date Selection */}
        <Box sx={{ 
          mb: 4, 
          backgroundColor: '#f8f9fa', 
          borderRadius: 'var(--border-radius-lg)',
          p: 3,
          border: '1px solid #e9ecef'
        }}>
          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            variant="scrollable"
            scrollButtons="auto"
            sx={{
              '& .MuiTab-root': {
                color: 'var(--text-secondary)',
                borderRadius: 'var(--border-radius-sm)',
                margin: '0 5px',
                minHeight: '80px',
                backgroundColor: '#ffffff',
                border: '1px solid #e9ecef',
                '&:hover': {
                  backgroundColor: '#f8f9fa',
                  borderColor: 'var(--main-color)',
                },
                '&.Mui-selected': {
                  backgroundColor: 'var(--main-color)',
                  color: 'white',
                  fontWeight: 'bold',
                  borderColor: 'var(--main-color)',
                }
              },
              '& .MuiTabs-indicator': {
                display: 'none'
              }
            }}
          >
            {Array.from({ length: 14 }, (_, i) => {
              const date = new Date();
              date.setDate(date.getDate() + i);
              return (
                <Tab
                  key={i}
                  label={
                    <Box className="text-center">
                      <Typography variant="body2" className="font-bold">
                        {formatDate(date, selectedLanguage)}
                      </Typography>
                      <Typography variant="caption">
                        {getDayOfWeek(date, selectedLanguage)}
                      </Typography>
                    </Box>
                  }
                />
              );
            })}
          </Tabs>
        </Box>

        {/* Location Filter */}
        <Box className="container-margin text-center">
          <Stack direction="row" spacing={2} justifyContent="left">
            <Chip 
              label={t.main.allRegions}
              sx={{
                border: '1px solid var(--main-color)',
                backgroundColor: 'transparent',
                color: 'var(--main-color)',
                marginRight: 1,
              }}
            />
            <Chip 
              label={t.main.deadlineApproaching}
              sx={{
                border: '1px solid var(--main-color)',
                backgroundColor: 'transparent',
                color: 'var(--main-color)',
                marginRight: 1,
              }}
            />
            <Chip 
              label={t.main.event}
              className="animate-pulse"
              sx={{
                backgroundColor: 'var(--accent-color)',
                color: 'white',
                borderRadius: 'var(--border-radius-md)',
                px: 2,
                py: 1,
                fontSize: '1rem',
                fontWeight: 'bold'
              }}
            />
            <Chip 
              label={t.main.gender}
              sx={{
                border: '1px solid var(--main-color)',
                backgroundColor: 'transparent',
                color: 'var(--main-color)',
                marginRight: 1,
              }}
            />
            <Chip 
              label={t.main.level}
              sx={{
                border: '1px solid var(--main-color)',
                backgroundColor: 'transparent',
                color: 'var(--main-color)',
                marginRight: 1,
              }}
            />
          </Stack>
        </Box>

        {/* Venue List */}
        <Box sx={{ mt: 4 }}>
          {filteredVenues.map((venue) => (
            <VenueCard key={venue.id} venue={venue} />
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default HomePage; 