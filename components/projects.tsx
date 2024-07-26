import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import React from 'react'

export default function projects() {
  return (
    <section id="projects">
      <div className="component-container">
        <div className="row flex flex-col space-y-14">
          <h2 className='text-2xl uppercase text-center font-bold'>Projects</h2>

          <div className='flex flex-col justify-evenly
          h-auto gap-3 p-3 items-center
          shadow-lg rounded-lg
          md:flex-row md:h-[380px] md:p-5 md:gap-5
          lg:h-[384px] lg:py-3 lg:px-5 lg:gap-[48px]
          '
          >
            <figure className='group max-w-full w-full h-full max-h-[300px] rounded-lg overflow-hidden relative
            md:max-w-[540px]
            lg:max-w-full'
            >
              <Image
                src='/assets/car-rental.png'
                alt="Car Rental App Picture"
                width={0} height={0} sizes="100vw"
                className='w-full object-fill transition duration-[400ms] 
              group-hover:filter group-hover:blur-[2px] group-hover:opacity-70 group-hover:brightness-[0.6] group-hover:bg-[#242424] group-hover:scale-105'
              />
              <div className='flex text-base space-x-4 
              absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4
              opacity-0 group-hover:opacity-100 transition duration-200 '
              >
                <a href="https://car-rental-project.netlify.app/" target='_blank'
                  className='text-[#f3f4f6] w-5 h-5'
                >
                  <FontAwesomeIcon icon={faUpRightFromSquare} />
                </a>
                <a href="https://github.com/ravenivan/Car-Rental-Apps" target='_blank'
                  className='text-[#f3f4f6] w-5 h-5'
                >
                  <FontAwesomeIcon icon={faGithub} className='w-full h-auto' />
                </a>
              </div>
            </figure>

            <div className='flex flex-col items-center max-w-full justify-start text-start
            md:justify-center md:text-center md:max-w-[280px]'
            >
              <h3 className='text-xl font-bold w-full sm:text-2xl'>
                Car Rental App
              </h3>
              <div className='flex w-full justify-start flex-wrap gap-[10px] mt-2
              md:justify-center'
              >
                <div className='text-[12px] py-1 px-[10px]
                border-[1px] border-solid border-opacity-[0.1] rounded-[3px] bg-[#f3f4f6]
                md:py-[6px] md:px-[10px]'
                >
                  HTML
                </div>
                <div className='text-[12px] py-1 px-[10px]
                border-[1px] border-solid border-opacity-[0.1] rounded-[3px] bg-[#f3f4f6]
                md:py-[6px] md:px-[10px]'
                >
                  CSS
                </div>
                <div className='text-[12px] py-1 px-[10px]
                border-[1px] border-solid border-opacity-[0.1] rounded-[3px] bg-[#f3f4f6]
                md:py-[6px] md:px-[10px]'
                >
                  JavaScript
                </div>
                <div className='text-[12px] py-1 px-[10px]
                border-[1px] border-solid border-opacity-[0.1] rounded-[3px] bg-[#f3f4f6]
                md:py-[6px] md:px-[10px]'
                >
                  React
                </div>
              </div>

              <div className='text-[12px] mt-[16px]
              md:mt-6 md:text-6 md:leading-5'
              >
                The Car Rental App is a mock rental site that dynamically displays car models and their descriptions wise the use of an API. This website features filtering, advanced pagination, and searching.
              </div>
              <div className='flex w-full justify-start mt-6 space-x-2
              md:space-x-6 md:mt-8 md:justify-center'
              >
                <a href="https://car-rental-project.netlify.app/" target='_blank'
                className='w-[112px] h-fit bg-[#f3f4f6] flex justify-center items-center gap-1
                text-xs font-bold
                border-[1px] solid border-opacity-10 p-2 rounded-[5px]'
                >
                  <span>Live Link</span>
                  <FontAwesomeIcon icon={faUpRightFromSquare} className='w-3 h-auto' />
                </a>
                <a href="https://github.com/ravenivan/Car-Rental-Apps" target='_blank'
                className='w-[112px] h-fit bg-[#f3f4f6] flex justify-center items-center gap-1
                text-xs font-bold
                border-[1px] solid border-opacity-10 p-2 rounded-[5px]'
                >
                  <span>Code</span>
                  <FontAwesomeIcon icon={faGithub} className='w-3 h-auto' />
                </a>
              </div>

            </div>



          </div>

          <div className='flex flex-col justify-evenly
          h-auto gap-3 p-3 items-center
          shadow-lg rounded-lg
          md:flex-row md:h-[380px] md:p-5 md:gap-5
          lg:h-[384px] lg:py-3 lg:px-5 lg:gap-[48px]
          '
          >
            <figure className='group max-w-full w-full h-full max-h-[300px] rounded-lg overflow-hidden relative
            md:max-w-[540px]
            lg:max-w-full'
            >
              <Image
                src='/assets/ecommerce.png'
                alt="Car Rental App Picture"
                width={0} height={0} sizes="100vw"
                className='w-full object-fill transition duration-[400ms] 
              group-hover:filter group-hover:blur-[2px] group-hover:opacity-70 group-hover:brightness-[0.6] group-hover:bg-[#242424] group-hover:scale-105'
              />
              <div className='flex text-base space-x-4 
              absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4
              opacity-0 group-hover:opacity-100 transition duration-200 '
              >
                <a href="https://car-rental-project.netlify.app/" target='_blank'
                  className='text-[#f3f4f6] w-5 h-5'
                >
                  <FontAwesomeIcon icon={faUpRightFromSquare} />
                </a>
                <a href="https://github.com/ravenivan/Car-Rental-Apps" target='_blank'
                  className='text-[#f3f4f6] w-5 h-5'
                >
                  <FontAwesomeIcon icon={faGithub} className='w-full h-auto' />
                </a>
              </div>
            </figure>

            <div className='flex flex-col items-center max-w-full justify-start text-start
            md:justify-center md:text-center md:max-w-[280px]'
            >
              <h3 className='text-xl font-bold w-full sm:text-2xl'>
                E-commerce Site (WIP)
              </h3>
              <div className='flex w-full justify-start flex-wrap gap-[10px] mt-2
              md:justify-center'
              >
                <div className='text-[12px] py-1 px-[10px]
                border-[1px] border-solid border-opacity-[0.1] rounded-[3px] bg-[#f3f4f6]
                md:py-[6px] md:px-[10px]'
                >
                  HTML
                </div>
                <div className='text-[12px] py-1 px-[10px]
                border-[1px] border-solid border-opacity-[0.1] rounded-[3px] bg-[#f3f4f6]
                md:py-[6px] md:px-[10px]'
                >
                  CSS
                </div>
                <div className='text-[12px] py-1 px-[10px]
                border-[1px] border-solid border-opacity-[0.1] rounded-[3px] bg-[#f3f4f6]
                md:py-[6px] md:px-[10px]'
                >
                  JavaScript
                </div>
                <div className='text-[12px] py-1 px-[10px]
                border-[1px] border-solid border-opacity-[0.1] rounded-[3px] bg-[#f3f4f6]
                md:py-[6px] md:px-[10px]'
                >
                  React
                </div>
              </div>

              <div className='text-[12px] mt-[16px]
              md:mt-6 md:text-6 md:leading-5'
              >
                Created an e-commerce site using React and displayed a wide selection of products with the use of an API. Effortlessly navigate, compare, and purchase items through the advanced functionality in the products page
              </div>
              <div className='flex w-full justify-start mt-6 space-x-2
              md:space-x-6 md:mt-8 md:justify-center'
              >
                <a href="https://car-rental-project.netlify.app/" target='_blank'
                className='w-[112px] h-fit bg-[#f3f4f6] flex justify-center items-center gap-1
                text-xs font-bold
                border-[1px] solid border-opacity-10 p-2 rounded-[5px]'
                >
                  <span>Live Link</span>
                  <FontAwesomeIcon icon={faUpRightFromSquare} className='w-3 h-auto' />
                </a>
                <a href="https://github.com/ravenivan/Car-Rental-Apps" target='_blank'
                className='w-[112px] h-fit bg-[#f3f4f6] flex justify-center items-center gap-1
                text-xs font-bold
                border-[1px] solid border-opacity-10 p-2 rounded-[5px]'
                >
                  <span>Code</span>
                  <FontAwesomeIcon icon={faGithub} className='w-3 h-auto' />
                </a>
              </div>

            </div>



          </div>

          <div className='flex flex-col justify-evenly
          h-auto gap-3 p-3 items-center
          shadow-lg rounded-lg
          md:flex-row md:h-[380px] md:p-5 md:gap-5
          lg:h-[384px] lg:py-3 lg:px-5 lg:gap-[48px]
          '
          >
            <figure className='group max-w-full w-full h-full max-h-[300px] rounded-lg overflow-hidden relative
            md:max-w-[540px]
            lg:max-w-full'
            >
              <Image
                src='/assets/wordle.png'
                alt="Wordle App Picture"
                width={0} height={0} sizes="100vw"
                className='w-full object-fill transition duration-[400ms] 
              group-hover:filter group-hover:blur-[2px] group-hover:opacity-70 group-hover:brightness-[0.6] group-hover:bg-[#242424] group-hover:scale-105'
              />
              <div className='flex text-base space-x-4 
              absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4
              opacity-0 group-hover:opacity-100 transition duration-200 '
              >
                <a href="https://wordle-clone-iota-five.vercel.app/" target='_blank'
                  className='text-[#f3f4f6] w-5 h-5'
                >
                  <FontAwesomeIcon icon={faUpRightFromSquare} />
                </a>
                <a href="https://github.com/ravenivan/WordleClone" target='_blank'
                  className='text-[#f3f4f6] w-5 h-5'
                >
                  <FontAwesomeIcon icon={faGithub} className='w-full h-auto' />
                </a>
              </div>
            </figure>

            <div className='flex flex-col items-center max-w-full justify-start text-start
            md:justify-center md:text-center md:max-w-[280px]'
            >
              <h3 className='text-xl font-bold w-full sm:text-2xl'>
                Wordle Clone
              </h3>
              <div className='flex w-full justify-start flex-wrap gap-[10px] mt-2
              md:justify-center'
              >
                <div className='text-[12px] py-1 px-[10px]
                border-[1px] border-solid border-opacity-[0.1] rounded-[3px] bg-[#f3f4f6]
                md:py-[6px] md:px-[10px]'
                >
                  HTML
                </div>
                <div className='text-[12px] py-1 px-[10px]
                border-[1px] border-solid border-opacity-[0.1] rounded-[3px] bg-[#f3f4f6]
                md:py-[6px] md:px-[10px]'
                >
                  CSS
                </div>
                <div className='text-[12px] py-1 px-[10px]
                border-[1px] border-solid border-opacity-[0.1] rounded-[3px] bg-[#f3f4f6]
                md:py-[6px] md:px-[10px]'
                >
                  React
                </div>
                <div className='text-[12px] py-1 px-[10px]
                border-[1px] border-solid border-opacity-[0.1] rounded-[3px] bg-[#f3f4f6]
                md:py-[6px] md:px-[10px]'
                >
                  Firebase
                </div>
                
              </div>

              <div className='text-[12px] mt-[16px]
              md:mt-6 md:text-6 md:leading-5'
              >
                The Wordle Clone is a web application that fetches words from a word bank text file to randomly choose a correct word to guess. This website also features firebase authenication and firestore to keep track of the user's game statistics.
              </div>
              <div className='flex w-full justify-start mt-6 space-x-2
              md:space-x-6 md:mt-8 md:justify-center'
              >
                <a href="https://wordle-clone-iota-five.vercel.app/" target='_blank'
                className='w-[112px] h-fit bg-[#f3f4f6] flex justify-center items-center gap-1
                text-xs font-bold
                border-[1px] solid border-opacity-10 p-2 rounded-[5px]'
                >
                  <span>Live Link</span>
                  <FontAwesomeIcon icon={faUpRightFromSquare} className='w-3 h-auto' />
                </a>
                <a href="https://github.com/ravenivan/WordleClone" target='_blank'
                className='w-[112px] h-fit bg-[#f3f4f6] flex justify-center items-center gap-1
                text-xs font-bold
                border-[1px] solid border-opacity-10 p-2 rounded-[5px]'
                >
                  <span>Code</span>
                  <FontAwesomeIcon icon={faGithub} className='w-3 h-auto' />
                </a>
              </div>

            </div>



          </div>
          
        </div>
      </div>
    </section>
  )
}
