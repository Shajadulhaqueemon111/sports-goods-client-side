/* eslint-disable @typescript-eslint/no-explicit-any */

// Categories.tsx
import { Link, useNavigate } from "react-router-dom";

const Categories = () => {
  const navigate = useNavigate();
  const categories = [
    "Sports Equipment",
    "Footwear",
    "Fitness Equipment",
    "Rackets",
    "Protective Gear",
  ];
  console.log(categories);

  const handleCategoryClick = (category: any) => {
    navigate(`/all-product?category=${category}`);
  };
  console.log(handleCategoryClick);

  return (
    <div className="categories-section">
      <div>
        <h1 className="text-2xl font-bold text-center mt-2">
          Product Category
        </h1>
      </div>
      <div className="text-center gap-4">
        {categories.map((category) => (
          <Link
            key={category}
            to={`/all-product?category=${encodeURIComponent(category)}`} // Redirect to AllProducts with the selected category
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            {category}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
