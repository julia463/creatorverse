import React from "react";
import { Component, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../client";

const ViewCreator = () => {
  const { id: creatorId } = useParams();
  const [fullCreator, setFullCreator] = useState(null);

  useEffect(() => {
    const fetchCreator = async () => {
      try {
        if (creatorId) {
          const { data, error } = await supabase
            .from("Creators")
            .select()
            .eq("id", creatorId)
            .single();

          if (error) {
            console.error("error fetching post");
          } else {
            setFullCreator(data);
          }
        }
      } catch (error) {
        console.error("Error finding this creator ", error.message);
      }
    };
    fetchCreator();
  }, [creatorId]);

  if (!fullCreator) {
    return <h2>Creator not found :O </h2>;
  }

  //fetch creators
  return (
    <div>
      <h2>{fullCreator.name}</h2>
      <img src={fullCreator.imageURL} />
      <h5>{fullCreator.url}</h5>
      <p>{fullCreator.description}</p>
    </div>
  );
};
export default ViewCreator;
