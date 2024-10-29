import { localizedLink } from '@/utils/linkHelper';
import { routes } from '@/utils/routes';
import Hamburger from 'hamburger-react';
import Link from 'next/link';
import React, { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useClickAway } from 'react-use';

interface NavbarMobileProps {
  locale: string;
}

export const NavbarMobile = ({ locale }: NavbarMobileProps) => {
  const { t } = useTranslation(['common']);
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  useClickAway(ref, () => setIsOpen(false));

  return (
    <div ref={ref} className="md:hidden">
      <Hamburger
        size={18}
        toggled={isOpen}
        onToggle={() => setIsOpen(!isOpen)}
      />
      {isOpen && (
        <nav className="flex flex-col gap-4 fixed right-0 left-0 mx-8 z-50 mt-2">
          <ul className="grid gap-2 bg-background dark:bg-dark-background rounded-lg">
            {routes.map((route) => (
              <li
                key={route}
                className="w-full bg-background dark:bg-dark-background border-b border-b-white/20 rounded-xl p-4"
              >
                <Link
                  href={localizedLink(`/${route}`, locale)}
                  onClick={() => setIsOpen(!isOpen)}
                >
                  {t(`headers.${route}`)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
};
