import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { decryptResponse } from "../utils/crypto";

// Define a service using a local base URL
const InboxService = createApi({
  reducerPath: "InboxService",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://notification.infinitisoftware.net/notificationapi/notification", // This allows you to access files in the public folder
    credentials: 'include',
    prepareHeaders: (headers) => {
      const user = decryptResponse(localStorage.getItem('user') as string);
      const iframe_token = sessionStorage.getItem('iframe_token');
      if (iframe_token) {
        iframe_token && headers.set('Authorization', `Bearer ${iframe_token}`);
      }
      if (user) {
        const token = JSON.parse(user)?.token;
        token && headers.set('X-XSRF-TOKEN', token);
      }
      return headers;
    }
  }),
  endpoints: () => ({
   
  }),
});

// export const { useGetLocalDataQuery } = InboxService;
export default InboxService;
