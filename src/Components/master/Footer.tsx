import React from "react";
import Marquee from "react-fast-marquee";

const Footer = () => {
  return (
    <footer>
      <Marquee gradient={false}>
        <section className="foot__top">
          {[
            "Digital product design",
            "Remote work",
            "UX design",
            "Distributed teams",
            "Creativity",
            "Strategy",
            "Suspense",
            "Growth",
          ].map((x, i) => {
            if (i % 2 === 0) return <span className="foot__bold">{x}</span>;
            else return <span className="foot__normal">{x}</span>;
          })}
        </section>
      </Marquee>
      <section className="foot__bottom">
        <img src="NORDIC ROSE (1).png" className="foot__logo" alt="" />
        <p className="foot__declaration">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu velit
          tempus erat egestas efficitur. In hac habitasse platea dictumst. Fusce
          a nunc eget ligula suscipit finibus.{" "}
        </p>
        <div className="foot__link">
          <a href="#">Twitter</a>
          <a href="#">LinkdIn</a>
          <a href="#">RSS</a>
        </div>
        <p className="foot__rights">
          © 2012–2020 Nordic Rose Co. <br></br>
          All rights reserved.
        </p>
      </section>
    </footer>
  );
};

export default Footer;
