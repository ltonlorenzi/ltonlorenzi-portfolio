import { Job } from '@/types/Job';

export const jobs: Job[] = [
  {
    start_date: new Date('2019-01-01T00:00:00Z'),
    end_date: new Date('2024-01-01T00:00:00Z'),
    title: 'Ssr Developer',
    company: 'Appstract',
    companyId: 'appstract',
    body: "I worked at Appstract as a web/mobile developer, primarily using React and Next.js, while also leveraging various other technologies based on each project's requirements. I collaborated with clients such as Mundi, Telered, Torc, and Kernel, gaining valuable industry knowledge across diverse sectors. This experience has greatly contributed to my professional growth, particularly in areas like finance (Mundi), telecommunications (Telered), talent acquisition (Torc), and more.",
  },
  {
    start_date: new Date('2023-01-01T00:00:00Z'),
    end_date: new Date('2024-01-01T00:00:00Z'),
    title: 'Front End Developer',
    companyId: 'torc',
    company: 'Torc (Appstract)',
    body: "Torc connects talents with companies. I redesigned the entire landing page and I've also worked on the platform, where users could apply to jobs and companies could offer opportunities.",
  },
  {
    title: 'Full Stack Developer',
    start_date: new Date('2020-01-01T00:00:00Z'),
    end_date: new Date('2023-01-01T00:00:00Z'),
    company: 'Mundi (Appstract)',
    companyId: 'mundi',
    body: 'Mundi Home MicroFrontend: Microfrontend for the home page of the company. Built with React, Typescript, TailwindCSS and GrapqhQL; tested with React Testing Library and Cypress; monitoring and metrics using Segment, Sentry and Amplitude Mundi’s Design System: Company Design System built with React, Typescript, TailwindCSS, StoryBook and React Testing Library Mundi Landing page: Web Application for attracting customers. Built with NextJS, Styled Components, hosted with Vercel, and consuming data from Directus CMS to allow customization on components, translations, SEO and allowing completely new and customizable pages without having to re-deploy.',
  },
  {
    start_date: new Date('2019-01-01T00:00:00Z'),
    end_date: new Date('2020-01-01T00:00:00Z'),
    title: 'Ionic Developer',
    company: 'Telered (Appstract)',
    companyId: 'telered',
    body: 'Mobile Application for the customer, to administrate and buy new products. Built with Ionic and Firebase.',
  },
  {
    start_date: new Date('2017-01-01T00:00:00Z'),
    end_date: new Date('2018-01-01T00:00:00Z'),
    title: 'Junior Developer (internship)',
    company: 'Summant Technologies',
    companyId: 'summant',
    body: 'PeopleNet(Meta4) development for HR clients such as EfectivoSi. Web development with HTML, CSS, JavaScript. Backend database development with SQL Server',
  },
  {
    start_date: new Date('2016-01-01T00:00:00Z'),
    end_date: new Date('2017-01-01T00:00:00Z'),
    title: 'Technical Support (internship)',
    company: 'ClickOn',
    companyId: 'clickon',
    body: 'I worked as a Technical Support specialist, administrating the network, helping with machine troubleshooting, and providing assistance with various technical issues related to hardware and software.',
  },
];
