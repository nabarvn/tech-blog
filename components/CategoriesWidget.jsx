import Link from "next/link";
import { useEffect, useState } from "react";
import { getCategories } from "../services";

const CategoriesWidget = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((allCategories) => setCategories(allCategories));
  }, []);

  return (
    <div className='bg-white dark:bg-night-gray shadow-lg rounded-lg p-8 lg:p-6 mb-8'>
      <h3 className='text-xl mb-8 lg:mb-6 font-semibold cursor-default dark:text-night-white border-b pb-4'>
        Categories
      </h3>
      {categories.map((category) => (
        <div
          key={category.slug}
          className='text-base xl:text-lg font-semibold transition duration-300 dark:text-gray-300 pb-3 mb-3'
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
