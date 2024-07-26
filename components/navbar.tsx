import React from 'react'

export default function () {
	return (
		<nav className='w-full fixed h-20 z-30'>
			<div className='w-full h-full px-5 mx-auto
			flex justify-between items-center shadow-md rounded-md
			bg-white
			'>
				<span className='text-[18px] font-bold'>Ivan Lam</span>
				<div className='flex items-center space-x-4 text-base font-semibold'>
					<a href="#home">Home</a>
					<a href="#about">About</a>
					<a href="#projects">Projects</a>
					<a href="#contact">
						<button className='bg-black text-white
						py-2 px-5 text-base cursor-pointer font-lg rounded-full border-none'
						>
							Contact
						</button>
					</a>
				</div>
			</div>
		</nav>
	)
}
