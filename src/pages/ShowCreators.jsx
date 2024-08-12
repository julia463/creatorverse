import { useState, useEffect } from "react";
import React from "react";
import { supabase } from "../client";
import CreatorCard from "../components/CreatorCard";
const ShowCreators = (props) => {
  const { data: creators } = props;
  const [results, setResults] = useState([]);

  useEffect(() => {
    setResults(creators);
  }, [creators]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data, error } = await supabase.from("Creators").select();
        setResults(creators);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  });

  return (
    <div className="creatorsList">
      {creators && creators.length > 0 ? (
        creators.map((creator) => (
          <CreatorCard
            id={creator.id}
            name={creator.name}
            url={creator.url}
            description={creator.description}
            imageURL={creator.imageURL}
          />
        ))
      ) : (
        <p>There aren't any creators yet- go ahead and add your favorites!</p>
      )}
    </div>
  );
};
export default ShowCreators;
