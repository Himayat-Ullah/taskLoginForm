import { createSlice } from "@reduxjs/toolkit";

const toggleSlice = createSlice({
  name: "toggle",
  initialState: { isOn: false },
  reducers: {
    toggle: (state) => {
      state.isOn = !state.isOn;
    },
  },
});

export const { toggle } = toggleSlice.actions;
export default toggleSlice.reducer;
