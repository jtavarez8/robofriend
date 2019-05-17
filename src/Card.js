import React from 'react';

const Card = ({ name, email, id }) => {
  return (
    <div className="tc bg-light-green dib br3 ma2 grow shadow-5 bw2">
      <img src={`https://robohash.org/${id}?size=200x200`} alt="robots" />

      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
