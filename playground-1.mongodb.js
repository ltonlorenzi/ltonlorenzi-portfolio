/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.
use('test');

// //delete collection
// db.getCollection('technologies').drop();
// db.getCollection('technologies').insertMany([
//   {
//     _id: 1,
//     name: 'React',
//     description: 'A JavaScript library for building user interfaces',
//     imageUrl: 'images/technologies/react.svg',
//   },
//   {
//     _id: 2,
//     name: 'Node.js',
//     description: "JavaScript runtime built on Chrome's V8 JavaScript engine",
//     imageUrl: 'images/technologies/nodejs.svg',
//   },
//   {
//     _id: 3,
//     name: 'MongoDB',
//     description: 'A document database, part of the NoSQL family',
//     imageUrl: 'images/technologies/mongodb.svg',
//   },
//   {
//     _id: 4,
//     name: 'Express',
//     description: 'A web application framework for Node.js',
//   },
//   {
//     _id: 5,
//     name: 'TypeScript',
//     description: 'A superset of JavaScript that adds static types',
//     imageUrl: '/images/technologies/typescript.svg',
//   },
//   { _id: 6, name: 'GraphQL', description: 'A query language for APIs' },
//   {
//     _id: 7,
//     name: 'PostgreSQL',
//     description: 'A powerful, open-source object-relational database system',
//   },
//   {
//     _id: 8,
//     name: 'Tailwind CSS',
//     description: 'A utility-first CSS framework',
//     imageUrl: '/images/technologies/tailwindcss.svg',
//   },
//   {
//     _id: 9,
//     name: 'Docker',
//     description:
//       'A platform for developing, shipping, and running applications in containers',
//     imageUrl: '/images/technologies/docker.png',
//   },
//   {
//     _id: 10,
//     name: 'AWS',
//     description: 'Amazon Web Services, a comprehensive cloud platform',
//     imageUrl: '/images/technologies/aws.png',
//   },
//   {
//     _id: 11,
//     name: 'Next.js',
//     description: 'A React framework for production',
//     imageUrl: '/images/technologies/next-js.svg',
//   },
//   {
//     _id: 12,
//     name: 'Redux',
//     description: 'A state management tool for JavaScript applications',
//     imageUrl: '/images/technologies/redux.svg',
//   },
//   {
//     _id: 13,
//     name: 'Firebase',
//     description:
//       'A platform developed by Google for creating mobile and web applications',
//     imageUrl: '/images/technologies/firebase.svg',
//   },
//   {
//     _id: 14,
//     name: 'Angular',
//     description: 'A platform for building mobile and desktop web applications',
//     imageUrl: '/images/technologies/angular.png',
//   },
//   {
//     _id: 15,
//     name: 'Python',
//     description:
//       'A programming language known for its readability and versatility',
//   },
//   {
//     _id: 16,
//     name: 'Ionic',
//     description:
//       'Ionic empowers web developers to build leading cross-platform mobile apps and Progressive Web Apps (PWAs)',
//     imageUrl: '/images/technologies/ionic.png',
//   },
//   {
//     _id: 17,
//     name: 'Soap',
//     description:
//       'Simple Objects Access Protocol is a web communication protocol designed for Microsoft back in 1998.',
//     imageUrl: '/images/technologies/soap.png',
//   },
//   {
//     _id: 18,
//     name: 'Git',
//     description:
//       'Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.',
//     imageUrl: '/images/technologies/git.svg',
//   },
//   {
//     _id: 19,
//     name: 'Trello',
//     description:
//       'Trello is a visual collaboration and project management tool that helps teams organize their work',
//     imageUrl: '/images/technologies/trello.png',
//   },
//   {
//     _id: 20,
//     name: 'Directus',
//     description: 'A powerful CMS, BaaS, and more.',
//     imageUrl: '/images/technologies/directus.svg',
//   },
//   {
//     _id: 21,
//     name: 'Jira',
//     description: 'A powerful CMS, BaaS, and more.',
//     imageUrl: '/images/technologies/jira.svg',
//   },
//   {
//     _id: 22,
//     name: 'GraphQL',
//     description:
//       'GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data.',
//     imageUrl: '/images/technologies/graphql.png',
//   },
//   {
//     _id: 23,
//     name: 'Linux',
//     description:
//       'Linux is a Unix-like, open source and community-developed operating system (OS) for computers, servers, mainframes, mobile devices and embedded devices.',
//     imageUrl: '/images/technologies/linux.png',
//   },
//   {
//     _id: 24,
//     name: 'OpenAI',
//     description: 'The most powerful platform for building AI products.',
//     imageUrl: '/images/technologies/openai.png',
//   },
//   {
//     _id: 25,
//     name: 'Sentry',
//     description: 'The most powerful platform for building AI products.',
//     imageUrl: '/images/technologies/openai.png',
//   },
//   {
//     _id: 26,
//     name: 'Hasura',
//     description: "The world's first metadata-driven API platform.",
//     imageUrl: '/images/technologies/hasura.png',
//   },
//   {
//     _id: 27,
//     name: 'Vercel',
//     description: "The world's first metadata-driven API platform.",
//     imageUrl: '/images/technologies/vercel.svg',
//   },
// ]);

///UPDATE _ids in projects (from string to integer)
// const projects = db.projects.find().toArray();
// db.getCollection('projects').drop();
// db.getCollection('projects').insertMany(
//   projects.map((project) => ({
//     ...project,
//     _id: parseInt(project._id, 10),
//   }))
// );

// db.getCollection('projects').drop();

// db.projects.insertMany([
//   {
//     _id: 1,
//     title: 'Sucursal Virtual Telered',
//     company: 'Telered',
//     description:
//       "I developed a mobile application for Telered (ISP) customers, enabling them to pay and download bills, purchase new products, and manage their services. I was solely responsible for the app's development, working directly with the client, conducting meetings, and overseeing the entire project from start to finish.",
//     start_date: new Date('2019-01-01T00:00:00Z'),
//     end_date: new Date('2020-06-01T00:00:00Z'),
//     technologies: [16, 13, 5, 14, 17, 18, 19],
//     imageUrl: '/images/projects/telered.jpg',
//     type: 'mobile',
//     projectUrl:
//       'https://play.google.com/store/apps/details?id=com.virtual.telered&hl=es_AR',
//   },
//   {
//     _id: 2,
//     title: 'Torc',
//     company: 'Torc',
//     description:
//       'At Torc, I was responsible for redesigning the entire landing and authorization pages, giving them a fresh, modern look. I also contributed to the platform app, adding new features for companies and talents, enhancing the user experience and streamlining the frontend.',
//     start_date: new Date('2023-01-01T00:00:00Z'),
//     end_date: new Date('2024-01-01T00:00:00Z'),
//     technologies: [1, 5, 8, 21, 18, 10, 22, 23, 24],
//     imageUrl: '/images/projects/torc.png',
//     type: 'desktop',
//     projectUrl: 'https://www.torc.dev/',
//   },
//   {
//     _id: 7,
//     title: 'Mundi (Landing)',
//     description:
//       "I worked on the Mundi landing page, where I developed new sections and made adjustments based on the product's requirements. The project focused on optimizing SEO performance, and I used best practices in Next.js development. Additionally, I integrated tools like Sentry, Segment, and Analytics to enhance monitoring, tracking, and performance insights.",
//     start_date: new Date('2020-01-01T00:00:00Z'),
//     end_date: new Date('2021-01-01T00:00:00Z'),
//     technologies: [11, 1, 8, 12, 25, 26, 9, 5, 20, 27],
//     imageUrl: 'https://i.postimg.cc/WprQZKt7/mundi.png',
//     type: 'desktop',
//     projectUrl: 'https://mundi.io/es',
//     company: 'Mundi',
//   },
// ]);

db.getCollection('projects').updateOne(
  { _id: 3 },
  {
    $set: {
      projectUrl: undefined,
      description:
        "At ETERNAL, I built a website to help scientists administrate their experiments easily. The platform let them capture images using a microscope, analyze them, add experiments, organize projects, and view data in charts (chartjs). I handled the whole project and worked directly with the client. I've also developed an API with Firebase Cloud Functions and GCP and a real-time video streaming system using a combination of express, OpenCV, Firebase, and WebSockets.",
    },
  }
);
