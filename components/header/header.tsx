'use client'

import Image from 'next/image'
import React from 'react'
import { Dropdown } from '../dropdown'

export const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = React.useState(false)

	return (
		<header className='bg-[#14171F] py-5 px-5 md:px-16 flex justify-between items-center'>
			<div className='flex items-center'>
				<Image
					src='/icons/concertPlazaLogo.svg'
					width={160}
					height={150}
					alt='Concert Plaza Logo'
					className='w-32 md:w-auto'
				/>
			</div>

			<div className='xl:hidden'>
				<button
					onClick={() => setIsMenuOpen(!isMenuOpen)}
					className='text-white focus:outline-none'
				>
					{isMenuOpen ? (
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth={2}
							stroke='currentColor'
							className='w-8 h-8'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M6 18L18 6M6 6l12 12'
							/>
						</svg>
					) : (
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth={2}
							stroke='currentColor'
							className='w-8 h-8'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M4 6h16M4 12h16m-7 6h7'
							/>
						</svg>
					)}
				</button>
			</div>

			<div
				className={`${isMenuOpen ? 'z-10 p-10 flex flex-col gap-10 justify-start items-center' : 'hidden'
					} absolute top-20 left-0 w-full xl:justify-end bg-[#14171F] xl:static xl:flex xl:items-center xl:gap-10`}
			>
				<Dropdown />

				<nav>
					<ul className='flex flex-col md:flex-row gap-5 md:gap-10 xl:gap-5 items-center'>
						<li>
							<a href='#' className='text-white hover:text-gray-300'>
								Home
							</a>
						</li>
						<li>
							<a href='#' className='text-white hover:text-gray-300'>
								Eventos
							</a>
						</li>
						<li>
							<a href='#' className='text-white hover:text-gray-300'>
								Soy Empresario
							</a>
						</li>
						<li>
							<a href='#' className='text-white hover:text-gray-300'>
								Soy Artista
							</a>
						</li>
					</ul>
				</nav>

				<div className='flex flex-col md:flex-row gap-5 items-center mt-5 md:mt-0'>
					<button className='bg-[#202531] text-white h-10 rounded px-5 w-full md:w-auto'>
						Registrarse
					</button>
					<button className='bg-[#9233E9] text-white h-10 rounded px-5 w-full md:w-auto'>
						Iniciar Sesión
					</button>
				</div>
			</div>
		</header>
	)
}

