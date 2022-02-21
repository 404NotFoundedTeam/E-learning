import * as React from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import MainButton from '../../components/Button'
import { FaPen } from 'react-icons/fa'

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
)

const card = (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Word of the Day
      </Typography>
      <Typography variant="h5" component="div">
        be{bull}nev{bull}o{bull}lent
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        adjective
      </Typography>
      <Typography variant="body2">
        well meaning and kindly.
        <br />
        {'"a benevolent smile"'}
      </Typography>
    </CardContent>
    <CardActions
      sx={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <MainButton
        startIcon={<FaPen />}
        children="Whrite A Review"
        sx={{
          width: '100%',
          height: '50px',
          color: 'rgb(250, 84, 28)',
          '&:hover': {
            boxShadow: '300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
          },
        }}
      />
    </CardActions>
  </React.Fragment>
)

export default function Score() {
  return (
    <Box sx={{}}>
      <Card sx={{ padding: '20px' }} variant="outlined">
        {card}
      </Card>
    </Box>
  )
}
