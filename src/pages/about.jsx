import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  TwitterIcon,
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - Thom Le</title>
        <meta
          name="description"
          content="I'm Thom Le. I live in Denver, CO, where I design the future."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              My name is Thom Le. I live in Denver, CO, where I design the
              future.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                My fasination with coding began during the pandemic. Like most people, I was looking for an outlet to cure my bordem of remaining indoors.
                My brain was craving something new and challenging to learn. At the time, my younger had enrolled in a Computer Science courses and introduced me to basic HTML and CSS. 
                I was instantly hooked. I began teaching myself how to code using freecodecamp, w3schools, and youtube videos. 
              </p>
              <p>
                During this time I was interested in changing my career path from environmental consulting to web development. 
                I eventually enrolled in a 6 month Full Stack Web Development course through the University of Denver. 
                The course was fast pace but gave me great foundation in both frontend and backend web development. We touched on the basics of HTML, CSS, javaScript to working with RESTFUL APIs and modern tech stacks like MERN. 
              </p>
              <p>
                After completing the bootcamp, I took up a 3 month software engineering internship position with Manafall. 
                Manafall is small start up in Burlington, VT who is slowing building up an impressive portfolio of projects from websites to complex iOS applications. 
                During my internship I began refining my skills using modern frontend frameworks and technologies like Nextjs and tailwindcss to build unique websites.
                Most importantly, I learned how to work in an agile environment with other developers and received weekly mentoring sessions that has excelled my capabilities.
              </p>
              <p>
                Today I am continuing to learn and build as much as possible. 
                I am always looking for a new challenge and opportunity to connect with people in the industry!
                Do you have an idea you want to build? Lets connect and work together!
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink href="https://twitter.com/vietthom" icon={TwitterIcon}>
                Follow on Twitter
              </SocialLink>
              <SocialLink href="https://www.instagram.com/big_tunnaa/" icon={InstagramIcon} className="mt-4">
                Follow on Instagram
              </SocialLink>
              <SocialLink href="https://github.com/vietthom" icon={GitHubIcon} className="mt-4">
                Follow on GitHub
              </SocialLink>
              <SocialLink href="https://www.linkedin.com/in/thom-le-b87056138/" icon={LinkedInIcon} className="mt-4">
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href="mailto:thomle0418@gmail.com"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                thomle0418@gmail.com
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
