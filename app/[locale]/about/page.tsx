import { Technologies } from '@/app/components/about/Technologies';
import { Carousel } from '@/app/components/Carousel';

export default function About() {
  return (
    <div className="flex flex-grow flex-col items-start justify-center h-2/3">
      <Carousel>
        <div className="flex flex-col gap-4">
          <h2 className="text-center">About Me</h2>
          <p className="mt-4">
            Hello! I’m Luciano Tonlorenzi, a web developer based in Argentina.
            Currently freelancing as a Full-Stack Developer, I specialize in
            seamless user experiences and efficient, clean code to bring
            projects from concept to completion. I specialize in building
            dynamic and responsive web applications using the latest
            technologies. I have experience working with various technologies,
            including JavaScript, React, Node.js, and more. Over the years, I’ve
            had the opportunity to work on diverse projects, from small startups
            to larger web applications.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-center">Technologies and Tools</h2>

          <Technologies />
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-center">Education</h2>

          <p className="mt-4">
            I hold a degree in Computer Science from National University of La
            Matanza. My education has equipped me with a solid foundation in
            software development principles and practices. I hold a degree in
            Computer Science from National University of La Matanza. My
            education has equipped me with a solid foundation in software
            development principles and practices.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-center">Personal Interests</h2>

          <p className="mt-4">
            When I’m not coding, you can find me playing music or exploring new
            technologies. When I’m not coding, you can find me playing music or
            exploring new technologies. When I’m not coding, you can find me
            playing music or exploring new technologies. When I’m not coding,
            you can find me playing music or exploring new technologies. When
            I’m not coding, you can find me playing music or exploring new
            technologies.
          </p>
        </div>
      </Carousel>
    </div>
  );
}
