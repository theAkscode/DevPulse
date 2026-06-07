import React, { Component } from 'react';

function UserCard({name, bio, followers, following, repos}) {
 return (
    <div className="card">
    <h2> {name} </h2>
    <p> {bio} </p>
  <div> 
<span> Followers: {followers}</span>
<span> Following: {following}</span>
<span> Repositories: {repos}</span>
  </div>
  </div>

 )


}
export default UserCard