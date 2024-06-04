import React from "react";
import "./style.css";
import HoverRating from "../ratings";

const Results = ({ data, selectedEngine, handleRatingChange }: any) => {
  if (!data?.response || data?.response?.length === 0) {
    return null;
  }

  let searchUrl = `https://www.${selectedEngine}.com/search?q=`;

  const answers = data.response.split("\n");

  return (
    <div className="results">
      <h4>Give these queries a try!</h4>
      {answers.map((answer: any, index: any) => {
        answer = answer.replace(/^\d+\.\s*/, "");
        return (
          <div className="individual-result" key={index}>
            {answer}
            <button
              className="btn btn-success"
              onClick={() =>
                window.open(searchUrl + encodeURIComponent(answer), "_blank")
              }
            >
              Open in {selectedEngine}
            </button>
          </div>
        );
      })}
      <h4>How do you feel about these suggestions?</h4>
      <HoverRating handleRatingChange={handleRatingChange} />
      <br />
    </div>
  );
};

export default Results;
