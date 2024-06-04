import "./style.css";

const Intro = () => {
  return (
    <div className="intro">
      <div className="title2">
        <a
          href="https://debiaser.com/"
          target="_blank"
          rel="noreferrer noopener"
          style={{ textDecoration: "none" }}
        >
          <h1>Debiaser</h1>
        </a>
        <small className="fs-8">v1.0 beta</small>
      </div>

      <p>
        A tool that leverages AI to remove natural bias from your search engine
        queries.
      </p>
      <p>Go ahead, give it a try!</p>
    </div>
  );
};

export default Intro;
