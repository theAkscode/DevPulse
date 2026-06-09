import React, { Component } from 'react';
import StatsBadge from './StatsBadge';

function UserCard({name, bio, followers, following, repos}) {
 return (
    <div className="card">
    <h2> {name} </h2>
    <p> {bio} </p>
  <div> 
    <StatsBadge label="Followers" value={followers} />
    <StatsBadge label="Following" value={following} />
    <StatsBadge label="Repositories" value={repos} />
  </div>
  </div>

 )


}
export default UserCard