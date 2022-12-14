import { useState, useEffect } from "react";
import categoryData from "../api/categories.json";
import Category from "./ui/Category";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setCategories(categoryData);
  }, []);

  return (
    <div className="bg-white py-4">
      <div className="container mx-auto">
        <h3 className="text-sm font-semibold my-3 px-4 md:px-0">Kategoriler</h3>
        <div className="grid grid-cols-4 lg:grid-cols-5 xl:grid-cols-11">
          {categories &&
            categories.map((category, index) => (
              <Category key={index} category={category} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
