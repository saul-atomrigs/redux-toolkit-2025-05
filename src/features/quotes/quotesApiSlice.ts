// Need to use the React-specific entry point to import `createApi`
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

type Quote = {
  id: number
  quote: string
  author: string
}

type QuotesApiResponse = {
  quotes: Quote[]
  total: number
  skip: number
  limit: number
}

// QuotesService
export const quotesApiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/quotes" }),
  reducerPath: "quotesApi",
  tagTypes: ["Quotes"],
  endpoints: build => ({
    getQuotes: build.query<QuotesApiResponse, number>({
      query: (limit = 10) => `?limit=${limit.toString()}`,
    }),
  }),
})

// auto-generated hook:
export const { useGetQuotesQuery } = quotesApiSlice
