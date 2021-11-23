import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
    'x-bingapis-sdk': 'true',
    'x-rapidapi-host': process.env.REACT_APP_RAPIDAPI_NEWS_HOST,
    'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY
};

const createRequest = (url) => ({url, headers: cryptoApiHeaders});

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({baseUrl: process.env.REACT_APP_RAPIDAPI_NEWS_URL}),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: ({newsCategory, count}) => createRequest(`search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`)
        })
    })
});

export const{
    useGetCryptoNewsQuery,
} = cryptoNewsApi;