import React from "react";

const TeamCard = ({ user, setMemberToEdit }) => {
  return (
    <div>
      <h1>{user.name}</h1>
      <p>
        <p>Email:</p> {user.email}
      </p>
      <p>
        <p>Role:</p> {user.role}
      </p>
      <button onClick={() => setMemberToEdit(user)}>Edit</button>
    </div>
  );
};

export default TeamCard;