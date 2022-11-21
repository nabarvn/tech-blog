import Link from "next/link";
import { useEffect, useState } from "react";
import { getCategories } from "../services";

const CategoriesWidget = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((allCategories) => setCategories(allCategories));
  }, []);

  return (
    <div className='bg-white shadow-lg rounded-lg p-8 mb-8 pb-8'>
      <h3 className='text-xl mb-8 font-semibold border-b pb-4'>Categories</h3>
      {categories.map((category) => (
        <Link key={category.slug} href={`/category/${category.slug}`}>
          <span className='transition duration-300 cursor-pointer hover:text-blue-500 block pb-3 mb-3'>
            {category.name}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default CategoriesWidget;
