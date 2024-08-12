import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../client";
import "../App.css";
const EditCreator = ({ data }) => {
  const { id } = useParams();
  const creator = data.filter((item) => item.id === id)[0];

  const [updatedCreator, setUpdatedCreator] = useState(creator);

  const updateCreator = async (event) => {
    event.preventDefault();
    await supabase.from("Creators").update(updatedCreator).eq("id", id);

    window.location = "../../";
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUpdatedCreator((prevCreator) => ({
      ...prevCreator,
      [name]: value,
    }));
  };

  const deleteCreator = async (event) => {
    event.preventDefault();
    await supabase.from("Creators").delete().eq("id", id);

    window.location = "../../";
  };

  return (
    <div className="makeCreator">
      <form onSubmit={updateCreator}>
        <label htmlFor="name">Creator Name</label> <br />
        <input type="text" id="name" name="name" onChange={handleChange} />
        <br />
        <label htmlFor="url">Creator's URL to social</label> <br />
        <input type="text" id="url" name="url" onChange={handleChange} /> <br />
        <label htmlFor="description">Describe the creator!</label> <br />
        <input
          type="text"
          id="description"
          name="description"
          onChange={handleChange}
        />
        <br />
        <label htmlFor="imageURL">Link to Pic of This Creator</label> <br />
        <input
          type="text"
          id="imageURL"
          name="imageURL"
          onChange={handleChange}
        />
        <br />
        <input type="submit" value="Submit" />
        <br />
        <br />
        <button onClick={deleteCreator}>Delete Creator</button>
      </form>
    </div>
  );
};

export default EditCreator;
