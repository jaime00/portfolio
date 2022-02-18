import React from 'react'
import BackOne from '../../assets/images/background_one.avif'
import BackTwo from '../../assets/images/background_two.avif'
export default function Background() {
	return (
		<div className="absolute z-20 top-0 inset-x-0 flex justify-center overflow-hidden pointer-events-none">
			<div className="w-[108rem] flex-none flex justify-end">
				<picture>
					<source srcSet={BackOne} type="image/avif" />
					<img src={BackOne} alt="" className="w-[71.75rem] flex-none max-w-none dark:hidden" />
				</picture>
				<picture>
					<source srcSet={BackTwo} type="image/avif" />
					<img src={BackTwo} alt="" className="w-[90rem] flex-none max-w-none hidden dark:block" />
				</picture>
			</div>
		</div>
	)
}
