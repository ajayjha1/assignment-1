import React, { useState, Suspense, lazy } from 'react';
import { PopupBox } from './PopupBox';


export const Category = (props) => {
  const { category, index, selectedCategory, setSelectedCategory } = props;
  const capitalizedCategory = category.charAt(0).toUpperCase() + category.slice(1);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedPopup, setSelectedPopup] = useState("")
  

  const handleCategoryClick = (event) => {
    event.stopPropagation();
    // setShowPopup(!showPopup);
    setSelectedCategory(category);
  };

  const callbackFunction = () => {
    // setShowPopup(false);
    setSelectedCategory("");
  }

  return (
    <>
    { selectedCategory !== "" && <PopupBox category={category} selectedCategory={selectedCategory} callbackFunction = {callbackFunction}/>}
      <div className='category-box' role='button' onClick={handleCategoryClick} >
        <h1 style={{ color: '#203b8a', fontSize: '24px', fontWeight: 'bold', margin: '0'}}>{capitalizedCategory}</h1>
        <p style={{ color: '#6c21a8', fontSize: '14px', margin: '0' }}>Unlimited Jokes On {capitalizedCategory}</p>
      </div>
    </>
  );
};
