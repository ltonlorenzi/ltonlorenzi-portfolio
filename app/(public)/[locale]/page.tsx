import SocialIcons from '@/components/common/SocialIcons';
import { HomeTitle } from '@/components/public/home/HomeTitle';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex justify-center items-center gap-12 md:flex-row flex-col w-full h-full md:h-4/5 px-4">
      <div className="max-w-xl flex flex-col gap-8 text-justify">
        <HomeTitle />
        <div>
          I’m Luciano Tonlorenzi, a Front-End / Full-Stack Developer focused on
          creating dynamic, responsive web applications.
        </div>

        <div className="flex gap-8 items-center">
          <SocialIcons />
          <a
            href="/cv.pdf"
            download="Luciano_Tonlorenzi_CV.pdf"
            className="border border-foreground dark:border-dark-foreground rounded-xl py-1 px-3 transition-all duration-300 transform hover:bg-foreground hover:text-white dark:hover:bg-dark-foreground dark:hover:text-dark-background"
          >
            Download CV
          </a>
        </div>
      </div>
      <Image
        src="/images/profile.svg"
        alt="Profile image"
        width={500}
        height={500}
        className="rounded-lg"
      />
    </div>
  );
}
