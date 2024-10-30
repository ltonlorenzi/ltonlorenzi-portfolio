'use client';

const TimelineItem = ({ title, company, date, description }) => (
  <div className="relative mb-8">
    <div className="absolute left-0 top-0 flex items-center justify-center w-4 h-4 bg-blue-600 rounded-full"></div>
    <div className="ml-8 relative border-l border-gray-300 pl-4">
      <h3 className="text-lg font-bold">{title}</h3>
      <span className="text-gray-500">
        {company} | {date}
      </span>
      <p className="mt-1 text-gray-700">{description}</p>
    </div>
  </div>
);
export default function Career() {
  // Timeline.jsx

  return (
    <div className="relative border-l border-gray-300 pl-4">
      <TimelineItem
        title="Software Developer"
        company="Company Name"
        date="2021 - Present"
        description="Developing web applications using React and Node.js."
      />
      <TimelineItem
        title="Intern Developer"
        company="Company Name"
        date="2020 - 2021"
        description="Assisted in building and maintaining web applications."
      />
      {/* Add more TimelineItem components as needed */}
    </div>
  );
}
