import React from 'react'

export default function Titles({ title, subtitle }) {
	return (
		<h1 className="mx-auto mb-5">
			<span className="block text-base font-semibold tracking-wide text-center text-teal-500 uppercase dark:text-teal-400">{title}</span>
			<span className="block my-6 max-w-2xl mx-auto text-4xl font-bold leading-10 text-center sm:text-5xl">{subtitle}</span>
		</h1>
	)
}
