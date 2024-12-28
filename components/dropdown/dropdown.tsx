'use client'

import Image from 'next/image';
import React from 'react';

const flags = {
	COL: 'Colombia',
	USA: 'USA',
	MEX: 'Mexico',
};

export const Dropdown = () => {
	const [isOpen, setIsOpen] = React.useState(false);
	const [selected, setSelected] = React.useState<keyof typeof flags>('COL');

	const handleOpen = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className='relative'>
			<button onClick={handleOpen} className='flex gap-2 h-10 items-center'>
				<Image
					src={`/icons/flags/${selected}.svg`}
					width={30}
					height={30}
					alt={flags[selected]}
				/>

				<span>{flags[selected]}</span>
			</button>

			{isOpen && (
				<div className='absolute top-12 right-0 bg-white shadow-md p-2 rounded-md'>
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
