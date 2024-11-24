import { baseApi } from "./BaseApi";
import { useMutation, useQuery } from "@tanstack/react-query";

/* Custom hook to post  the nodes
and edges of the pipeline */
export const usePostPipeline = () => {
  return useMutation({
    mutationKey: ["post-pipeline"],
    mutationFn: async (params) => {
      // Convert params to FormData
      const formData = new FormData();
      formData.append("pipeline", params.pipeline);
      const response = await baseApi.post("/pipelines/parse", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response?.data;
    },
  });
};

export const useGetRoot = () => {
  return useQuery({
    queryKey: ["post-pipeline"],
    queryFn: async (params) => {
      const response = await baseApi.get("/", params);
      console.log(response.data);
      return response?.data;
    },
  });
};
