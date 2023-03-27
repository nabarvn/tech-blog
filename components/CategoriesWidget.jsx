import Link from "next/link";
import useGlobalContext from "../hooks/globalContext";

const CategoriesWidget = () => {
  const { categories } = useGlobalContext();

  return (
    <div className='bg-white dark:bg-night-gray shadow-md rounded-lg p-8 lg:p-6 mb-8'>
      <h3 className='text-xl mb-8 lg:mb-6 font-semibold cursor-default dark:text-night-white border-b pb-4'>
        Categories
      </h3>
      {categories.map((category) => (
        <div
          key={category.slug}
          className='text-base xl:text-lg font-semibold transition duration-300 dark:text-gray-300 px-2 pb-3 mb-3'
        >
          <Link
            href={`/category/${category.slug}`}
            className='hover:text-blue-500 dark:hover:text-indigo-500 transition duration-300'
          >
            {category.name}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default CategoriesWidget;
