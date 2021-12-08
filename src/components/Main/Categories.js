import React from "react";
import { useSelector } from "react-redux";
import Category from "../Category";
import data from "../../Data/Products.json";

function Categories(props) {
  const activeSection = useSelector((state) => state.app.activeSection);

  return (
    <>
      {activeSection === "main" && (
        <div className="categories">
          {data.categories.map((item) => {
            return <Category name={item} />;
          })}
        </div>
      )}
    </>
  );
}

export default Categories;
