import React from "react";
import { useState } from "react";
import { supabase } from "../client";

const AddCreator = () => {
  const [creator, setCreator] = useState({
    name: "Default creator",
    url: "",
    description: "About your favorite content creator",
    imageURL: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCreator((prevCreator) => ({
      ...prevCreator,
      [name]: value,
    }));
  };

  const createCreator = async (event) => {
    event.preventDefault();
    console.log("reached");
    await supabase.from("Creators").insert([
      {
        name: creator.name,
        url: creator.url,
        description: creator.description,
        imageURL: creator.imageURL,
      },
    ]);
    window.location = "/";
  };

  return (
    <div className="makeCreator">
      <h2>Add a new content creator</h2>
      <form onSubmit={createCreator}>
        <label htmlFor="name">Creator Name</label> <br />
        <input type="text" id="name" name="name" onChange={handleChange} />{" "}
        <br />
        <label htmlFor="url">Creator's URL to social</label> <br />
        <input type="text" id="url" name="url" onChange={handleChange} /> <br />
        <label htmlFor="description">Describe the creator!</label> <br />
        <input
          type="text"
          id="description"
          name="description"
          onChange={handleChange}
        />{" "}
        <br />
        <label htmlFor="imageURL">Link to Pic of This Creator</label> <br />
        <input
          type="text"
          id="imageURL"
          name="imageURL"
          onChange={handleChange}
        />{" "}
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};
export default AddCreator;
