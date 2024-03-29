import Link from "next/link";
import { Fragment, useState, useEffect, useRef } from "react";
import { Menu, Transition } from "@headlessui/react";
import ThemeSwitcher from "./ThemeSwitcher";

import {
  HomeIcon,
  ChevronDownIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/20/solid";

const classNames = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

const Dropdown = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    document.addEventListener("mousedown", (e) => {
      if (!menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    });

    if (menuOpen) {
      document.getElementById("layout-child").style.pointerEvents = "none";
    } else if (!menuOpen) {
      document.getElementById("layout-child").style.pointerEvents = "auto";
    }
  }, [menuOpen]);

  return (
    <Menu
      as='div'
      id='dropdown'
      ref={menuRef}
      className='relative inline-block text-left'
    >
      <div onClick={() => setMenuOpen(!menuOpen)}>
        <Menu.Button className='inline-flex w-full justify-center rounded-md border border-gray-300 dark:border-night-gray bg-light-gray dark:bg-night-gray p-1 text-md font-medium text-gray-700 dark:text-night-white shadow-sm focus:outline-none'>
          <ChevronDownIcon
            className={`h-4 w-4 ${menuOpen && "rotate-180"}`}
            aria-hidden='true'
          />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter='transition ease-in duration-100'
        enterFrom='transform opacity-0 scale-95'
        enterTo='transform opacity-100 scale-100'
        leave='transition ease-out duration-75'
        leaveFrom='transform opacity-100 scale-100'
        leaveTo='transform opacity-0 scale-95'
      >
        <Menu.Items
          className={`absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white dark:bg-night-gray shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${
            !menuOpen && "hidden"
          }`}
        >
          <div>
            <Menu.Item>
              {({ active }) => (
                <Link
                  href='https://nabarun.xyz'
                  className={classNames(
                    active
                      ? "bg-gray-100 dark:bg-night-gray text-gray-900 dark:text-night-teal"
                      : "text-gray-700 dark:text-night-white",
                    "block px-4 py-2 text-md"
                  )}
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  <div className='flex'>
                    <HomeIcon
                      className='self-center h-5 w-5'
                      aria-hidden='true'
                    />
                    <span className='self-center ml-2'>Nabarun.xyz</span>
                  </div>
                </Link>
              )}
            </Menu.Item>
          </div>

          <div className='py-1'>
            <Menu.Item>
              {({ active }) => (
                <Link
                  href='/category/blockchain-engineering'
                  className={classNames(
                    active
                      ? "bg-gray-100 dark:bg-night-gray text-gray-900 dark:text-night-teal"
                      : "text-gray-700 dark:text-night-white",
                    "block px-4 py-2 text-md"
                  )}
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  Blockchain Engineering
                </Link>
              )}
            </Menu.Item>

            <Menu.Item>
              {({ active }) => (
                <Link
                  href='/category/web-development'
                  className={classNames(
                    active
                      ? "bg-gray-100 dark:bg-night-gray text-gray-900 dark:text-night-teal"
                      : "text-gray-700 dark:text-night-white",
                    "block px-4 py-2 text-md"
                  )}
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  Web Development
                </Link>
              )}
            </Menu.Item>

            <Menu.Item>
              {({ active }) => (
                <Link
                  href='/category/dsa'
                  className={classNames(
                    active
                      ? "bg-gray-100 dark:bg-night-gray text-gray-900 dark:text-night-teal"
                      : "text-gray-700 dark:text-night-white",
                    "block px-4 py-2 text-md"
                  )}
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  Data Structures and Algorithms
                </Link>
              )}
            </Menu.Item>
          </div>

          <div
            className='inline-flex w-full justify-between text-md text-gray-700 dark:text-night-white px-4 py-2'
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className='self-center'>Theme Switcher</span>
            <ArrowLongRightIcon
              className='self-center h-4 w-4'
              aria-hidden='true'
            />
            <Menu.Button>
              <ThemeSwitcher />
            </Menu.Button>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default Dropdown;
