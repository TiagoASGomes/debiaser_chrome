import React, { useEffect, useState } from "react";
import Button from "../../components/button";
import InputField from "../../components/inputField";
import Intro from "../../components/intro";
import Loading from "../../components/loading";
import Results from "../../components/results";
import Service from "../../services";
import "./style.css";

const Home = () => {
  const [userPrompt, setUserPrompt] = useState("");
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [queryId, setQueryId] = useState(null);
  const selectedEngine = "Google";
  const { GetResponsesFromLLM, ratingUpdate } = Service();

  const onInputTextChange = (e: any) => {
    setUserPrompt(e);
  };

  useEffect(() => {
    const response = localStorage.getItem("response");
    if (response) {
      setData(JSON.parse(response));
    }
  }, []);

  const onDebiasQueryButtonClick = async () => {
    setIsLoading(true);
    const response = await GetResponsesFromLLM(userPrompt);
    setData(response.response);
    localStorage.setItem("response", JSON.stringify(response.response));
    setQueryId(response.response.queryId);
    setIsLoading(false);
  };

  const handleRatingChange = async (rating: any) => {
    ratingUpdate(queryId, rating);
  };

  return (
    <div className="container-fluid">
      <Intro />
      <div className="search2">
        <InputField
          onInputTextChange={onInputTextChange}
          onClickHandler={onDebiasQueryButtonClick}
        >
          <Button onClickHandler={onDebiasQueryButtonClick} />
        </InputField>
      </div>
      <br />

      <br />
      {isLoading ? (
        <Loading />
      ) : (
        <Results
          data={data}
          selectedEngine={selectedEngine}
          handleRatingChange={handleRatingChange}
        />
      )}
    </div>
  );
};

export default Home;
