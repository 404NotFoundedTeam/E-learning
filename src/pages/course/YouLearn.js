import React from 'react'
import {
  FaCheck,
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from 'react-icons/fa'
import MainButton from '../../components/Button'

export default function YouLearn() {
  return (
    <div className="mt-20">
      <h1 className="text-3xl text-extrabold mb-8">What You Will Learn</h1>
      <ul className="flex flex-col gap-3  text-lg tracking-normal">
        <li className="flex items-center">
          <span className="bg-orange-50 mr-2 flex justify-center items-center text-orange-500 h-10 w-10 rounded-full">
            <FaCheck />
          </span>
          A fermentum in morbi pretium aliquam adipiscing donec tempus.
        </li>
        <li className="flex items-center">
          <span className="bg-orange-50 mr-2 flex justify-center items-center text-orange-500 h-10 w-10 rounded-full">
            <FaCheck />
          </span>
          A fermentum in morbi pretium aliquam adipiscing donec tempus.
        </li>
        <li className="flex items-center">
          <span className="bg-orange-50 mr-2 flex justify-center items-center text-orange-500 h-10 w-10 rounded-full">
            <FaCheck />
          </span>
          A fermentum in morbi pretium aliquam adipiscing donec tempus.
        </li>
        <li className="flex items-center">
          <span className="bg-orange-50 mr-2 flex justify-center items-center text-orange-500 h-10 w-10 rounded-full">
            <FaCheck />
          </span>
          A fermentum in morbi pretium aliquam adipiscing donec tempus.
        </li>
        <li className="flex items-center">
          <span className="bg-orange-50 mr-2 flex justify-center items-center text-orange-500 h-10 w-10 rounded-full">
            <FaCheck />
          </span>
          A fermentum in morbi pretium aliquam adipiscing donec tempus.
        </li>
      </ul>

      <h1 className="text-3xl text-extrabold mt-8 mb-4">
        Skills You Will Gain
      </h1>
      <div className="flex items-center gap-1">
        <MainButton
          children="photography"
          className="bg-gray-300"
          sx={{
            color: 'rgb(99, 115, 129)',
            backgroundColor: 'rgba(145, 158, 171, 0.12)',
            lineHeight: '1.75rem',
            fontWeight: '400',
            fontSize: '16px',
          }}
        />
        <MainButton
          children="photography"
          className="text-black"
          sx={{
            color: 'rgb(99, 115, 129)',
            backgroundColor: 'rgba(145, 158, 171, 0.12)',
            lineHeight: '1.75rem',
            fontWeight: '400',
            fontSize: '16px',
          }}
        />
        <MainButton
          children="design"
          className="text-black"
          sx={{
            color: 'rgb(99, 115, 129)',
            backgroundColor: 'rgba(145, 158, 171, 0.12)',
            lineHeight: '1.75rem',
            fontWeight: '400',
            fontSize: '16px',
          }}
        />
        <MainButton
          children="art"
          className="text-black"
          sx={{
            color: 'rgb(99, 115, 129)',
            backgroundColor: 'rgba(145, 158, 171, 0.12)',
            lineHeight: '1.75rem',
            fontWeight: '400',
            fontSize: '16px',
          }}
        />
        <MainButton
          children="history"
          className="text-black"
          sx={{
            color: 'rgb(99, 115, 129)',
            backgroundColor: 'rgba(145, 158, 171, 0.12)',
            lineHeight: '1.75rem',
            fontWeight: '400',
            fontSize: '16px',
          }}
        />
        <MainButton
          children="museums"
          className="text-black"
          sx={{
            color: 'rgb(99, 115, 129)',
            backgroundColor: 'rgba(145, 158, 171, 0.12)',
            lineHeight: '1.75rem',
            fontWeight: '400',
            fontSize: '16px',
          }}
        />
        <MainButton
          children="creativity"
          className="text-black"
          sx={{
            color: 'rgb(99, 115, 129)',
            backgroundColor: 'rgba(145, 158, 171, 0.12)',
            lineHeight: '1.75rem',
            fontWeight: '400',
            fontSize: '16px',
          }}
        />
        <MainButton
          children="art history"
          className="text-black"
          sx={{
            color: 'rgb(99, 115, 129)',
            backgroundColor: 'rgba(145, 158, 171, 0.12)',
            lineHeight: '1.75rem',
            fontWeight: '400',
            fontSize: '16px',
          }}
        />
      </div>
      <div>
        <h1 className="text-3xl text-extrabold mt-8 mb-4">Overview</h1>
        <p className="text-lg tracking-wider">
          Consentaneum aeternitate dignitati commoventur primisque cupit mea
          officia peccata parens egone dolorem minuis. Secundae neglegi
          sextilius conantur commodaita siti philosophi ioca tenere lorem
          apparet assentior pudoris sint leves neglegebat unde reliquisti
          simile.
        </p>
        <div className="flex items-center gap-2 mt-8">
          <h3
            sx={{
              fontSize: '1.5rem',
              color: '#212B36',
              fontWeight: '400',
              lineHeight: '1.85rem',
            }}
          >
            Share:{' '}
          </h3>

          <MainButton
            startIcon={<FaFacebook />}
            variant="outlined"
            children="Facebook"
            sx={{
              borderColor: 'rgb(24, 119, 242) !important',
              color: 'rgb(24, 119, 242) !important',
            }}
          />
          <MainButton
            startIcon={<FaInstagram />}
            variant="outlined"
            children="Instagram"
            sx={{
              borderColor: 'rgb(224, 45, 105) !important',
              color: 'rgb(224, 45, 105) !important',
            }}
          />
          <MainButton
            startIcon={<FaLinkedinIn />}
            variant="outlined"
            children="LinkenIn"
            sx={{
              borderColor: 'rgb(0, 126, 187) !important',
              color: 'rgb(0, 126, 187) !important',
            }}
          />
          <MainButton
            startIcon={<FaTwitter />}
            variant="outlined"
            children="Twitter"
            sx={{
              borderColor: 'rgb(0, 170, 236) !important',
              color: 'rgb(0, 170, 236) !important',
            }}
          />
        </div>
      </div>
    </div>
  )
}
