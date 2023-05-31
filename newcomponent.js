
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';


const Newcomponent = () => {
  const [buttonState, setButtonState] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [submittedValues, setSubmittedValues] = useState([]);
  const dispatch = useDispatch();

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
  
    const updatedSubmittedValues = [...submittedValues, inputValue];
    setSubmittedValues(updatedSubmittedValues);
  
    const userinfo = {
      mydata: updatedSubmittedValues,
      type: 'adduser',
    };
    dispatch(userinfo);
  
    setTimeout(() => {
      setInputValue('');
      setSubmittedValues(' ');
    }, 0);
  };
  
  
  const alluser = useSelector((state) => state.Userlist);

  return (
    <div>
      <h1 className="text-center">TO DO LIST</h1>
      <br />
      <div className="container">
        <div className="col-lg-8" style={{ margin: '0 auto' }}>
          <div style={{ position: 'relative' }}>
            <button onClick={handleClick} className="btn btn-info">
              Add Task
            </button>

            {/* popup section... */}
            {showPopup && (
              <div className="popup"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  zIndex: 999,
                  backgroundColor: 'rgba(0, 0, 0, 0)',
                }}>

                <form onSubmit={handleFormSubmit}
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    padding: '20px',
                    backgroundColor: '#fff',
                    borderRadius: '5px',
                    marginTop:"140px",
                    boxShadow:"9px",
                    backgroundColor: "#dee2e6"
                  }}>

                  <h4>Add TO DO</h4>
                  <p>Title</p>
                  <input type="text" value={inputValue} onChange={handleInputChange} className="form-control"
                    style={{ width: '550px' }}/>
                  <br />
                  <button type="submit" className="btn btn-primary me-4">
                    Add Task
                  </button>
                  <button className="btn btn-danger ml-4" onClick={() => setShowPopup(false)}>
                    Cancel
                  </button>
                </form>
              </div>
            )}
          </div>

          <div>
            {alluser.map((value, index) => (
              <p
                key={index}
                style={{
                  backgroundColor: '#bcb0b0',
                  borderRadius: '5px',
                  margin: '20px',
                  zIndex: 1,
                  height:"33px"
                }}
              >
                {value.fullname}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newcomponent;