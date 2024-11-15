'use client';
import BootstrapIcon from '@/public/images/technologies/bootstrap.svg';
import CSSIcon from '@/public/images/technologies/css3.svg';
import ExpressIcon from '@/public/images/technologies/express.svg';
import FirebaseIcon from '@/public/images/technologies/firebase.svg';
import GitIcon from '@/public/images/technologies/git.svg';
import HTMLIcon from '@/public/images/technologies/html5.svg';
import JavascriptIcon from '@/public/images/technologies/javascript.svg';
import MongodbIcon from '@/public/images/technologies/mongodb.svg';
import NodeIcon from '@/public/images/technologies/nodejs.svg';
import PostmanIcon from '@/public/images/technologies/postman.svg';
// import ReactNativeIcon from '@/public/images/technologies/react-native.svg';
import ReactIcon from '@/public/images/technologies/react.svg';
import ReduxIcon from '@/public/images/technologies/redux.svg';
import React from 'react';

import Skill from './Skill';

export const Technologies = () => {
  return (
    <>
      <h2 className="mt-4">Technologies and Tools</h2>
      <div className="grid grid-cols-2 md:grid-cols-6 gap-4 justify-center mt-12">
        <Skill icon={<ReactIcon width={40} height={40} />} name="React" />
        <Skill icon={<GitIcon width={40} height={40} />} name="Git" />
        <Skill
          icon={<BootstrapIcon width={40} height={40} />}
          name="Bootstrap"
        />
        <Skill icon={<CSSIcon width={40} height={40} />} name="CSS" />
        <Skill icon={<ExpressIcon width={40} height={40} />} name="Express" />
        <Skill icon={<HTMLIcon width={40} height={40} />} name="HTML" />
        <Skill
          icon={<JavascriptIcon width={40} height={40} />}
          name="JavaScript"
        />
        <Skill icon={<MongodbIcon width={40} height={40} />} name="MongoDB" />
        <Skill icon={<NodeIcon width={40} height={40} />} name="Node.js" />
        <Skill icon={<PostmanIcon width={40} height={40} />} name="Postman" />
        <Skill icon={<FirebaseIcon width={40} height={40} />} name="Firebase" />
        <Skill icon={<ReduxIcon width={40} height={40} />} name="Redux" />
      </div>
    </>
  );
};
