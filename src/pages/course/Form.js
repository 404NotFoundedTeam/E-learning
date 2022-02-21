import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import MainButton from '../../components/Button'

const schema = yup
  .object()
  .shape({
    name: yup.string().required(),
    age: yup.number().required(),
  })
  .required()

const Form = () => {
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  })
  const onSubmit = (data) => console.log(data)

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
      <TextField
        id="outlined-basic"
        {...register('name', { required: 'Please enter your  name.' })}
        label="Name"
        variant="outlined"
      />
      <TextField
        id="outlined-basic"
        type="email"
        {...register('email', { required: 'Please enter your email' })}
        label="Email"
        variant="outlined"
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
