import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function weathercard({weatherData}) {
    if (!weatherData) return null;

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
          Temperature
        </Typography>
        <Typography variant="body2">
        {weatherData.current.temp_c}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default weathercard