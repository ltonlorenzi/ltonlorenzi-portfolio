'use client';

import { useRouter } from 'next/navigation';
import { ReactNode, useEffect, useState } from 'react';

interface TemplateProps {
  children: ReactNode;
}

const Template = ({ children }: TemplateProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Set up a timeout to control the transition
    const timeoutId = setTimeout(() => {
      setIsVisible(true);
    }, 200); // Adjust the duration to match your CSS transition duration

    return () => {
      clearTimeout(timeoutId);
      setIsVisible(false);
    };
  }, [router]); // Run effect on route change

  return (
    <div
      className={`transition-opacity overflow-hidden duration-200 transform flex flex-grow py-12 px-8 md:px-16  ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      <div className="absolute -top-10 -left-72 w-[400px] h-[400px] rounded-full border border-gray-100 border-opacity-10"></div>
      <div className="absolute -bottom-28 -right-80 w-[600px] h-[600px] rounded-full border border-gray-100 border-opacity-10"></div>
      <div className="absolute -top-0 -right-96 w-[500px] h-[500px] rounded-full border border-gray-100 border-opacity-10"></div>

      {children}
    </div>
  );
};

export default Template;
