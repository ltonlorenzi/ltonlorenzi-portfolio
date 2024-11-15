'use client';

import { Typewriter } from 'react-simple-typewriter';

export const HomeTitle = () => {
  return (
    <h1 className="md:h-20">
      <Typewriter
        words={[
          'Full-Stack Developer',
          'React/NextJS Developer',
          'Software Engineer',
        ]}
        loop={false}
        cursor
        cursorStyle="|"
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={1000}
      />
    </h1>
  );
};
