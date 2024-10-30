'use client';
import BootstrapIcon from '@/public/icons/bootstrap.svg';
import CSSIcon from '@/public/icons/css3.svg';
import ExpressIcon from '@/public/icons/express.svg';
import FirebaseIcon from '@/public/icons/firebase.svg';
import GitIcon from '@/public/icons/git.svg';
import HTMLIcon from '@/public/icons/html5.svg';
import JavascriptIcon from '@/public/icons/javascript.svg';
import MongodbIcon from '@/public/icons/mongodb.svg';
import NodeIcon from '@/public/icons/nodejs.svg';
import PostmanIcon from '@/public/icons/postman.svg';
import ReactNativeIcon from '@/public/icons/react-native.svg';
import ReactIcon from '@/public/icons/react.svg';
import ReduxIcon from '@/public/icons/redux.svg';
import React from 'react';

import Skill from './Skill';

export const Technologies = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 justify-center">
      <Skill icon={<ReactIcon width={40} height={40} />} name="Express" />
      <Skill icon={<GitIcon width={40} height={40} />} name="Next.js" />
      <Skill
        icon={<BootstrapIcon width={40} height={40} />}
        name="SQL Server"
      />
      <Skill icon={<CSSIcon width={40} height={40} />} name="Angular" />
      <Skill icon={<ExpressIcon width={40} height={40} />} name="Ionic" />
      <Skill icon={<HTMLIcon width={40} height={40} />} name="React" />
      <Skill
        icon={<JavascriptIcon width={40} height={40} />}
        name="React Native"
      />
      <Skill icon={<MongodbIcon width={40} height={40} />} name="Postman" />
      <Skill icon={<NodeIcon width={40} height={40} />} name="Bootstrap" />
      <Skill icon={<PostmanIcon width={40} height={40} />} name="Firebase" />
      <Skill icon={<GitIcon width={40} height={40} />} name="Git" />
      <Skill icon={<ReactNativeIcon width={40} height={40} />} name="Node.js" />
      <Skill icon={<FirebaseIcon width={40} height={40} />} name="TypeScript" />
      <Skill icon={<ReduxIcon width={40} height={40} />} name="Redux" />
    </div>
  );
};
