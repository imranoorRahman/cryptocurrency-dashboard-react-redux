import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
    'x-rapidapi-host': process.env.RAPIDAPI_HOST,
    'x-rapidapi-key': process.env.RAPIDAPI_KEY
};

const createRequest = (url) => ({url, headers: cryptoApiHeaders});

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl: process.env.CRYPTO_API_URL}),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: () => createRequest('/coins')
        })
    })
});

export const{
    useGetCryptosQuery,
} = cryptoApi;