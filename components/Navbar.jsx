import Link from "next/link";
import { Dropdown } from ".";
import ThemeSwitcher from "./ThemeSwitcher";

// const categories = [
//   { name: "Web 3.0", slug: "blockchain-engineering" },
//   { name: "Web 2.0", slug: "web-development" },
//   { name: "DSA", slug: "dsa" },
// ];

const Navbar = () => {
  return (
    <div className='container mx-auto px-9 lg:px-0 xl:px-9 mb-8'>
      <div className='flex justify-between border-b w-full py-3 lg:py-2 xl:py-3 px-1'>
        <div className='self-center float-start'>
          <Link href='/'>
            <span className='cursor-pointer font-bold text-xl md:text-2xl lg:text-xl xl:text-2xl dark:text-night-white'>
              "wagmi"
            </span>
          </Link>
        </div>
        {/* <div className='hidden md:float-left md:contents'>
          {categories.map((category) => (
            <Link key={category.slug} href={`/category/${category.slug}`}>
              <span className='transition duration-300 transform hover:-translate-y-1 md:float-right mt-2 align-middle ml-6 font-semibold cursor-pointer'>
                {category.name}
              </span>
            </Link>
          ))}
        </div> */}
        <div className='flex float-end'>
          <div className='self-center hidden md:contents'>
            <ThemeSwitcher />
          </div>
          <div className='self-center ml-2 md:hidden'>
            <Dropdown />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
