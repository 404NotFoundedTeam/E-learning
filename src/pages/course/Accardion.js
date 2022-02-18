import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  IconButton,
  Typography,
} from '@mui/material'
import React from 'react'
import { FaAngleRight, FaLock, FaPlay } from 'react-icons/fa'

export default function Accardion({ num, time, open, about }) {
  return (
    <Accordion
      disabled={!open}
      sx={{
        width: '100%',
        margin: '0',
      }}
    >
      <AccordionSummary
        expandIcon={
          <Typography className="flex items-center gap-1">
            {time}m
            <FaAngleRight />
          </Typography>
        }
        // aria-controls="panel1a-content"
        // id="panel1a-header"
      >
        <Typography>
          <IconButton>{open ? <FaPlay /> : <FaLock />}</IconButton>
          Lesson {num}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>{about}</Typography>
      </AccordionDetails>
    </Accordion>
  )
}
