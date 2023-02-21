import React from "react";
import Articles from "./master/Articles";

const ArticlePage = () => {
  return (
    <>
      <section className="lines">
        <p className="words">
          A few words about this blog platform, Ghost, and how this site was
          made
        </p>
        <p className="question">
          Why Ghost (& Figma) instead of Medium, WordPress or other options?
        </p>
      </section>
      <section className="hero hero--article">
        <img src="image 2 (1).png" alt="logo" className="hero__image1" />
      </section>
      <hr />
      <section className="blog">
        <div className="blog__details">
          <div className="blog__header">
            <div className="blog__user">
              <img src="image 3.png" alt="image3" />
              <div className="user__details">
                <p className="user__name">MIKA MATIKAINEN</p>
                <p className="user__blogtime">Apr 15, 2020 · 4 min read</p>
                <p></p>
              </div>
            </div>
            <div className="blog__media">
              <button className="media__button">
                <img src="fb.png" alt="facebook" className="media__image" />
              </button>
              <button className="media__button">
                <img src="tw.png" alt="twitter" className="media__image" />
              </button>
            </div>
          </div>
          <div className="blog__body">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu
              velit tempus erat egestas efficitur. In hac habitasse platea
              dictumst. Fusce a nunc eget ligula suscipit finibus. Aenean
              pharetra quis lacus at viverra.
              <br></br>
              <br></br>
              Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos. Aliquam quis posuere ligula. In eu
              dui molestie, molestie lectus eu, semper lectus.{" "}
            </p>

            <h2 className="blog__title">Next on the pipeline</h2>
            <p>
              Duis eu velit tempus erat egestas efficitur. In hac habitasse
              platea dictumst. Fusce a nunc eget ligula suscipit finibus. Aenean
              pharetra quis lacus at viverra. Class aptent taciti sociosqu ad
              litora torquent per conubia nostra, per inceptos himenaeos.
              <br></br>
              <br></br>
              Morbi efficitur auctor metus, id mollis lorem pellentesque id.
              Nullam posuere maximus dui et fringilla.
            </p>
          </div>
        </div>
      </section>
      <figure>
        <img src="Rectangle 8 (1).png" alt="Rectangle 8 (1).png" />
        <figcaption>
          Image caption centered this way and I’ll make this a bit longer{" "}
          <br></br>to indicate the amount of line-height.{" "}
        </figcaption>
      </figure>
      <section className="blog">
        <div className="blog__details">
          <div className="blog__body">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu
              velit tempus erat egestas efficitur. In hac habitasse platea
              dictumst. Fusce a nunc eget ligula suscipit finibus. Aenean
              pharetra quis lacus at viverra.
              <br></br>
              <br></br>
              Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos. Aliquam quis posuere ligula. In eu
              dui molestie, molestie lectus eu, semper lectus.{" "}
            </p>
            <br></br>
            <p>a list looks like this:</p>
            <ul>
              <li>First item in the list</li>
              <li>
                Second item in the list lorem ipsum dolor sit amet nunc felis
                dolor lorem ipsum sit amet
              </li>
              <li>Third item in the list</li>
            </ul>
            <br></br>
            <p>
              Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos. Aliquam quis posuere ligula.{" "}
            </p>
            <br></br>
            <p>Thanks for reading,</p>
            <p>Mika</p>
          </div>
        </div>
      </section>
      <section className="mediacard">
        <span>
          <img src="fb.png" alt="facebook" className="media__image" />
          Share on Facebook
        </span>
        <span>
          <img src="fb.png" alt="facebook" className="media__image" />
          Share on Facebook
        </span>
      </section>
      <section className="tags">
        <p>Tags:&nbsp;&nbsp;</p>
        <a href="#">product design</a>&nbsp;,&nbsp;<a href="#">culture</a>
      </section>
      <hr className="dottedhr" />
      <div className="blog__footer">
        <img src="image 3.png" alt="image3" />
        <div className="user__details">
          <p className="user__name">
            <span>MIKA MATIKAINEN</span> is a Design Founder & Advisor, Berlin
            School of Creative Leadership Executive MBA participant, Zippie
            advisor, Wolt co-founder, and Nordic Rose stakeholder.{" "}
          </p>

          <p></p>
        </div>
      </div>
      <div className="fulldivider">
        <hr />
        <img src="owl.png" alt="owl_png" className="owl_png" />
      </div>
      <Articles
        title="What to read next"
        myclass="three"
        arr={[8, 9, 10, 11, 12, 13]}
      />
      <section className="myform">
        <h4>Sign up for the newsletter</h4>
        <p>
          If you want relevant updates occasionally, sign up for the private
          newsletter. Your email is never shared.{" "}
        </p>
        <div className="inputForm">
          <div className="inputForm__input">
            <input
              type="text"
              defaultValue="Enter your email..."
              placeholder="Enter your email..."
            />
          </div>
          <button>SIGN UP</button>
        </div>
      </section>
    </>
  );
};

export default ArticlePage;
