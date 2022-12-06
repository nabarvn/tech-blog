import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import ThemeSwitcher from "./ThemeSwitcher";

const classNames = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

const Dropdown = () => {
  return (
    <Menu as='div' className='relative inline-block text-left'>
      <div>
        <Menu.Button className='inline-flex w-full justify-center rounded-md border border-gray-300 dark:border-night-gray bg-light-gray dark:bg-night-gray p-1 text-sm font-medium text-gray-700 dark:text-night-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-night-teal focus:ring-offset-2 focus:ring-offset-gray-100'>
          <ChevronDownIcon className='h-5 w-5' aria-hidden='true' />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter='transition ease-out duration-100'
        enterFrom='transform opacity-0 scale-95'
        enterTo='transform opacity-100 scale-100'
        leave='transition ease-in duration-75'
        leaveFrom='transform opacity-100 scale-100'
        leaveTo='transform opacity-0 scale-95'
      >
        <Menu.Items className='absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white dark:bg-night-gray shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
          <div className='py-1'>
            <Menu.Item>
              {({ active }) => (
                <a
                  href='/category/dsa'
                  className={classNames(
                    active
                      ? "bg-gray-100 dark:bg-night-gray text-gray-900 dark:text-night-teal"
                      : "text-gray-700 dark:text-night-white",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  Data Structures and Algorithms
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href='/category/web-development'
                  className={classNames(
                    active
                      ? "bg-gray-100 dark:bg-night-gray text-gray-900 dark:text-night-teal"
                      : "text-gray-700 dark:text-night-white",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  Web Development
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href='/category/blockchain-engineering'
                  className={classNames(
                    active
                      ? "bg-gray-100 dark:bg-night-gray text-gray-900 dark:text-night-teal"
                      : "text-gray-700 dark:text-night-white",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  Blockchain Engineering
                </a>
              )}
            </Menu.Item>
          </div>
          <div className='inline-flex w-full justify-between text-sm text-gray-700 dark:text-night-white px-4 py-2'>
            <span className='self-center'>Theme Switcher</span>
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
