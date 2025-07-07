import InboxService from "./service";

const service = InboxService.enhanceEndpoints({
  addTagTypes: ["demo"],
}).injectEndpoints({
  // Define a expected endpoints
  endpoints: (builder: any) => ({
    getMailListResponse: builder.query({
      // query: () => `/mail-server/?project=${localStorage.getItem("project")}&page=1&page_size=100`, // dynamic project ID
      query: (param: any) => ({
        url: `/mail-server/?project=${localStorage.getItem("project")}`,
        method: "GET",
        params: param,
      }),
    }),
    getConvoResponse: builder.query({
      query: () => "staticResponse/convoResponse.json",
    }),
    getConversationDetails: builder.query({
      query: (param: any) =>
        `/mail-server/${param.id}/?project=${localStorage.getItem("project")}`,
    }),
    getAIReplyResponse: builder.mutation({
      query: (body: any) => ({
        url: `/mail-server/ai-replay/`,
        method: 'POST',
        body
      }),
      invalidatesTags: ['mailer']
    }),
    getSettings: builder.query({
      query: (param : any) => ({
        url: `/setting/?ordering=-setting&nolimit=Y&project=${localStorage.getItem("project")}`,
        method: 'GET'
      }),
    }),
    sentMail: builder.mutation({
      query: (body: any) => ({
        url: `/mail-sent/`,
        method: 'POST',
        body
      }),
      invalidatesTags: ['mailer']
    }),
    getTemplate: builder.query({
      query: () => `/template/107/?folder=17`
    }),
  })
  
});

export const {
  useLazyGetMailListResponseQuery,
  useLazyGetConvoResponseQuery,
  useLazyGetConversationDetailsQuery,
  useGetAIReplyResponseMutation,
  useLazyGetSettingsQuery,
  useSentMailMutation,
  useLazyGetTemplateQuery,
} = service;
