import { createReducer } from "@reduxjs/toolkit";
import type { ITag } from "@/@Types";
import actionAsyncFetchTags from "../middlewares/thunkFetchTags";

interface TagsStateApp {
  tags: ITag[];
}
const initialState: TagsStateApp = {
  tags: [],
};

const tagsReducer = createReducer(initialState, (builder) => {
  builder.addCase(actionAsyncFetchTags.fulfilled, (state, action) => {
    state.tags = action.payload;
  });
});

export default tagsReducer;
