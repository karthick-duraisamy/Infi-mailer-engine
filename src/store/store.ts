import { configureStore } from "@reduxjs/toolkit";
import InboxService from "../service/service";
import filterReducer from "./filterSlice";

// ✅ Export reducer in reusable format for host apps
export const inboxServiceReducer = {
  [InboxService.reducerPath]: InboxService.reducer,
  filters: filterReducer,
};

// ✅ Export middleware as reusable function
export const inboxServiceMiddleware = (getDefaultMiddleware: any) =>
  getDefaultMiddleware().concat(InboxService.middleware);

// ✅ (Optional) export store for local dev only (not needed in consumer app)
export const store = configureStore({
  reducer: {
    ...inboxServiceReducer,
  },
  middleware: inboxServiceMiddleware,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// ✅ Export service and hooks if needed in consuming app
export { InboxService };
