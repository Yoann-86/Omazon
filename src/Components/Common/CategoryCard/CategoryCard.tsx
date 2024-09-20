import { Link } from "react-router-dom";

import "./CategoryCard.scss";

import type { ICategory } from "@/@Types";

interface CategoryCardProps {
  category: ICategory;
}

function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link to={`/category/${category.slug}`} className="category">
      <div className="category--img">
        <div className="category--img-filter" />
        <img className="category--img-image" src={category.image} alt="" />
      </div>
      <p className="category--title">{category.title}</p>
    </Link>
  );
}

export default CategoryCard;
