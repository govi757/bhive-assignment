import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchWorkspaceList, type Workspace } from '../../../api/workspaceApis';


interface WorkspaceState {
    workspaceList: Workspace[] ;
    workspaceListStatus: 'idle' | 'loading' | 'succeeded' | 'failed';
    workspaceListError: string | null;
}

const initialState: WorkspaceState = {
    workspaceList: [],
    workspaceListStatus: 'idle',
    workspaceListError: null,
  };

  export const getWorkSpaceList = createAsyncThunk<Workspace[]>(
    "workspace/getWorkSpaceList",
    async (_,{rejectWithValue}) => {
        try {
            const response: any = await fetchWorkspaceList();
            return response.data;
          } catch (err: any) {
            return rejectWithValue(err.response?.data?.message || 'Unexpected error');
          }
    }
  )

  const workSpaceSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(getWorkSpaceList.pending, (state) => {
          state.workspaceListStatus = 'loading';
          state.workspaceListError = null;
        })
        .addCase(getWorkSpaceList.fulfilled, (state, action) => {
          state.workspaceListStatus = 'succeeded';
          state.workspaceList = action.payload;
        })
        .addCase(getWorkSpaceList.rejected, (state, action) => {
          state.workspaceListStatus = 'failed';
          state.workspaceListError = action.payload as string;
        });
    },
  });

  export default workSpaceSlice.reducer;
