const Category = ({ category: { id, title, image } }) => {
  return (
    <a
      href="/#"
      className="flex flex-col group text-center items-center p-4 whitespace-nowrap gap-y-2 transition rounded hover:bg-purple-100"
    >
      <img
        src={image}
        alt={title}
        className="w-12 border border-gray-200 rounded-md"
      />
      <div className="text-sm font-semibold group-hover:text-brand-color tracking-tight">
        {title}
      </div>
    </a>
  );
};

export default Category;
