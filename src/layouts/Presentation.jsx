import React from "react";
import Tag from "../components/Tag";
import Rating from "../components/Rating";
import Host from "../components/Host";

const Presentation = ({ title, location, tags, rating, host }) => {
  return (
    <section>
      <div>
        <h1>{title}</h1>
        <h2>{location}</h2>
        <div>
          {tags.map((tag, index) => {
            return <Tag key={index} tag={tag} />;
          })}
        </div>
      </div>
      <div>
        <Host name={host.name} imgUrl={host.picture} />
        <Rating rating={rating} />
      </div>
    </section>
  );
};

export default Presentation;
