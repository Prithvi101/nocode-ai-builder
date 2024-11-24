// submit.js

import { usePostPipeline } from "./api/PipelineApi";
import usePipelineStore from "./hooks/frontend/src/hooks/provider/usePipelineStore";

export const SubmitButton = () => {
  const { nodes, edges } = usePipelineStore();
  const { data, mutateAsync } = usePostPipeline();

  const handleSubmit = async () => {
    try {
      await mutateAsync({
        pipeline: JSON.stringify({
          nodes: nodes,
          edges: edges,
        }),
      });
    } catch (error) {
      // console.log(error);
    }
  };
  return (
    <div className="px-8 flex items-center justify-center">
      <button
        onClick={() => handleSubmit()}
        className="bg-primary hover:bg-purple-700 text-white font-extrabold px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
        type="submit"
      >
        Submit
      </button>
    </div>
  );
};
