import React from 'react'
import Button from '../Button'

export default function StudyExperience() {
	return (
		<div className="mt-20 space-y-6 text-xl text-gray-600 dark:text-gray-300">
			<h2 className="text-gray-900 dark:text-white text-3xl font-bold">Study experience</h2>
			<div className="space-y-2">
				<div className="flex items-center space-x-3 group">
					<span className="flex-none text-gray-900 gover-hover:underline dark:text-white">Extreme Technologies</span>
					<span className="w-full border-t border-gray-300 border-dashed shrink dark:border-gray-700"></span>
					<span className="flex-none">Technical Leader</span>
					<span className="flex-none">2020 - Now</span>
				</div>
				<div className="flex items-center space-x-3 group">
					<span className="flex-none text-gray-900 gover-hover:underline dark:text-white">Extreme Technologies</span>
					<span className="w-full border-t border-gray-300 border-dashed shrink dark:border-gray-700"></span>
					<span className="flex-none">Web Developer</span>
					<span className="flex-none">2019 - 2020</span>
				</div>
				<div className="flex items-center space-x-3 group">
					<span className="flex-none text-gray-900 gover-hover:underline dark:text-white">Extreme Technologies</span>
					<span className="w-full border-t border-gray-300 border-dashed shrink dark:border-gray-700"></span>
					<span className="flex-none">Web Developer</span>
					<span className="flex-none">2019 - 2020</span>
				</div>
				<div className="flex items-center space-x-3 group">
					<span className="flex-none text-gray-900 gover-hover:underline dark:text-white">Extreme Technologies</span>
					<span className="w-full border-t border-gray-300 border-dashed shrink dark:border-gray-700"></span>
					<span className="flex-none">Web Developer</span>
					<span className="flex-none">2019 - 2020</span>
				</div>
			</div>
			<Button>View my resume</Button>
		</div>
	)
}
