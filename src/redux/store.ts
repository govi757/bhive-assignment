import { configureStore } from '@reduxjs/toolkit';
import workspaceReducer from './features/workspaces/workSpaceSlice';
import { useDispatch, useSelector, type TypedUseSelectorHook } from 'react-redux';
//import counterReducer from './features/counter/counterSlice'; //Example

export const store = configureStore({
    reducer: {
        worspace: workspaceReducer, // Add reducers here
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState; comments: CommentsState; users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
