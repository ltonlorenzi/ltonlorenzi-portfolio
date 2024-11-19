import { profileImagePath } from '@/lib/constants';
import Image from 'next/image';
import React from 'react';

export const AboutMe = () => {
  return (
    <div className="flex flex-col gap-4 px-4 mt-4 mb-8 md:mb-32">
      <h2 className="md:text-left text-center">About Me</h2>
      <div className="flex items-center flex-col md:flex-row md:gap-40 gap-6 md:mr-20">
        <p className="mt-4 text-justify">
          I’m Luciano Tonlorenzi, a Software Engineer based in Argentina with 6+
          years of experience building dynamic, responsive websites and
          applications. Specializing in React (+4years), Next.js, TypeScript,
          and MongoDB. I focus on creating scalable, high-performance solutions
          with clean, maintainable code.
        </p>
        <Image
          alt="profile-image"
          src={profileImagePath}
          width={200}
          height={200}
          className="rounded-full"
        />
      </div>
    </div>
  );
};
