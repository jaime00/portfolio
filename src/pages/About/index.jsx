import MyHistory from '@/components/MyHistory'
import PageMeta from '@/components/PageMeta'
import Separator from '@/components/Separator'
import WorkExperience from '@/components/WorkExperience'

export default function About() {
  return (
    <section className="prose prose-lg md:prose-xl dark:prose-dark relative mx-auto mb-5 mt-8 flex max-w-6xl flex-col justify-center px-4 font-sans  dark:text-white">
      <PageMeta
        titleKey="meta.about.title"
        descriptionKey="meta.about.description"
      />
      <MyHistory />
      <Separator />
      <WorkExperience />
    </section>
  )
}
