
import { Card, CardContent, Typography, Box } from '@mui/material';

function SpecialEventCard() {
  return (
    <Card sx={{ mb: 3, backgroundColor: '#fff3e0', border: '2px solid #ff9800' }}>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <Typography variant="body2" color="error" sx={{ fontWeight: 'bold' }}>
            🔥 마감임박!
          </Typography>
        </Box>
        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
          맞잡이는 순간 신청 마감
        </Typography>
        <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
          20:00 마감임박
        </Typography>
        <Typography variant="body2" color="textSecondary">
          서울 광진 리더스 축구장 출장 D팀...
        </Typography>
      </CardContent>
    </Card>
  );
}

export default SpecialEventCard; 