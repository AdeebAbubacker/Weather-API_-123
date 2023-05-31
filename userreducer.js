const Userlist = (state = [], action) => {
    let mydata = Object.assign([], state); // Create a copy of the state array
  
    if (action.type === "adduser") {
      mydata.push({
        fullname: action.mydata
       
      }); // Add a new object with fullname and myusername properties to the array
    }
  
    if (action.type === "removeuser") {
      mydata.splice(action.userindex, 1); // Remove an element from the array at a specific index
    }
  
    return mydata; // Return the updated state array
  };
  
  export default Userlist;
  