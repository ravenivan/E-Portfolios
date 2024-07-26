import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faFilePdf } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function footer() {
  return (
    <footer className='bg-black text-white h-[64px]'>
      <div className="row h-full flex items-center justify-between gap-4">
        <span className="text-sm font-bold">Copyright © 2024. All rights reserved</span>
        <div className="flex gap-4">
          <a href="" className='w-4 h-4' target="_blank">
            <FontAwesomeIcon icon={faLinkedin} className='w-full h-full' />
          </a>
          <a href="" className='w-4 h-4' target="_blank">
            <FontAwesomeIcon icon={faGithub} className='w-full h-full' />
          </a>
          <a href="" className='w-4 h-4' target="_blank">
          <FontAwesomeIcon icon={faFilePdf} className='w-full h-full' />
          </a>
        </div>
      </div>
    </footer>
  )
}
