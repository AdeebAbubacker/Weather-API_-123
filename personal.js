import React, { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';

function Personal() {
  const [username, setUsername] = useState('');
  const [usernamesList, setUsernamesList] = useState([]);
  let dispatch = useDispatch();

  const HandleSave = () => {
    setUsernamesList([...usernamesList, username]);
    setUsername('');
   

    let userinfo = {
      myname : usernamesList,
      type : "adduser"
    }
    dispatch(userinfo);
  };


  const Delete = (name) =>{
    let userinfo = {
      type : 'removeuser',
      name: name
    }
    dispatch(userinfo);
  }

  let alluser = useSelector(state => state.Userlist)

  return (
    <div>
      <input type="text" onChange={e => setUsername(e.target.value)} value={username} />
      <button onClick={HandleSave}>Save</button>
      {alluser.map(name => (
        <p key={name}>{name.fullname}
        <button onClick={Delete}>delete</button>
        </p>
      ))}
    </div>
  );
}

export default Personal;
