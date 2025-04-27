import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

const cards = [
  {
    id: 1,
    title: 'Total Income',
    description: '50000',
  },
  {
    id: 2,
    title: 'Total Wages Given',
    description: '35000',
  },
  {
    id: 3,
    title: 'Pending Wages',
    description: '13000',
  },

];

function Cards() {
  const [selectedCard, setSelectedCard] = React.useState(0);
  return (
    <Box
      sx={{
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(min(200px, 100%), 1fr))',
        gap:15,
        
      }}
    >
    <Card  sx={{
            width: 300,       
            height: 100,  
            background: 'linear-gradient(to top,rgb(20, 173, 3),rgb(200, 224, 209))',
            
        }}>
          <CardActionArea
            // onClick={() => setSelectedCard(index)}
            // data-active={selectedCard === index ? '' : undefined}
            sx={{
              height: '100%',
              '&[data-active]': {
                backgroundColor: 'action.selected',
                '&:hover': {
                  backgroundColor: 'action.selectedHover',
                },
              },
            }}
          >
            <CardContent sx={{ height: '100%' }}>
              <Typography variant="h5" component="div">
              Total Income
              </Typography>
              <Typography variant="h6" color="white">
              50000
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card  sx={{
            width: 300,       
            height: 100,  
            background: 'linear-gradient(to top,rgb(104, 56, 12),rgb(244, 176, 74))',
            
        }}>
          <CardActionArea
            // onClick={() => setSelectedCard(index)}
            // data-active={selectedCard === index ? '' : undefined}
            sx={{
              height: '100%',
              '&[data-active]': {
                backgroundColor: 'action.selected',
                '&:hover': {
                  backgroundColor: 'action.selectedHover',
                },
              },
            }}
          >
            <CardContent sx={{ height: '100%' }}>
              <Typography variant="h5" component="div">
              Total Wages Given
              </Typography>
              <Typography variant="h6" color="white">
              30000
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card  sx={{
            width: 300,       
            height: 100,  
            background: 'linear-gradient(to top,rgb(105, 8, 8),rgb(246, 109, 109))',
            
        }}>
          <CardActionArea
            // onClick={() => setSelectedCard(index)}
            // data-active={selectedCard === index ? '' : undefined}
            sx={{
              height: '100%',
              '&[data-active]': {
                backgroundColor: 'action.selected',
                '&:hover': {
                  backgroundColor: 'action.selectedHover',
                },
              },
            }}
          >
            <CardContent sx={{ height: '100%' }}>
              <Typography variant="h5" component="div">
              Pending Wages
              </Typography>
              <Typography variant="h6" color="white">
              1000
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
       

    </Box>
  );
}

export default Cards;
