import Image from 'next/image'
import React from 'react'

export default function about() {
  return (
    <section id="about">
      <div className="component-container">
        <div className="row flex flex-col items-center space-y-20 lg:flex-row">
          <div className='flex flex-col space-y-8 '>

            <div className='flex flex-col space-y-4 text-center lg:text-start'>
              <h3 className='text-base uppercase font-bold'>About me</h3>
              <h4 className='text-[32px] font-bold '>Ivan Lam</h4>
              <p className='text-[14px] max-w-[540px] sm:text-base'>
                I'm an aspiring <span className="font-bold">full-stack developer</span> continuing to learn web development skills by
                creating high quality, responsive web applications with the use of <span className="font-bold">HTML, CSS, and
                  JavaScript</span>.
              </p>
            </div>

            <div className='flex flex-col items-center gap-4 lg:items-start'>
              <h3 className='font-bold uppercase'>My skills</h3>
              <div className='flex flex-wrap gap-8 items-center justify-center w-[360px] lg:justify-start '>
                <figure className='group w-10 h-10 flex flex-col items-center'>
                  <Image
                    src='/assets/html.png' alt="HTML logo"
                    width={40} height={40}
                    className='w-10 h-10 group-hover:scale-[0.9] transition'
                  />
                  <span className='text-[12px] opacity-0 group-hover:opacity-100 transition'>HTML</span>
                </figure>
                <figure className='group w-10 h-10 flex flex-col items-center'>
                  <Image
                    src='/assets/css.png' alt="CSS logo"
                    width={40} height={40}
                    className='w-10 h-10 group-hover:scale-[0.9] transition'
                  />
                  <span className='text-[12px] opacity-0 group-hover:opacity-100 transition'>CSS</span>
                </figure>
                <figure className='group w-10 h-10 flex flex-col items-center'>
                  <Image
                    src='/assets/javascript.png' alt="JavaScript logo"
                    width={40} height={40}
                    className='w-10 h-10 group-hover:scale-[0.9] transition'
                  />
                  <span className='text-[12px] opacity-0 group-hover:opacity-100 transition'>JavaScript</span>
                </figure>
                <figure className='group w-10 h-10 flex flex-col items-center'>
                  <Image
                    src='/assets/react.png' alt="React logo"
                    width={40} height={40}
                    className='w-10 h-10 group-hover:scale-[0.9] transition'
                  />
                  <span className='text-[12px] opacity-0 group-hover:opacity-100 transition'>React.js</span>
                </figure>
                <figure className='group w-10 h-10 flex flex-col items-center'>
                  <Image
                    src='/assets/firebase.png' alt="Firebase logo"
                    width={40} height={40}
                    className='w-10 h-10 group-hover:scale-[0.9] transition'
                  />
                  <span className='text-[12px] opacity-0 group-hover:opacity-100 transition'>Firebase</span>
                </figure>
                <figure className='group w-10 h-10 flex flex-col items-center'>
                  <Image
                    src='/assets/Next.js.png' alt="Next.js logo"
                    width={40} height={40}
                    className='w-10 h-10 group-hover:scale-[0.9] transition'
                  />
                  <span className='text-[12px] opacity-0 group-hover:opacity-100 transition'>Next.js</span>
                </figure>
                <figure className='group w-10 h-10 flex flex-col items-center'>
                  <Image
                    src='/assets/typescript.png' alt="TypeScript logo"
                    width={40} height={40}
                    className='w-10 h-10 group-hover:scale-[0.9] transition'
                  />
                  <span className='text-[12px] opacity-0 group-hover:opacity-100 transition'>TypeScript</span>
                </figure>
                <figure className='group w-10 h-10 flex flex-col items-center'>
                  <Image
                    src='/assets/Tailwind CSS.png' alt="Tailwind logo"
                    width={40} height={40}
                    className='w-10 h-10 group-hover:scale-[0.9] transition'
                  />
                  <span className='text-[12px] opacity-0 group-hover:opacity-100 transition'>TailwindCSS</span>
                </figure>
              </div>
            </div>
          </div>

          <figure className='w-[400px] max-w-[80%] h-auto relative
          sm:max-w-full
          before:content-[""] before:absolute before:w-full before:h-full before:border-2 before:border-black before:top-6 before:right-6 before:-z-10
          after:content-[""] after:absolute after:w-full after:h-full after:border-2 after:border-black after:bottom-6 after:left-6 after:z-10
          '>
            <Image alt="tech image"
              src="/assets/about-image.png"
              width={400} height={400}
            />
          </figure>
        </div>
      </div>
    </section>
  )
}
