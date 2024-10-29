import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex justify-center items-center gap-12 md:flex-row flex-col">
      <div className="max-w-xl flex flex-col gap-4">
        <h1>Full-Stack Developer</h1>

        <div>
          I am a Front-End / Full-Stack Developer. I am currently as a freelance
          Full-Stack Developer
        </div>

        <a href="/cv.pdf" download="Luciano_Tonlorenzi_CV.pdf">
          Download CV
        </a>
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
