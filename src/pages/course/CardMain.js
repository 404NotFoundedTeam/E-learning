import * as React from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import {
  FaArrowDown,
  FaBorderAll,
  FaCertificate,
  FaDeskpro,
  FaFile,
} from 'react-icons/fa'
import MainButton from '../../components/Button'

const card = (
  <>
    <CardContent>
      <Typography
        sx={{ fontSize: '1.625rem', fontWeight: 'bold' }}
        color="text.secondary"
        gutterBottom
      >
        $269.99
      </Typography>
      <Typography sx={{ mb: 3 }} color="text.primary">
        This course includes:
      </Typography>
      <div className="flex flex-col gap-5">
        <Typography
          className="flex items-center gap-2 "
          sx={{ fontSize: '1rem', lineHeight: '1rem', fontWeight: '400' }}
          variant="body2"
        >
          <FaFile /> 9 Lessons
        </Typography>

        <Typography
          className="flex items-center gap-2 "
          sx={{ fontSize: '1rem', lineHeight: '1rem', fontWeight: '400' }}
          variant="body2"
        >
          <FaArrowDown /> 12 Downloadable resources
        </Typography>

        <Typography
          className="flex items-center gap-2 "
          sx={{ fontSize: '1rem', lineHeight: '1rem', fontWeight: '400' }}
          variant="body2"
        >
          <FaDeskpro /> Access on desktops, tablets, mobile
        </Typography>

        <Typography
          className="flex items-center gap-2 "
          sx={{ fontSize: '1rem', lineHeight: '1rem', fontWeight: '400' }}
          variant="body2"
        >
          <FaBorderAll /> Full lifetime access
        </Typography>

        <Typography
          className="flex items-center gap-2 "
          sx={{ fontSize: '1rem', lineHeight: '1rem', fontWeight: '400' }}
          variant="body2"
        >
          <FaCertificate /> Certificate of completion
        </Typography>
      </div>
    </CardContent>
    <CardActions>
      <MainButton
        variant={'contained'}
        children={'Enter Now'}
        className="h-14 w-full transition-colors"
      />
    </CardActions>

    <div className="bg-[url(https://zone-assets-api.vercel.app/assets/images/e-learning/course_8.jpg)] mt-10 w-full h-96 flex items-center justify-center object-cover rounded-lg">
      <div className="flex relative z-10 flex-col justify-center align-center h-full items-center  px-10 pt-28">
        <div className="mask z-0 absolute left-0 r-0 b-0 top-0  w-full h-full z-10 bg-gradient-to-t from-black to-inherit"></div>
        <h1 className="text-blue-600 z-10 font-extrabold text-center text-2xl mb-4">
          Advertisement
        </h1>
        <p className="text-white text-center mb-6 z-10">
          Duis leo. Donec orci lectus, aliquam ut, faucibus non
        </p>

        <MainButton
          variant={'contained'}
          children={'Go Now'}
          className=""
          sx={{ hover: { backgroundColor: 'green', fontSize: '20px' } }}
        />
      </div>
    </div>
  </>
)

export default function CardMain() {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card
        sx={{
          padding: '30px',
          color: 'rgb(33, 43, 54)',
          backgroundColor: 'rgb(255, 255, 255)',
          boxShadow: 'rgb(145 158 171 / 16%) -16px 16px 56px -8px',
          borderRadius: '16px',
          overflow: 'hidden',
        }}
      >
        {card}
      </Card>
    </Box>
  )
}
