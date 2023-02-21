import React from "react";
import Articles from "./master/Articles";

const Home = () => {
  return (
    <>
      <section className="hero">
        <img src="image 2.png" alt="logo" className="hero__image" />
      </section>
      <section className="lines">
        <p className="words">
          A few words about this blog platform, Ghost, and how this site was
          made
        </p>
        <p className="question">
          Why Ghost (& Figma) instead of Medium, WordPress or other options?
        </p>
      </section>
      <hr />
      <Articles
        title="All articles"
        arr={[8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]}
      />
    </>
  );
};

export default Home;
