import image_profile from '../../assets/images/profile_image.jpg'
import Titles from '../../components/Titles'

export default function MyHistory() {
  return (
    <div className="">
      <Titles title="About me" subtitle="Here's my story." />
      <section className="text-xl leading-8 text-gray-600 dark:text-gray-300">
        <br />
        <p>
          I'm a <b>Systems Engineer</b>, creative developer specializing in{' '}
          <b>Frontend</b>. With more than 6 years of experience adding value to
          business processes in the commercial and public service sectors.
        </p>
        <br />
        <p>
          In addition to being a{' '}
          <b>
            <em>Frontend Developer</em>
          </b>
          , i have also worked as <b>Technical Lead</b>, implementing
          functional, scalable and reusable code solutions throughout my career,
          aligned with user needs and business goals. In addition to technically
          coordinating and mentoring a development team in their day-to-day
          activities, careers and technical growth.
        </p>
        <br />

        <p>
          Experience and advanced knowledge in technologies such as{' '}
          <b>React JS</b>, <b>Next JS</b>, <b>Stencil JS</b>, <b>Typescript</b>,{' '}
          <b>Web Components</b>, <b>Motion framer</b>, <b>Micro Frontends</b>,{' '}
          <b>GraphQL</b>, version control with <b>Git</b>, design patterns,{' '}
          <b>SOLID</b> and <b>Clean Code</b> principles, management of agile
          work methodologies such as <b>SCRUM</b> and <b>Kanban</b>.
        </p>
        <div className="mt-5 grid grid-cols-1 gap-0 md:grid-cols-4 md:gap-x-10">
          <div className="col-span-1 self-center">
            <span className="flex justify-center">
              <span></span>
              <img
                lazy="true"
                data-nimg="responsive"
                alt="Jaime Torres"
                src={image_profile}
                className="col-span-1 rounded-xl transition duration-500 ease-in-out hover:scale-[102%] group-hover:opacity-75"
                decoding="async"
                sizes="100vw"
              />
            </span>
          </div>
          <div className="col-span-3">
            <p className="mt-7">
              Skills in problem solving, teamwork, learning ability and
              adaptability to different environments. Lover of great challenges
              and with a great investigative character.
            </p>
            <br />
            <p>
              If you want to know a little more you can find me on{' '}
              <b>
                <a
                  href="https://www.linkedin.com/in/jaime00"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Linkedin
                </a>
              </b>{' '}
              and connect with me, you can even follow me on{' '}
              <b>
                <a
                  href="https://github.com/jaime00"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
              </b>{' '}
              and take a look at my open source projects.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
