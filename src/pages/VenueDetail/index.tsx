import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  Container,
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  List,
  ListItem,
  Divider,
  IconButton,
  Chip,
  Avatar,
  Collapse,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
} from '@mui/material';
import {
  LocationOn,
  Phone,
  Email,
  LocalParking,
  Shower,
  Wc,
  LocalDrink,
  SportsBaseball,
  ArrowForward,
  ArrowBackIos,
  People,
  Schedule,
  FavoriteOutlined,
  Groups,
  SportsFootball,
  DirectionsRun,
  ExpandMore,
  ExpandLess,
} from '@mui/icons-material';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
} from 'chart.js';
import { Radar, Bar } from 'react-chartjs-2';
import type { VenueDetail } from '../../types/types';
import { getVenuesByLanguage } from '../../services/mockData';
import { useAppStore } from '../../store/store';
import { getTranslation } from '../../services/i18n';

// Chart.js 등록
ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement
);

function VenueDetailPage() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [likes, setLikes] = useState(0);
  const [matchMethodExpanded, setMatchMethodExpanded] = useState(false);
  const [refundPolicyExpanded, setRefundPolicyExpanded] = useState(false);
  
  // 다국어 지원
  const { selectedLanguage } = useAppStore();
  const t = getTranslation(selectedLanguage);
  const localizedVenues = getVenuesByLanguage(selectedLanguage);
  
  // Find venue from localized data by id
  const foundVenue = localizedVenues.find(venue => venue.id === id);
  
  // If venue not found, redirect or show error
  if (!foundVenue) {
    return (
      <Container maxWidth="xl" sx={{ py: 3 }}>
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h4" gutterBottom>
            {t.venueDetail.venueNotFound}
          </Typography>
          <Button variant="contained" onClick={() => navigate('/')}>
            {t.venueDetail.backToHome}
          </Button>
        </Box>
      </Container>
    );
  }

  // Create VenueDetail object from found venue
  const venue: VenueDetail = {
    id: foundVenue.id,
    name: foundVenue.name,
    location: foundVenue.location + t.venueDetail.mapView,
    rating: foundVenue.rating,
    images: [
      { id: '1', url: '/src/assets/images/banner-6member_pc.png', alt: '구장 전경 1' },
      { id: '2', url: '/src/assets/images/banner-starter_pc.png', alt: '구장 전경 2' },
      { id: '3', url: '/src/assets/images/banner-manner_pc.png', alt: '구장 전경 3' },
    ],
    description: '깨끗하고 현대적인 시설을 갖춘 프리미엄 풋살장입니다. 최고급 인조잔디와 완벽한 조명 시설로 언제든 최상의 경기를 즐기실 수 있습니다.',
    facilities: [t.venueDetail.parking, t.venueDetail.shower, t.venueDetail.toilet, t.venueDetail.drinkSales, t.venueDetail.equipmentRental],
    rules: [
      '경기 시작 10분 전까지 도착해주세요',
      '안전을 위해 정품 축구화만 착용 가능합니다',
      '구장 내 흡연 및 음주는 금지되어 있습니다',
      '경기 후 깨끗하게 정리 부탁드립니다'
    ],
    contact: {
      phone: '02-1234-5678',
      email: 'info@playfootball.com'
    },
    matchPoints: {
      parking: true,
      shower: true,
      toilet: true,
      drink: true,
      rental: true
    },
    operatingHours: {
      start: '06:00',
      end: '24:00'
    },
    price: {
      weekday: 10000,
      weekend: 12000
    }
  };

  // 레이더 차트 데이터
  const radarData = {
    labels: ['공격력', '수비력', '스피드', '체력', '패스', '드리블'],
    datasets: [
      {
        label: t.venueDetail.teamLeader,
        data: [8, 6, 9, 7, 8, 7],
        backgroundColor: 'rgba(66, 133, 244, 0.2)',
        borderColor: 'rgba(66, 133, 244, 1)',
        borderWidth: 2,
        pointBackgroundColor: 'rgba(66, 133, 244, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(66, 133, 244, 1)',
      },
      {
        label: t.venueDetail.overallAverage,
        data: [6, 7, 6, 6, 7, 6],
        backgroundColor: 'rgba(158, 158, 158, 0.2)',
        borderColor: 'rgba(158, 158, 158, 1)',
        borderWidth: 2,
        pointBackgroundColor: 'rgba(158, 158, 158, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(158, 158, 158, 1)',
      },
    ],
  };

  const radarOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom' as const,
        labels: {
          padding: 20,
          font: {
            size: 12,
          },
        },
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleColor: '#fff',
        bodyColor: '#fff',
        borderColor: 'rgba(66, 133, 244, 1)',
        borderWidth: 1,
      },
    },
    scales: {
      r: {
        angleLines: {
          color: 'rgba(0, 0, 0, 0.1)',
        },
        grid: {
          color: 'rgba(0, 0, 0, 0.1)',
        },
        pointLabels: {
          font: {
            size: 12,
          },
          color: '#333',
        },
        ticks: {
          beginAtZero: true,
          max: 10,
          stepSize: 2,
          display: false,
        },
      },
    },
  };

  // 막대 차트 데이터 (레벨 분포도)
  const levelData = [14, 0, 57, 29, 0]; // 루키, 비기너, 아마추어, 세미프로, 프로
  const levelLabels = ['루키', '비기너', '아마추어', '세미프로', '프로'];
  
  const barData = {
    labels: levelLabels,
    datasets: [
      {
        data: levelData,
        backgroundColor: [
          '#F4D03F', // 루키 - 연한 노란색
          '#E8E8E8', // 비기너 - 회색
          '#F4D03F', // 아마추어 - 노란색 (가장 높음)
          '#F4D03F', // 세미프로 - 노란색
          '#E8E8E8', // 프로 - 회색
        ],
        borderColor: [
          '#F1C40F',
          '#BDC3C7',
          '#F1C40F',
          '#F1C40F',
          '#BDC3C7',
        ],
        borderWidth: 1,
        borderRadius: 4,
      },
    ],
  };

  const barOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleColor: '#fff',
        bodyColor: '#fff',
        callbacks: {
          label: function(context: { parsed: { y: number } }) {
            return `${context.parsed.y}%`;
          }
        }
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            size: 12,
          },
          color: '#666',
        },
      },
      y: {
        beginAtZero: true,
        max: 60,
        grid: {
          display: false,
        },
        ticks: {
          display: false,
        },
      },
    },
    elements: {
      bar: {
        borderSkipped: false,
      },
    },
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? venue.images.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === venue.images.length - 1 ? 0 : prev + 1
    );
  };

  const formatPrice = (price: number) => {
    return `${price.toLocaleString()}원`;
  };

  const handleLike = () => {
    setLikes(prev => prev + 1);
  };

  return (
    /**테스트 */
    <Container maxWidth="xl" sx={{ py: 3 }}>
      {/* Header with back button */}
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
        <IconButton onClick={() => navigate(-1)} sx={{ mr: 2 }}>
          <ArrowBackIos />
        </IconButton>
        <Typography variant="h4" fontWeight="bold">
          {foundVenue.name}
        </Typography>
      </Box>

      {/* Image Slider - Full Width */}
      <Card sx={{ mb: 3 }}>
        <Box sx={{ position: 'relative', height: 400 }}>
          <img 
            src={venue.images[currentImageIndex].url}
            alt={venue.images[currentImageIndex].alt}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
          
          {/* Image navigation */}
          <IconButton
            onClick={handlePrevImage}
            sx={{
              position: 'absolute',
              left: 10,
              top: '50%',
              transform: 'translateY(-50%)',
              backgroundColor: 'rgba(255,255,255,0.8)',
              '&:hover': { backgroundColor: 'rgba(255,255,255,0.9)' }
            }}
          >
            <ArrowBackIos />
          </IconButton>
          
          <IconButton
            onClick={handleNextImage}
            sx={{
              position: 'absolute',
              right: 10,
              top: '50%',
              transform: 'translateY(-50%)',
              backgroundColor: 'rgba(255,255,255,0.8)',
              '&:hover': { backgroundColor: 'rgba(255,255,255,0.9)' }
            }}
          >
            <ArrowForward />
          </IconButton>

          {/* Image indicators */}
          <Box
            sx={{
              position: 'absolute',
              bottom: 10,
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              gap: 1
            }}
          >
            {venue.images.map((_, index) => (
              <Box
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                sx={{
                  width: 10,
                  height: 10,
                  borderRadius: '50%',
                  backgroundColor: index === currentImageIndex ? 'white' : 'rgba(255,255,255,0.5)',
                  cursor: 'pointer'
                }}
              />
            ))}
          </Box>
        </Box>
      </Card>

      {/* Main Content Area */}
      <Box sx={{ display: 'flex', gap: 3, position: 'relative' }}>
        {/* Left Column - 70% */}
        <Box sx={{ flex: '0 0 70%' }}>
          {/* Match Points Section */}
          <Card sx={{ mb: 3 }}>
            <CardContent>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                {t.venueDetail.matchPoints}
              </Typography>
              
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <People color="action" />
                  <Typography variant="body2">{t.venueDetail.allLevels}</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Groups color="action" />
                  <Typography variant="body2">{t.venueDetail.bothGenders}</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <SportsFootball color="action" />
                  <Typography variant="body2">{t.venueDetail.vs6_3matches}</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Schedule color="action" />
                  <Typography variant="body2">{t.venueDetail.players10to18}</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <DirectionsRun color="action" />
                  <Typography variant="body2">{t.venueDetail.soccerShoes}</Typography>
                </Box>
              </Box>

              <Box sx={{ mb: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                  <Avatar sx={{ width: 24, height: 24, bgcolor: 'warning.main' }}>💃</Avatar>
                  <Typography variant="body2">{t.venueDetail.noFemalePlayersYet}</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Avatar sx={{ width: 24, height: 24, bgcolor: 'info.main' }}>👨</Avatar>
                  <Typography variant="body2">{t.venueDetail.managerLed}</Typography>
                </Box>
              </Box>

              {/* Facilities Grid */}
              <Box sx={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                gap: 1,
                justifyContent: 'space-between'
              }}>
                <Box sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: 1,
                  minWidth: '18%',
                  mb: 1
                }}>
                  <LocalParking color={venue.matchPoints.parking ? 'success' : 'disabled'} />
                  <Box>
                    <Typography variant="body2" fontWeight="bold">{t.venueDetail.parking}</Typography>
                    <Typography variant="caption" color="textSecondary">
                      {venue.matchPoints.parking ? t.venueDetail.available : t.venueDetail.unavailable}
                    </Typography>
                  </Box>
                </Box>
                
                <Box sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: 1,
                  minWidth: '18%',
                  mb: 1
                }}>
                  <Shower color={venue.matchPoints.shower ? 'success' : 'disabled'} />
                  <Box>
                    <Typography variant="body2" fontWeight="bold">{t.venueDetail.shower}</Typography>
                    <Typography variant="caption" color="textSecondary">
                      {venue.matchPoints.shower ? t.venueDetail.available : t.venueDetail.unavailable}
                    </Typography>
                  </Box>
                </Box>
                
                <Box sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: 1,
                  minWidth: '18%',
                  mb: 1
                }}>
                  <Wc color={venue.matchPoints.toilet ? 'success' : 'disabled'} />
                  <Box>
                    <Typography variant="body2" fontWeight="bold">{t.venueDetail.toilet}</Typography>
                    <Typography variant="caption" color="textSecondary">
                      {venue.matchPoints.toilet ? t.venueDetail.available : t.venueDetail.unavailable}
                    </Typography>
                  </Box>
                </Box>
                
                <Box sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: 1,
                  minWidth: '18%',
                  mb: 1
                }}>
                  <LocalDrink color={venue.matchPoints.drink ? 'success' : 'disabled'} />
                  <Box>
                    <Typography variant="body2" fontWeight="bold">{t.venueDetail.drinkSales}</Typography>
                    <Typography variant="caption" color="textSecondary">
                      {venue.matchPoints.drink ? t.venueDetail.available : t.venueDetail.unavailable}
                    </Typography>
                  </Box>
                </Box>
                
                <Box sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: 1,
                  minWidth: '18%',
                  mb: 1
                }}>
                  <SportsBaseball color={venue.matchPoints.rental ? 'success' : 'disabled'} />
                  <Box>
                    <Typography variant="body2" fontWeight="bold">{t.venueDetail.equipmentRental}</Typography>
                    <Typography variant="caption" color="textSecondary">
                      {venue.matchPoints.rental ? t.venueDetail.available : t.venueDetail.unavailable}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </CardContent>
          </Card>

          {/* Match Data Section */}
          <Card sx={{ mb: 3 }}>
            <CardContent>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                {t.venueDetail.matchData}
              </Typography>
              
              <Typography variant="subtitle2" gutterBottom>
                {t.venueDetail.levelDistribution}
              </Typography>
              
              <Typography variant="body2" gutterBottom sx={{ mb: 2 }}>
                {t.venueDetail.expectedAverageLevel} <Typography component="span" color="primary" fontWeight="bold">{t.venueDetail.amateur5}</Typography> {t.venueDetail.isLevel}
              </Typography>
              
              {/* Bar Chart */}
              <Box sx={{ 
                position: 'relative', 
                height: 150, 
                mb: 2
              }}>
                <Bar data={barData} options={barOptions} />
              </Box>

              {/* Percentage Labels */}
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                {levelData.map((percentage, index) => (
                  <Box key={levelLabels[index]} sx={{ textAlign: 'center', flex: 1 }}>
                    <Typography variant="caption" color="textSecondary">
                      {percentage}%
                    </Typography>
                    <Typography variant="caption" display="block">
                      {levelLabels[index]}
                    </Typography>
                  </Box>
                ))}
              </Box>

              <Box sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: 1, 
                p: 2, 
                bgcolor: 'warning.light',
                borderRadius: 1,
                mb: 2
              }}>
                <Typography variant="body2" sx={{ fontWeight: 'bold' }}>⚠️</Typography>
                <Typography variant="body2">
                  {t.venueDetail.levelWarning}
                </Typography>
              </Box>
            </CardContent>
          </Card>

          {/* Play Style Section */}
          <Card sx={{ mb: 3 }}>
            <CardContent>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                {t.venueDetail.playStyle}
              </Typography>
              
              <Box sx={{ 
                display: 'flex', 
                gap: 2, 
                alignItems: 'center',
                mb: 2
              }}>
                <Chip label={t.venueDetail.teamLeader} color="primary" size="small" />
                <Chip label={t.venueDetail.overallAverage} color="default" variant="outlined" size="small" />
              </Box>

              {/* Radar Chart */}
              <Box sx={{ 
                position: 'relative', 
                height: 300, 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center',
                p: 2
              }}>
                <Radar data={radarData} options={radarOptions} />
              </Box>
            </CardContent>
          </Card>

          {/* Match Method Section */}
          <Card sx={{ mb: 3 }}>
            <CardContent>
              <Box sx={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                cursor: 'pointer'
              }}
              onClick={() => setMatchMethodExpanded(!matchMethodExpanded)}
              >
                <Typography variant="h6" fontWeight="bold">
                  {t.venueDetail.matchMethod}
                </Typography>
                <IconButton>
                  {matchMethodExpanded ? <ExpandLess /> : <ExpandMore />}
                </IconButton>
              </Box>
              
              <Collapse in={matchMethodExpanded} timeout="auto" unmountOnExit>
                <Box sx={{ mt: 2 }}>
                  <Typography variant="subtitle2" fontWeight="bold" gutterBottom>
                    {t.venueDetail.matchRules}
                  </Typography>
                  <List dense sx={{ mb: 2 }}>
                    <ListItem sx={{ pl: 0 }}>
                      <Typography variant="body2">• {t.venueDetail.rule1}</Typography>
                    </ListItem>
                    <ListItem sx={{ pl: 0 }}>
                      <Typography variant="body2">• {t.venueDetail.rule2}</Typography>
                    </ListItem>
                    <ListItem sx={{ pl: 0 }}>
                      <Typography variant="body2">• {t.venueDetail.rule3}</Typography>
                    </ListItem>
                  </List>

                  <Typography variant="subtitle2" fontWeight="bold" gutterBottom>
                    {t.venueDetail.progressMethod}
                  </Typography>
                  <List dense sx={{ mb: 2 }}>
                    <ListItem sx={{ pl: 0 }}>
                      <Typography variant="body2">• {t.venueDetail.progress1}</Typography>
                    </ListItem>
                    <ListItem sx={{ pl: 0 }}>
                      <Typography variant="body2">• {t.venueDetail.progress2}</Typography>
                    </ListItem>
                    <ListItem sx={{ pl: 0 }}>
                      <Typography variant="body2">• {t.venueDetail.progress3}</Typography>
                    </ListItem>
                    <ListItem sx={{ pl: 0 }}>
                      <Typography variant="body2">• {t.venueDetail.progress4}</Typography>
                    </ListItem>
                    <ListItem sx={{ pl: 0 }}>
                      <Typography variant="body2">• {t.venueDetail.progress5}</Typography>
                    </ListItem>
                  </List>

                  <Typography variant="subtitle2" fontWeight="bold" gutterBottom>
                    {t.venueDetail.goodToKnow}
                  </Typography>
                  <List dense>
                    <ListItem sx={{ pl: 0 }}>
                      <Typography variant="body2">• {t.venueDetail.goodInfo1}</Typography>
                    </ListItem>
                    <ListItem sx={{ pl: 0 }}>
                      <Typography variant="body2">• {t.venueDetail.goodInfo2}</Typography>
                    </ListItem>
                    <ListItem sx={{ pl: 0 }}>
                      <Typography variant="body2">• {t.venueDetail.goodInfo3}</Typography>
                    </ListItem>
                    <ListItem sx={{ pl: 0 }}>
                      <Typography variant="body2">• {t.venueDetail.goodInfo4}</Typography>
                    </ListItem>
                  </List>
                </Box>
              </Collapse>
            </CardContent>
          </Card>

          {/* Refund Policy Section */}
          <Card>
            <CardContent>
              <Box sx={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                cursor: 'pointer'
              }}
              onClick={() => setRefundPolicyExpanded(!refundPolicyExpanded)}
              >
                <Typography variant="h6" fontWeight="bold">
                  {t.venueDetail.refundPolicy}
                </Typography>
                <IconButton>
                  {refundPolicyExpanded ? <ExpandLess /> : <ExpandMore />}
                </IconButton>
              </Box>
              
              <Collapse in={refundPolicyExpanded} timeout="auto" unmountOnExit>
                <Box sx={{ mt: 2 }}>
                  <Typography variant="subtitle2" fontWeight="bold" gutterBottom>
                    {t.venueDetail.cancelRefundPolicy}
                  </Typography>
                  
                  <TableContainer component={Paper} variant="outlined" sx={{ mb: 2 }}>
                    <Table size="small">
                      <TableBody>
                        <TableRow>
                          <TableCell sx={{ fontWeight: 'bold' }}>{t.venueDetail.daysBefore2}</TableCell>
                          <TableCell>{t.venueDetail.freeCancellation}</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell sx={{ fontWeight: 'bold' }}>{t.venueDetail.dayBefore1}</TableCell>
                          <TableCell>{t.venueDetail.refund80}</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell sx={{ fontWeight: 'bold' }}>{t.venueDetail.sameDay}</TableCell>
                          <TableCell>{t.venueDetail.refund20}</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell sx={{ fontWeight: 'bold', whiteSpace: 'pre-line' }}>
                            {t.venueDetail.specialCancelCondition}
                          </TableCell>
                          <TableCell>{t.venueDetail.freeCancellation}</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell sx={{ fontWeight: 'bold' }}>{t.venueDetail.within90min}</TableCell>
                          <TableCell>{t.venueDetail.noRefund}</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TableContainer>

                  <List dense>
                    <ListItem sx={{ pl: 0 }}>
                      <Typography variant="body2">• {t.venueDetail.refundNote1}</Typography>
                    </ListItem>
                    <ListItem sx={{ pl: 0 }}>
                      <Typography variant="body2">• {t.venueDetail.refundNote2}</Typography>
                    </ListItem>
                  </List>
                </Box>
              </Collapse>
            </CardContent>
          </Card>
        </Box>

        {/* Right Column - 30% Floating Menu */}
        <Box sx={{ 
          flex: '0 0 30%',
          position: 'sticky',
          top: 20,
          height: 'fit-content'
        }}>
          <Card>
            <CardContent>
              {/* Date and Time */}
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                6월 25일 수요일 13:00
              </Typography>
              
              {/* Venue Info */}
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                {venue.name}
              </Typography>
              
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <LocationOn color="action" sx={{ mr: 1 }} />
                <Typography variant="body2" color="textSecondary">
                  {venue.location}
                </Typography>
              </Box>

              {/* Like Button */}
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <IconButton onClick={handleLike} color="error">
                  <FavoriteOutlined />
                </IconButton>
                <Typography variant="body2">{likes} {t.venueDetail.likes}</Typography>
              </Box>

              <Divider sx={{ my: 2 }} />

              {/* Price */}
              <Typography variant="h5" fontWeight="bold" color="primary" gutterBottom>
                {formatPrice(venue.price.weekday)} <Typography variant="body2" component="span" color="textSecondary">{t.venueDetail.perTwoHours}</Typography>
              </Typography>

              {/* Availability Status */}
              <Box sx={{ 
                p: 2, 
                bgcolor: 'success.light', 
                borderRadius: 1, 
                textAlign: 'center',
                mb: 2
              }}>
                <Typography variant="body2" color="success.dark">
                  {t.venueDetail.promotionMessage}
                </Typography>
              </Box>

              {/* Application Buttons */}
              <Box sx={{ mb: 2 }}>
                <Typography variant="body2" color="textSecondary" gutterBottom>
                  {t.venueDetail.applyNowToConfirm}
                </Typography>
                <Typography variant="body2" color="textSecondary" gutterBottom>
                  {t.venueDetail.confirmationFaster}
                </Typography>
              </Box>

              <Button 
                variant="contained" 
                fullWidth
                size="large"
                sx={{ 
                  mb: 2,
                  py: 1.5,
                  backgroundColor: '#4285F4',
                  '&:hover': {
                    backgroundColor: '#3367D6'
                  }
                }}
              >
                {t.venueDetail.applyNow}
              </Button>

              {/* Contact Info */}
              <Divider sx={{ my: 2 }} />
              
              <Typography variant="subtitle2" fontWeight="bold" gutterBottom>
                {t.venueDetail.contactInfo}
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <Phone color="action" sx={{ mr: 1, fontSize: 16 }} />
                <Typography variant="body2">{venue.contact.phone}</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Email color="action" sx={{ mr: 1, fontSize: 16 }} />
                <Typography variant="body2">{venue.contact.email}</Typography>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Container>
  );
}

export default VenueDetailPage; 