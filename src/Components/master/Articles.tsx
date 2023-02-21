import React from "react";

const Articles = ({
  title,
  arr,
  myclass,
}: {
  title: string;
  arr: number[];
  myclass?: string;
}) => {
  return (
    <section
      className={`allarticles ${myclass ? "allarticles--" + myclass : ""}`}
    >
      <h1>{title}</h1>
      <div className="cardsgroup">
        {arr.map((x, i) => (
          <div className="card">
            <img
              className="card__image"
              src={`Rectangle ${8 + i}.png`}
              alt={`Rectangle ${i}.png`}
            />
            <div className="card__body">
              <p className="card__description">
                Connecting artificial intelligence with digital product design
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Articles;
