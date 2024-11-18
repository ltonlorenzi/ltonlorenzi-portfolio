'use client';
import { About } from '@/components/admin/About';
import { Career } from '@/components/admin/Career';
import { Home } from '@/components/admin/Home';
import { Projects } from '@/components/admin/projects/Projects';
import { Technologies } from '@/components/admin/technologies/Technologies';
import { useRef, useState } from 'react';
import { useClickAway } from 'react-use';

const MENU_OPTIONS = [
  { name: 'Home', component: <Home /> },
  { name: 'About', component: <About /> },
  { name: 'Projects', component: <Projects /> },
  { name: 'Career', component: <Career /> },
  { name: 'Technologies', component: <Technologies /> },
];

export default function Admin() {
  const [selectedOption, setSelectedOption] = useState('Home');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const ref = useRef(null);

  useClickAway(ref, () => setIsSidebarOpen(false));

  const renderComponent = () => {
    const option = MENU_OPTIONS.find((op) => op.name === selectedOption);
    return option?.component;
  };

  const handleMenuClick = (menuName: string) => {
    setSelectedOption(menuName);
    setIsSidebarOpen(false);
  };
  return (
    <div className="bg-dark-background flex flex-grow text-dark-foreground">
      {isSidebarOpen ? (
        <aside ref={ref} className="w-64 bg-gray-800 p-4">
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
                    onClick={() => handleMenuClick(menu.name)}
                  >
                    {menu.name}
                  </li>
                );
              })}
            </ul>
          </nav>
        </aside>
      ) : (
        <button
          className="absolute top-8 left-8 bg-gray-700 text-white p-2 rounded-md z-10"
          onClick={() => setIsSidebarOpen(true)}
        >
          ☰
        </button>
      )}
      <main className="p-8 w-full">{renderComponent()}</main>
    </div>
  );
}
