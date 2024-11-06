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
// db.getCollection('translations').drop();

// Insert a few documents into the sales collection.
db.getCollection('translations').insertMany([
  {
    "_id": 16,
    "entityId": "1",
    "entityName": "projects",
    "fields": {
      "title": "Plateforme de commerce électronique",
      "description": "Une application web pour acheter et vendre des produits."
    },
    "locale": "fr"
  },
  {
    "_id": 17,
    "entityId": "2",
    "entityName": "projects",
    "fields": {
      "title": "Portfolio personnel",
      "description": "Un site web personnel pour afficher le travail du portfolio."
    },
    "locale": "fr"
  },
  {
    "_id": 18,
    "entityId": "3",
    "entityName": "projects",
    "fields": {
      "title": "Plateforme de blog",
      "description": "Une plateforme CMS pour gérer et publier du contenu de blog."
    },
    "locale": "fr"
  },
  {
    "_id": 19,
    "entityId": "4",
    "entityName": "projects",
    "fields": {
      "title": "Application de réseaux sociaux",
      "description": "Une application de réseaux sociaux conviviale pour les mobiles."
    },
    "locale": "fr"
  },
  {
    "_id": 20,
    "entityId": "5",
    "entityName": "projects",
    "fields": {
      "title": "Système de gestion des stocks",
      "description": "Un outil pour suivre les niveaux de stocks et les commandes."
    },
    "locale": "fr"
  },
  {
    "_id": 21,
    "entityId": "6",
    "entityName": "projects",
    "fields": {
      "title": "Application météo",
      "description": "Une application pour consulter les mises à jour météo en direct."
    },
    "locale": "fr"
  },
  {
    "_id": 22,
    "entityId": "7",
    "entityName": "projects",
    "fields": {
      "title": "Gestionnaire de tâches",
      "description": "Une application pour gérer et prioriser les tâches."
    },
    "locale": "fr"
  },
  {
    "_id": 23,
    "entityId": "8",
    "entityName": "projects",
    "fields": {
      "title": "Plateforme immobilière",
      "description": "Une application web pour naviguer et gérer les annonces immobilières."
    },
    "locale": "fr"
  },
  {
    "_id": 24,
    "entityId": "9",
    "entityName": "projects",
    "fields": {
      "title": "Application de chat",
      "description": "Une application de chat en temps réel pour la messagerie."
    },
    "locale": "fr"
  },
  {
    "_id": 25,
    "entityId": "10",
    "entityName": "projects",
    "fields": {
      "title": "Application de réservation de voyage",
      "description": "Une application pour réserver des vols, hôtels et plus."
    },
    "locale": "fr"
  },
  {
    "_id": 26,
    "entityId": "11",
    "entityName": "projects",
    "fields": {
      "title": "Système de gestion de l'apprentissage",
      "description": "Une plateforme pour l'apprentissage en ligne et la gestion des cours."
    },
    "locale": "fr"
  },
  {
    "_id": 27,
    "entityId": "12",
    "entityName": "projects",
    "fields": {
      "title": "Service de streaming vidéo",
      "description": "Une plateforme pour diffuser des vidéos en ligne."
    },
    "locale": "fr"
  },
  {
    "_id": 28,
    "entityId": "13",
    "entityName": "projects",
    "fields": {
      "title": "Système de questionnaires en ligne",
      "description": "Une plateforme en ligne pour créer et gérer des questionnaires."
    },
    "locale": "fr"
  },
  {
    "_id": 29,
    "entityId": "14",
    "entityName": "projects",
    "fields": {
      "title": "Application d'apprentissage en ligne",
      "description": "Une application mobile pour accéder au contenu d'apprentissage en déplacement."
    },
    "locale": "fr"
  },
  {
    "_id": 30,
    "entityId": "15",
    "entityName": "projects",
    "fields": {
      "title": "Suivi de la condition physique",
      "description": "Une application pour suivre les entraînements et les objectifs de condition physique."
    },
    "locale": "fr"
  }
]);

// Run a find command to view items sold on April 4th, 2014.
// const salesOnApril4th = db.getCollection('sales').find({
//   date: { $gte: new Date('2014-04-04'), $lt: new Date('2014-04-05') }
// }).count();

// Print a message to the output window.
// console.log(`${salesOnApril4th} sales occurred in 2014.`);

// Here we run an aggregation and open a cursor to the results.
// Use '.toArray()' to exhaust the cursor to return the whole result set.
// You can use '.hasNext()/.next()' to iterate through the cursor page by page.
// db.getCollection('sales').aggregate([
//   // Find all of the sales that occurred in 2014.
//   { $match: { date: { $gte: new Date('2014-01-01'), $lt: new Date('2015-01-01') } } },
//   // Group the total sales for each product.
//   { $group: { _id: '$item', totalSaleAmount: { $sum: { $multiply: [ '$price', '$quantity' ] } } } }
// ]);
