import { useAuth0 } from "@auth0/auth0-react";
import { FetchFunction, FetchFunctionWithId, updateQueryRating } from "../api";

const Service = () => {
  const { getAccessTokenSilently, isAuthenticated } = useAuth0();

  const GetResponsesFromLLM = async (userPrompt: any) => {
    if (isAuthenticated) {
      const token = await getAccessTokenSilently();
      const response = await FetchFunctionWithId(userPrompt, token);
      return response;
    }
    const response = await FetchFunction(userPrompt);
    return response;
  };

  const ratingUpdate = async (queryId: any, rating: any) => {
    const token = await getAccessTokenSilently();
    const response = await updateQueryRating(token, queryId, rating);
    return response;
  };

  return {
    GetResponsesFromLLM,
    ratingUpdate,
  };
};

export default Service;
