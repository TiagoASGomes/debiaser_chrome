import { REACT_APP_API_URL } from "../../env";

const URL = REACT_APP_API_URL;

export const FetchFunction = async (userPrompt: any) => {
  console.log(URL);
  const response = await fetch(`${URL}v1/guest`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      text: userPrompt,
    }),
  });
  console.log(response);
  if (response.status === 401) {
    alert("Unauthorized");
    return;
  }
  if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
  const data = await response.json();
  console.log(data);
  return data;

  // return response.json();
};

export const FetchFunctionWithId = async (userPrompt: any, token: any) => {
  const response = await fetch(`${URL}v1/user`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      text: userPrompt,
    }),
  });
  if (response.status === 401) {
    alert("Unauthorized");
    return;
  }
  if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
  return response.json();
};

export const updateQueryRating = async (
  token: any,
  queryId: any,
  rating: any
) => {
  const response = await fetch(`${URL}v1/query/rating`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      queryId: queryId,
      rating: rating,
    }),
  });
  if (response.status === 401) {
    alert("Unauthorized");
    return;
  }
  if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
  return response.json();
};
