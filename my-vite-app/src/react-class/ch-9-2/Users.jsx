import React from "react";

// users should be array

function Users({users}) {
  
  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user}>{user}</li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
