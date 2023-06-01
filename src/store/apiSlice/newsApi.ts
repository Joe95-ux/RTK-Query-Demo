import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const generateQueryStr = (baseString: string, query: Object): string => {
    const queryString: string =
      baseString +
      Object.entries(query)
        .map(([key, value]) => `${key}=${value}`)
        .join("&");
  
    return queryString;
  };
  

// API endpoint for fetching data
export const newsApi = createApi({
  reducerPath: "newsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://newsapi.org/v2/`
  }),

  endpoints: (builder) => ({     // <Type of data the call will return, Type of parameter being passed to the query function>
    getAllNews: builder.query<any, object>({
      query: (queryParams) => {
        const queryStr = generateQueryStr("everything?", queryParams);
        return {url: queryStr}
      },
    }),
  }),
});

export const { useGetAllNewsQuery } = newsApi;