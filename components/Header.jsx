import Link from "next/link";

const categories = [
  { name: "Web 3.0", slug: "blockchain-engineering" },
  { name: "Web 2.0", slug: "web-development" },
  { name: "DSA", slug: "dsa" },
];

const Header = () => {
  return (
    <div className='container mx-auto px-9 mb-6'>
      <div className='border-b w-full inline-block py-3'>
        <div className='md:float-left block'>
          <Link href='/'>
            <span className='cursor-pointer font-bold text-2xl'>BLOG</span>
          </Link>
        </div>
        <div className='hidden md:float-left md:contents'>
          {categories.map((category) => (
            <Link key={category.slug} href={`/category/${category.slug}`}>
              <span className='transition duration-300 transform hover:-translate-y-1 md:float-right mt-2 align-middle ml-6 font-semibold cursor-pointer'>
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
