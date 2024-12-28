// import { Box, Button } from '@crhis35/plazakit'
import Image from 'next/image'
import React from 'react'
import { Dropdown } from '../dropdown'

export const Header = () => {
	return (
		<header className='bg-[#14171F] py-5 px-16 flex justify-between items-center'>
			{/* <Box className='flex gap-5 items-center'> */}
			<div className='flex gap-10 items-center'>
				<Image src='/icons/concertPlazaLogo.svg' width={160} height={150} alt='Concert Plaza Logo' />

				<Dropdown />
			</div>
			{/* </Box> */}

			{/* <Box className='flex gap-10 items-center'> */}
			<div className='flex gap-10 items-center'>
				<nav>
					<ul className='flex gap-5 items-center'>
						<li>
							<a href='#'>Home</a>
						</li>
						<li>
							<a href='#'>Eventos</a>
						</li>
						<li>
							<a href='#'>Soy Empresario</a>
						</li>
						<li>
							<a href='#'>Soy Artista</a>
						</li>
					</ul>
				</nav>

				{/* <Box className='flex gap-5 items-center'> */}
				<div className='flex gap-5 items-center'>
					<button className='bg-[#202531] h-10 rounded px-5'>Registrarse</button>
					<button className='bg-[#9233E9] h-10 rounded px-5'>Iniciar Sesión</button>
					{/* <Button className='bg-[#202531] h-10'>Registrarse</Button> */}
					{/* <Button className='h-10'>Iniciar Sesión</Button> */}
				</div>
				{/* </Box> */}
			</div>
			{/* </Box> */}
		</header>
	)
}
