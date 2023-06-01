import {configureStore} from '@reduxjs/toolkit';
import { newsApi } from './apiSlice/newsApi';
import { NewsSlice } from './slice/newsSlice';


export const store =  configureStore({
    reducer:{
        news: NewsSlice.reducer,
        [newsApi.reducerPath]: newsApi.reducer,
        
    },
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([newsApi.middleware]),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;