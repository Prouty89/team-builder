import React, { useState, useEffect } from "react";

const Team = ({ list, setList, memberToEdit, setMemberToEdit, editMember }) => {
  const [member, setMember] = useState({ name: "", email: "", role: "" });

  useEffect(() => {
    /*
      Updates the inputs and populates it with the member data,
      after the edit button is clicked
    */
    if (memberToEdit) {
      setMember(memberToEdit);
    }
  }, [memberToEdit]);

  const handleChange = event => {
    const updatedMember = {
      ...member,
      [event.target.name]: event.target.value
    };
    setMember(updatedMember);
  };

  const handleSubmit = event => {
    event.preventDefault();
    // If editing, replace with edited object
    // and resets the editing state
    if (memberToEdit) {
      editMember(member);
      setMemberToEdit(null);
    } else if (
      // Checks to see if the inputs are empty before
      // adding the object to the list
      member.name !== "" &&
      member.email !== "" &&
      member.role !== ""
    ) {
      setList([...list, member]);
    }
    // "Clears" the input fields after submission
    setMember({ name: "", email: "", role: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>{memberToEdit ? "Edit a Member" : "Add a Member"}</legend>
        <label htmlFor="name">
          Name:{" "}
          <input
            type="text"
            name="name"
            placeholder="Enter name"
            value={member.name}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="email">
          E-mail:{" "}
          <input
            type="email"
            name="email"
            placeholder="Enter e-mail"
            value={member.email}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="role">
          Choose a role:{" "}
          <input
            list="role"
            name="role"
            placeholder="Choose a role"
            value={member.role}
            onChange={handleChange}
          />
          <datalist id="role">
            <option value="Web UI Developer" />
            <option value="Front End Developer" />
            <option value="Backend Developer" />
            <option value="iOS Developer" />
            <option value="Data Engineer" />
            <option value="UX Designer" />
          </datalist>
        </label>
        <input type="submit" value="Submit" />
      </fieldset>
    </form>
  );
};

export default Team;