import React from "react";
import "../styles/CreatorCardStyles.css";
import { Link } from "react-router-dom";
const CreatorCard = (props) => {
  return (
    <div className="card">
      <div>
        <Link to={"edit/" + props.id}>Edit</Link>
      </div>
      <Link to={`/creatorDetails/${props.id}`} key={props.id}>
        {props.name}
      </Link>
      <p>{props.url}</p>
      <img src={props.imageURL}></img>
      <p>{props.description}</p>
    </div>
  );
};
export default CreatorCard;
