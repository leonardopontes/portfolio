"use client"

import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';

export default function Home() {
  const work = ['Frontend Development', 2000, 'Backend Development', 2000, 'Android Development', 2000, 'Web Designing', 2000, 'UI/UX Designing', 2000]

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl -mt-12 w-full items-center justify-center font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing src/app/page.tsx
        </p>
      </div>

            <div className='section gap-16 md:gap-1 md:justify-between items-center md:flex-row-reverse'>
                <div className='flex flex-col justify-center md:w-2/5 max-w-[320px]'>
                    <Image src="/next.svg" alt="Next.js Logo" width={180} height={37} priority className='mx-auto' />
                </div>
                <div className='pl-2 xs:pl-8 flex flex-col gap-3 justify-center text-gray-200 w-max md:w-3/5'>
                    <h1 className='text-5xl xs:text-6xl lg:text-7xl font-bold '>
                        <span className='block'>Hi There, </span>
                        <span>I'm </span>
                        <span className='text-transparent bg-gradient-to-br from-cyan-300 to-blue-600 bg-clip-text'> Dhawal </span>
                    </h1>
                    <p className='text-gray-400 text-xl xs:text-2xl font-semibold py-4 min-w-[16rem] xs:min-w-[25rem] max-w-[26rem]'>
                        <span className='block xs:inline'> I am into</span>
                        <span className='text-cyan-400 xs:pl-2'>
                            <TypeAnimation
                                sequence={work}
                                speed={1}
                                wrapper="span"
                                cursor={true}
                                repeat={Infinity}
                            />
                        </span>
                    </p>
                </div>
            </div>

    </main>
  )
}
