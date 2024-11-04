import { AboutMe } from '@/components/public/about/AboutMe';
import { Technologies } from '@/components/public/about/Technologies';
import { Carousel } from '@/components/public/common/Carousel';

export default function About() {
  return (
    <div className="flex flex-grow flex-col items-start justify-center h-full overflow-hidden">
      <Carousel>
        <AboutMe />
        <Technologies />
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
