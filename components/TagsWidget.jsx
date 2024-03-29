import Link from "next/link";
import useGlobalContext from "../hooks/globalContext";

const TagsWidget = () => {
  const { tags } = useGlobalContext();

  return (
    <div className='bg-white dark:bg-night-gray shadow-md rounded-lg p-8 lg:p-6 mb-8'>
      <h3 className='text-xl mb-8 lg:mb-6 font-semibold cursor-default dark:text-night-white border-b pb-4'>
        Tags
      </h3>

      <div className='flex flex-wrap'>
        {tags.map((tag) => (
          <div key={tag.slug} className='text-center mb-2'>
            <Link href={`/tag/${tag.slug}`}>
              <span className='inline-block ml-2 bg-blue-500 dark:bg-night-blue active:bg-blue-900 dark:active:bg-indigo-700 text-sm font-semibold rounded-full text-white px-2 py-1 cursor-pointer'>
                {tag.name}
              </span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TagsWidget;
