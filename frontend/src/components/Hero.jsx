import React from "react";

const Hero = ({ title, imageUrl }) => {
  return (
    <>
      <div className="hero container">
        <div className="banner">
          <h1>{title}</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam eaque repellat animi unde laudantium nihil fuga quisquam, dignissimos optio, deserunt reiciendis, et deleniti quo. Doloribus alias necessitatibus nihil? Similique laboriosam repellat autem commodi aut obcaecati ex officiis ipsum aspernatur suscipit beatae voluptas iusto rerum eius, assumenda minima accusantium officia rem?
          </p>
        </div>
        <div className="banner">
          <img src={imageUrl} alt="hero" className="animated-image" />
          <span>
            <img src="/Vector.png" alt="vector" />
          </span>
        </div>
      </div>
    </>
  );
};

export default Hero;
