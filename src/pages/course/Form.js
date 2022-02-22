import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import MainButton from '../../components/Button'
import RatingMui from '../../components/mini-components/ratings/ratings'

const Form = () => {
  const [review, setReview] = useState([])

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => {
    setReview((prev) => prev.push(data))
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        px: 2,

        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <RatingMui />
      <Box
        component="textarea"
        rows="5"
        label="Review"
        required
        {...register('review', { required: 'Please enter your  name.' })}
        sx={{
          p: 2,
          border: '1px solid grey',
          outline: 'none',
          borderRadius: '10px',
          resize: 'none',
          width: '100% !important',
        }}
      ></Box>
      <TextField
        id="outlined-basic"
        {...register('name', { required: 'Please enter your  name.' })}
        label="Name"
        variant="outlined"
        required
        sx={{ width: '100% !important' }}
      />
      <TextField
        id="outlined-basic"
        type="email"
        {...register('email', { required: 'Please enter your email' })}
        label="Email"
        variant="outlined"
        required
        sx={{ width: '100% !important' }}
      />

      <div
        className="flex flex-col w-full gap-2  justify-center items-end h-full"
        sx={{ width: '100% !important' }}
      >
        <MainButton
          children={'Post review'}
          variant={'contained'}
          className="h-52 w-full transition-colors"
          type={'submit'}
          sx={{ width: '100% !important', height: '100% !important' }}
        />
        <MainButton
          children="Cancel"
          sx={{ width: '100% !important' }}
          variant="outlined"
        />
      </div>
    </Box>
  )
}

export default Form
