import * as React from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import MainButton from '../../components/Button'
import { FaPen } from 'react-icons/fa'
import DialogCourse from './DialodCourse'
import { Rating } from '@mui/material'
import RatingCourse from './Rating'

// const bull = (
//   <Box
//     component="span"
//     sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
//   >
//     •
//   </Box>
// )

const card = (
  <React.Fragment>
    <CardContent>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        {' '}
        <Typography variant="h2" component="div">
          3.5
        </Typography>
        <Box>
          <RatingCourse />

          <Typography>3.46k reviews</Typography>
        </Box>
      </Box>

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
      <DialogCourse />
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
