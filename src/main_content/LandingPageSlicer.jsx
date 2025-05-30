import { createSlice } from '@reduxjs/toolkit';

const landingPageSlicer = createSlice({
    name: 'landingPage',
    initialState: {
        scrollY: 0
    },
    reducers: {
        setScrollY: (state, action) => {
            state.scrollY = action.payload;
        }
    }
});

export const {setScrollY} = landingPageSlicer.actions;

export default landingPageSlicer.reducer;