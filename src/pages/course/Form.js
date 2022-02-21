import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import MainButton from '../../components/Button'

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
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
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
        }}
      ></Box>
      <TextField
        id="outlined-basic"
        {...register('name', { required: 'Please enter your  name.' })}
        label="Name"
        variant="outlined"
        required
      />
      <TextField
        id="outlined-basic"
        type="email"
        {...register('email', { required: 'Please enter your email' })}
        label="Email"
        variant="outlined"
        required
      />

      <div className="flex flex-col">
        <MainButton
          children="Post review"
          type={'submit'}
          variant="contained"
        />
        <MainButton children="Cancel" variant="outlined" />
      </div>
    </Box>
  )
}

export default Form
