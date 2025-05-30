import { configureStore } from '@reduxjs/toolkit';

import landingPageReducer from '../main_content/LandingPageSlicer.jsx';

const store = configureStore({
    reducer: {
        landingPage: landingPageReducer,
    },
});

export default store;