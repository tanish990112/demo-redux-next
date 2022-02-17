import { createSlice } from "@reduxjs/toolkit";
const notificationSlice = createSlice({
  name: "notification",
  initialState: {
    value: {
      notiCount: 0,
    },
  },
  reducers: {
    recieveNoti: (state, action) => {
      state.value.notiCount += 1;
    },
    readNoti: (state) => {
      if (state.value.notiCount != 0) state.value.notiCount -= 1;
    },
  },
});

export const { recieveNoti, readNoti } = notificationSlice.actions;

export default notificationSlice.reducer;
