import React, { useEffect, useState, useMemo, useCallback } from 'react';
import { getJoke } from '../Functions/getData';
import { Button, useAccordionButton } from 'react-bootstrap';
import ClipLoader from 'react-spinners/ClipLoader';

export const PopupBox = (props) => {
  const {category, selectedCategory, callbackFunction } = props;
  const capitalizedCategory = selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  let color = '#FFFFFF';
  const override = {
    display: 'block',
    margin: '0 auto',
    borderColor: 'white',
  };

  const memoizedGetJokeMessage = useCallback(async () => {
    setLoading(true);
    try {
      const response = await getJoke(selectedCategory);
      const joke = response.data.value;
      console.log(joke);
      setMessage(joke);
    } catch (error) {
      console.log(error.message);
    }
    setLoading(false);
  }, [selectedCategory]);


  useEffect(() => {
    setMessage("")
    if(selectedCategory == category){
      memoizedGetJokeMessage();
    }
  }, [selectedCategory]);

  return (
    <>
      {message.length > 0 && (
        <div className="popup-box">
          <h1>{capitalizedCategory}</h1>
          <div className="box">
            <ClipLoader
              className="pt-10 pl-10"
              color={color}
              loading={loading}
              cssOverride={override}
              size={30}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
            <span className="close-icon" onClick={callbackFunction}>
              X
            </span>
            {loading === false && <p>"{message}"</p>}
            <Button className="mb-2" onClick={memoizedGetJokeMessage}>
              Next Joke
            </Button>
          </div>
        </div>
      )}
    </>
  );  
};
