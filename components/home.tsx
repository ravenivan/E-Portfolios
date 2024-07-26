import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faFilePdf } from '@fortawesome/free-solid-svg-icons'

export default function home() {
  return (
    <header id="home" className='h-screen w-full'>
      <div className='component-container'>
        <div className='row flex flex-col justify-center'>
          <span className='text-[14px] font-semibold'>
            Hey, I'm
          </span>
          <h1 className='text-6xl font-black leading-[60px]'>
            Ivan Lam.
          </h1>
          <h2 className='text-[28px] leading-[28px]'>
            Aspiring Full-Stack Developer
          </h2>
          <span className='text-sm mt-2'>
            Find out more <a href="#about" className='font-bold'>about me.</a>
          </span>

          <div className='flex space-x-4 mt-4'>
            <a href="https://www.linkedin.com/in/ivan-lam-961180269/" className='w-4 h-4'>
              <FontAwesomeIcon icon={faLinkedin} className='w-full h-full' />
            </a>
            <a href="https://github.com/ravenivan" className='w-4 h-4'>
              <FontAwesomeIcon icon={faGithub} className='w-full h-full' />
            </a>
            <a href="#" className='w-4 h-4'>
              <FontAwesomeIcon icon={faFilePdf} className='w-full h-full' />
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
