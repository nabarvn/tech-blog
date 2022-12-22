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
      <h3 className='text-xl lg:text-lg mb-8 lg:mb-6 font-semibold cursor-default dark:text-night-white border-b pb-4'>
        Categories
      </h3>
      {categories.map((category) => (
        <Link key={category.slug} href={`/category/${category.slug}`}>
          <span className='lg:text-sm transition duration-300 cursor-pointer dark:text-gray-300 hover:text-blue-500 dark:hover:text-night-blue block pb-3 mb-3'>
            {category.name}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default CategoriesWidget;
