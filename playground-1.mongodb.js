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

//delete collection
// db.getCollection('technologies').drop();

// Insert technologies collection.
// db.getCollection('technologies').insertMany([
//   {
//     _id: 1,
//     name: 'React',
//     description: 'A JavaScript library for building user interfaces',
//   },
//   {
//     _id: 2,
//     name: 'Node.js',
//     description: "JavaScript runtime built on Chrome's V8 JavaScript engine",
//   },
//   {
//     _id: 3,
//     name: 'MongoDB',
//     description: 'A document database, part of the NoSQL family',
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
//   },
//   {
//     _id: 6,
//     name: 'GraphQL',
//     description: 'A query language for APIs',
//   },
//   {
//     _id: 7,
//     name: 'PostgreSQL',
//     description: 'A powerful, open-source object-relational database system',
//   },
//   {
//     _id: 8,
//     name: 'Tailwind CSS',
//     description: 'A utility-first CSS framework',
//   },
//   {
//     _id: 9,
//     name: 'Docker',
//     description:
//       'A platform for developing, shipping, and running applications in containers',
//   },
//   {
//     _id: 10,
//     name: 'AWS',
//     description: 'Amazon Web Services, a comprehensive cloud platform',
//   },
//   {
//     _id: 11,
//     name: 'Next.js',
//     description: 'A React framework for production',
//   },
//   {
//     _id: 12,
//     name: 'Redux',
//     description: 'A state management tool for JavaScript applications',
//   },
//   {
//     _id: 13,
//     name: 'Firebase',
//     description:
//       'A platform developed by Google for creating mobile and web applications',
//   },
//   {
//     _id: 14,
//     name: 'Angular',
//     description: 'A platform for building mobile and desktop web applications',
//   },
//   {
//     _id: 15,
//     name: 'Python',
//     description:
//       'A programming language known for its readability and versatility',
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

db.projects.find();
