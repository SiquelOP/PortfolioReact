import { useState, useEffect } from "react";

const Intro = () => {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight / 4) {
        setHidden(true);
      } else {
        setHidden(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div id="intro" className={hidden ? "hidden" : ""}>
      <h1>
        I am
        <br />
        Pablo
      </h1>
      <p>
        I enjoy providing entertainment for folks by developing video games.
        <br />
      </p>
      <ul className="actions">
        <li>
          <a
            href="#header"
            className="button icon solid solo fa-arrow-down scrolly"
          >
            Continue
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Intro;
