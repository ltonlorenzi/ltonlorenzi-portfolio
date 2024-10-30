import React, { ReactNode } from 'react';

interface SkillProps {
  icon: ReactNode; // Define the icon as a ReactNode
  name: string;
}

const Skill = ({ icon, name }: SkillProps) => (
  <div className="flex items-center border p-2 text-black rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white gap-2">
    <div className="text-4xl">{icon}</div>
    <span className="font-semibold text-center">{name}</span>
  </div>
);

export default Skill;
