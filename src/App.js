import React, { useState } from "react";
import "./App.css";

import Team from "./Components/Team";
import TeamCard from "./Components/TeamCard";

import  { TeamDetails }  from "./Components/Data";

const App = () => {
  const [list, setList] = useState([...TeamDetails]);
  const [memberToEdit, setMemberToEdit] = useState(null);

  const editMember = member => {
    const editIndex = list.indexOf(memberToEdit);
    // Updates the list with the newly edited object
    setList(list.map((user, index) => (index === editIndex ? member : user)));
  };

  return (
    <div>
      <Team
        list={list}
        setList={setList}
        memberToEdit={memberToEdit}
        setMemberToEdit={setMemberToEdit}
        editMember={editMember}
      />
      {list.map((user, index) => {
        return (
          <TeamCard key={index} user={user} setMemberToEdit={setMemberToEdit} />
        );
      })}
    </div>
  );
};

export default App;
