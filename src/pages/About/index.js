import MyHistory from '../../components/MyHistory'
import Separator from '../../components/Separator'
import WorkExperience from '../../components/WorkExperience'
import React from 'react'

export default function About() {
  return (
    <section className="prose prose-lg md:prose-xl dark:prose-dark relative my-5 mx-auto mt-8 flex max-w-6xl animate-fade flex-col justify-center bg-white px-4 font-sans dark:bg-gray-800 dark:text-white">
      <MyHistory />
      <Separator />
      <WorkExperience />
    </section>
  )
}
