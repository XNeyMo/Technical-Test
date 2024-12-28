'use client'

import Image from 'next/image';
import React from 'react';

const flags = {
	COL: 'Colombia',
	BRA: 'Brazil',
	MEX: 'México',
	ARG: 'Argentina',
	ECU: 'Ecuador',
	CHI: 'Chile',
};

export const Dropdown = () => {
	const [isOpen, setIsOpen] = React.useState(false);
	const [selected, setSelected] = React.useState<keyof typeof flags>('COL');

	const handleOpen = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className='relative'>
			<button onClick={handleOpen} className='flex w-44 gap-2 h-10 items-center justify-between'>
				<div className='flex gap-5 items-center'>
					<Image
						src={`/icons/flags/${selected}.svg`}
						width={30}
						height={30}
						alt={flags[selected]}
					/>

					<span>{flags[selected]}</span>
				</div>

				<Image
					src='/icons/arrowDown.svg'
					width={30}
					height={30}
					alt='Arrow Down'
				/>
			</button>

			{isOpen && (
				<div className='absolute top-12 w-44 right-0 p-5 rounded-md bg-[#202531]'>
					{Object.keys(flags).map((flag) => (
						<button
							key={flag}
							onClick={() => {
								setSelected(flag as keyof typeof flags);
								setIsOpen(false);
							}}
							className='flex gap-2 h-10 items-center'
						>
							<Image
								src={`/icons/flags/${flag}.svg`}
								width={30}
								height={30}
								alt={flags[flag as keyof typeof flags]}
							/>

							<span>{flags[flag as keyof typeof flags]}</span>
						</button>
					))}
				</div>
			)}
		</div>
	)
}
