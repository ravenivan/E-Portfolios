"use client"

import { faEnvelope, faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';

export default function () {

  const form = useRef();

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm('service_rqm9bwq', 'template_xuizs8p', form.current, {
          publicKey: '-kBOZkcSo6PIMZ9mi',
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    }
  };


  return (
    <section id="contact">
      <div className="component-container">
        <div className="row flex flex-col gap-[48px]
        md:flex-row"
        >
          <div className="w-full flex flex-col gap-3 md:w-2/4">
            <h2 className="text-sm uppercase mb-3 font-bold md:text-base">Contact</h2>
            <h3 className="text-[30px] leading-[48px] font-bold md:text-[40px]">Ready to build something great?</h3>
            <p className="text-sm md:text-base">If you have any opportunities, ideas or questions you want to throw my way, don't hesitate to message me!</p>
            <a href="mailto:ravenivan1@gmail.com"
              className="flex items-center gap-2 mt-3 w-fit"
            >
              <FontAwesomeIcon icon={faEnvelope} className='w-4 h-4' />
              <span>ravenivan1@gmail.com</span>
            </a>
          </div>
          <form onSubmit={sendEmail}
            className="w-full flex flex-col gap-4 md:w-2/4"
          >
            <div className="flex flex-col gap-2">
              <label htmlFor="text" className="text-sm font-light">Name</label>
              <input type="text" name="name" id="text" required
                className="h-9 bg-[#f3f4f6] border-none px-2 text-sm rounded-[4px]" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-light">Email</label>
              <input type="email" name="email" id="email" required
                className="h-9 bg-[#f3f4f6] border-none px-2 text-sm rounded-[4px]" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-light">Message</label>
              <textarea id="message" name="message" className="h-[96px] bg-[#f3f4f6] border-none p-2 text-sm rounded-[4px] resize-none" required></textarea>
            </div>
            <button className="w-full h-[48px] bg-black text-white font-light
            border border-solid border-transparent cursor-pointer rounded-[4px] transition relative
            hover:border-black hover:text-black hover:bg-transparent"
            >
              Send
              <div className="absolute top-0 left-0 right-0 bottom-0 
              text-2xl hidden"
              >
                <FontAwesomeIcon icon={faSpinner}
                  className='w-3 h-3 text-white'
                />
              </div>
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
