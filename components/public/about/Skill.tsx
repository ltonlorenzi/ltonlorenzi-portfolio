import React, { ReactNode } from 'react';

interface SkillProps {
  icon: ReactNode; // Define the icon as a ReactNode
  name: string;
}

const Skill = ({ icon, name }: SkillProps) => (
  <div className="flex flex-row md:flex-col gap-4 md:gap-0 items-center justify-start md:justify-center border p-2 text-black rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white w-full">
    <div>{icon}</div>
    <span className="font-semibold text-center">{name}</span>
  </div>
);

export default Skill;
