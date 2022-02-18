import React from 'react'
import MyHistory from '../../components/MyHistory'
import Separator from '../../components/Separator'
import WorkExperience from '../../components/WorkExperience'

export default function About() {
	return (
		<div className="mt-8 my-5 flex flex-col mx-auto max-w-6xl justify-center px-4 bg-white dark:bg-gray-800 dark:text-white prose prose-lg md:prose-xl dark:prose-dark relative font-sans">
			<MyHistory />
			<Separator />
			<WorkExperience />
		</div>
	)
}
