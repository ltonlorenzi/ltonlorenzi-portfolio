import Image from 'next/image';
import React from 'react';

export const AboutMe = () => {
  return (
    <div className="flex flex-col gap-4">
      <h2>About Me</h2>
      <div className="flex items-center flex-col md:flex-row gap-40 mr-20">
        <p className="mt-4 text-justify">
          I’m Luciano Tonlorenzi, a web developer based in Argentina. Currently
          freelancing as a Full-Stack Developer. I specialize in seamless user
          experiences and efficient, clean code to bring projects from concept
          to completion. Over the years, I’ve had the opportunity to work on
          diverse projects, from small startups to larger web applications.
        </p>
        <Image
          alt="profile-image"
          src="/images/aboutme.jpg"
          width={200}
          height={200}
          className="rounded-full"
        />
      </div>
    </div>
  );
};
