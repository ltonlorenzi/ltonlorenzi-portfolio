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
        <h2 className="md:text-left text-center mt-4">Education</h2>

        <div className="mt-4">
          {educations.map((education, index) => {
            return (
              <div
                key={index}
                className="grid grid-cols-5 gap-4 items-center border-b py-2 text-sm md:text-base border-b-gray-600 md:p-4"
              >
                <div className="col-span-1">
                  <span className="font-bold">{education.year}</span>
                </div>
                <div className="md:pl-4 col-span-2">
                  <span>{education.title}</span>
                </div>
                <div className="md:pl-4 col-span-2">
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
