import { landingPageApi } from "@/services/landingPageServices";
import { projectApi } from "@/services/projectServices";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    [landingPageApi.reducerPath]: landingPageApi.reducer,
    [projectApi.reducerPath]: projectApi.reducer,
  },
  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare().concat(
      landingPageApi.middleware,
      projectApi.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
