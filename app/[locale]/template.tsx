'use client'; // Make sure this is a client component

import { useRouter } from 'next/navigation';
import { ReactNode, useEffect, useState } from 'react';

interface TemplateProps {
  children: ReactNode; // Define the type for children prop
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
      className={`transition-opacity duration-200 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      {children}
    </div>
  );
};

export default Template;
