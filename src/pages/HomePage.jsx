import {useState }  from "react";
import UserCard from "../components/UserCard" 


export default function HomePage() {
  // const user = {
  //   name: "Akshatha Swamy", bio: "MCA student | building things",
  // followers: 12,
  // following: 30,
  // repos: 8
  // }         // hardvcoded userData

  const [username, setUsername] = useState(''); // tracks live input typing
  const [submittedUser, setSubmittedUser] = useState(null); // locked in on Search click

  // function to handleSearch
  function handleSearch() {
    if(username.trim() === '') return; // do nothing if input is empty
    setSubmittedUser(username);  //lock in the searched Username
  }
   const user = {
    name: "Akshatha Swamy", bio: "MCA student | building things",
  followers: 12,
  following: 30,
  repos: 8
  }    // hardcoded userData for now, can be replaced with API call using submittedUser
   
   return(
   <div>
    {/* Step 4: controlled input , react owns this value*/}
    <input 
      type="text"
      value={username} //react controlls what's shown in the input
      onChange={e => setUsername(e.target.value)} // update state on every keystroke
      placeholder="Enter GitHub username"
    />
    {/* Step 5: handle search click */}
    <button onClick={handleSearch}>Search</button>

     {/* Step 6: display user card
     <p>Searching for: {submittedUser}</p> */}
    <UserCard
      name={user.name}
      bio={user.bio}
      followers={user.followers}
        following={user.following}
        repos={user.repos}
      />
    </div>
  );
}
