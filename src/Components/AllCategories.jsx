import React, { useEffect, useState } from 'react';
import { Category } from './Category';
import { getCategories } from '../Functions/getData';
import { PopupBox } from './PopupBox';

export const AllCategories = () => {
  const [category, setCategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [showPopup, setShowPopup] = useState();
//   const [selectedCategory, setSelectedCategory] = useState()

  const callbackFunction = () => {
    setShowPopup(false)
  }


  useEffect(() => {
    getCategories()
      .then((data) => {
        setCategory(data.data);
        console.log(data.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div className='flex-container'>
      {category.map((category, index) => (
        <Category
          selectedCategory = {selectedCategory}
          setSelectedCategory={setSelectedCategory}
          category={category}
          key={index}
        />
      ))}
    </div>
  );
};
