import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  collectionNames: [],
  projectName: "",
  response: "",
  loding: "idle",
  stage: "stage1",
  downloadBtnState: true,
  modalState: "hide",
};

const genratorX = createSlice({
  name: "genratorX",
  initialState,
  reducers: {
    handleStage: (state, { payload }) => {
      state.stage = payload;
    },
    handleCollectionNames: (state, { payload }) => {
      state.collectionNames = payload;
    },
    handleProjectName: (state, { payload }) => {
      state.projectName = payload;
    },
    handleResponse: (state, { payload }) => {
      state.response = payload;
    },
    handleLoding: (state, { payload }) => {
      state.loding = payload;
    },
    downloadBtnState: (state, { payload }) => {
      state.downloadBtnState = payload;
    },
    handleModalState: (state, { payload }) => {
      state.modalState = payload;
    },
    handleReset: (state) => {
      state.collectionNames = [];
      state.projectName = "";
      state.response = "";
      state.loding = "idle";
      state.stage = "stage1";
      state.downloadBtnState = true;
      state.modalState = "hide";
    },
  },
});

export const {
  handleStage,
  handleResponse,
  downloadBtnState,
  handleCollectionNames,
  handleProjectName,
  handleLoding,
  handleModalState,
  handleReset,
} = genratorX.actions;
export default genratorX.reducer;
