'use client';
import { About } from '@/components/admin/About';
import { Career } from '@/components/admin/Career';
import { Home } from '@/components/admin/Home';
import { Projects } from '@/components/admin/Projects';
import { useState } from 'react';

const MENU_OPTIONS = [
  { name: 'Home', component: <Home /> },
  { name: 'About', component: <About /> },
  { name: 'Projects', component: <Projects /> },
  { name: 'Career', component: <Career /> },
];

export default function Admin() {
  const [selectedOption, setSelectedOption] = useState('Home');

  const renderComponent = () => {
    const option = MENU_OPTIONS.find((op) => op.name === selectedOption);
    return option?.component;
  };
  return (
    <div className="bg-dark-background h-screen flex w-full">
      <aside className="w-64 bg-gray-800 text-white p-4">
        <nav>
          <ul className="flex flex-col gap-3 h-full">
            <li className="border-b p-4">
              <h3> Administrator</h3>
            </li>
            {MENU_OPTIONS.map((menu) => {
              return (
                <li
                  key={menu.name}
                  className="border-b p-4 cursor-pointer"
                  onClick={() => setSelectedOption(menu.name)}
                >
                  {menu.name}
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>
      <main className="p-8">{renderComponent()}</main>
    </div>
  );
}
