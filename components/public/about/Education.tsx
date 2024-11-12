import React from 'react';

const Education = () => {
  const educations = [
    {
      year: '2014 - 2019',
      title: 'Computer Science',
      institution: 'National University of La Matanza',
    },
    {
      year: '2019',
      title: 'First Certificate in English',
      institution: 'University of Cambridge',
    },
    {
      year: '2006 - 2013',
      title: 'Bachelor in Economics',
      institution: 'Sagrado Corazón de Jesús',
    },
  ];
  return (
    <div>
      <section className="flex flex-col gap-4">
        <h2 className="mt-4">Education</h2>

        <div className="space-y-4 mt-4">
          {educations.map((education, index) => {
            return (
              <div
                key={index}
                className="grid grid-cols-3 gap-4 items-center border-b border-b-gray-600 p-4"
              >
                <div>
                  <span className="font-bold">{education.year}</span>
                </div>
                <div className="pl-4">
                  <span>{education.title}</span>
                </div>
                <div className="pl-4">
                  <span className="text-gray-500">{education.institution}</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Education;
