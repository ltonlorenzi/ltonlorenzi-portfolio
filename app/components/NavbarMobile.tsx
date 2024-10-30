import { useLocale } from '@/context/LocaleContext';
import { localizedLink } from '@/utils/linkHelper';
import { routes } from '@/utils/routes';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import React, { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { IoMdClose } from 'react-icons/io';
import { RxHamburgerMenu } from 'react-icons/rx';
import { useClickAway } from 'react-use';

export const NavbarMobile = () => {
  const { t } = useTranslation(['common']);
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  const locale = useLocale();

  useClickAway(ref, () => setIsOpen(false));

  return (
    <div ref={ref} className="md:hidden z-10">
      <button onClick={() => setIsOpen(true)} className="ml-2 flex">
        <RxHamburgerMenu size={30} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed top-0 right-0 h-full shadow-2xl bg-background dark:bg-dark-background w-3/4"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 p-4"
            >
              <IoMdClose size={30} />
            </button>
            <ul className="flex flex-col space-y-2 p-6">
              {routes.map((route, idx) => (
                <motion.li
                  initial={{ x: 30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{
                    delay: 0.05 * idx,
                    duration: 0.2,
                  }}
                  key={route}
                  className="border-b border-gray-200 dark:border-gray-600 py-4"
                >
                  <Link
                    href={localizedLink(`/${route}`, locale)}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-semibold text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                  >
                    {t(`headers.${route}`)}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
