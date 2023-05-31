import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Myuser = () => {
  const [newuser, setNewUser] = useState("");
  const [username, setUsername] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const dispatch = useDispatch();
  const save = () => {
    const dispatchData = {
      fullname: newuser,
      type: "adduser"
    };
    dispatch(dispatchData);
    setNewUser("");
    setShowPopup(false);
  };

  const deleteuser = (index) => {
    const dispatchData = {
      userindex: index,
      type: "removeuser"
    };
    dispatch(dispatchData);
  };

  const alluser = useSelector((state) => state.Userlist);

  const handleAddTask = () => {
    setShowPopup(true);
  };


  return (
    <section className="container mt-5">
      <div className="row">
        <div className="col-lg-12 text-center mb-5">
          <h1> TO DO LIST : {alluser.length} </h1>
          <div className="col-lg-8">
            <div className="row">
              <div className="col-lg-4 text-center" style={{ margin: "0 auto" }}>
                <button className="btn btn-primary" onClick={handleAddTask}>
                  Add Task
                </button>
              </div>
            </div>
          </div>
          <p>
            <input
              type="text"
              className="m-3"
              onChange={(e) => setNewUser(e.target.value)}
              value={newuser}
              placeholder="Enter Full Name"
            />
            <input
              type="text"
              className="m-3"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              placeholder="Enter Username"
            />
            <button className="btn btn-primary" onClick={save}>
              Save User
            </button>
          </p>
        </div>
  
        {alluser.map((name, index) => {
          return (
            <div className="col-lg-3 mb-4 text-center" key={index}>
              <div className="bg-info text-white p-4 shadow rounded">
                <p>{name.fullname}</p>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => deleteuser(index)}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
  
      {/* Popup */}
      {showPopup && (
        <div
          className="popup"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 999,
            backgroundColor: "rgba(0, 0, 0, 0)",
          }}
        >
          <form
            onSubmit={save}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              padding: "20px",
              backgroundColor: "#fff",
              borderRadius: "5px",
              marginTop: "140px",
              boxShadow: "9px",
              backgroundColor: "#ffffff",
            }}
          >
            <h2>Add Task</h2>
            <input
              type="text"
              className="m-3"
              onChange={(e) => setNewUser(e.target.value)}
              value={newuser}
              placeholder="Enter Full Name"
            />
            <input
              type="text"
              className="m-3"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              placeholder="Enter Username"
            />
            <button type="submit" className="btn btn-primary">
              Save Task
            </button>
            <button className="btn btn-danger" onClick={() => setShowPopup(false)}>
              Cancel
            </button>
          </form>
        </div>
      )}
    </section>
  );
  
};

export default Myuser;
