import Image from 'next/image';

interface SkillProps {
  imageUrl: string;
  name: string;
}

const Skill = ({ imageUrl, name }: SkillProps) => (
  <div className="flex flex-row md:flex-col gap-4 md:gap-0 items-center justify-start md:justify-center border p-2 text-black rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white w-full">
    <Image width={32} height={32} src={imageUrl} alt="icon" className="h-8" />
    <span className="font-semibold text-center">{name}</span>
  </div>
);

export default Skill;
