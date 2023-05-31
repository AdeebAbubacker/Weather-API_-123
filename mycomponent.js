import React, { useState } from 'react';


const Newcomponent = () => {
  const [buttonState, setButtonState] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handleClick = () => {
    setShowPopup(true);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setButtonState(true);
    setShowPopup(false);
  };

  return (
    <div>
        <h1>TO DO LIST</h1>
      <button onClick={handleClick} className="btn btn-info">
        Click Me
      </button>
      {showPopup && (
        <div className="popup">
          <form onSubmit={handleFormSubmit}>
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      )}
      {buttonState && <p>{inputValue}</p>}
    </div>
  );
};

export default Newcomponent;
