// submit.js

import { useState } from "react";
import { usePostPipeline } from "./api/PipelineApi";
import usePipelineStore from "./hooks/frontend/src/hooks/provider/usePipelineStore";
import MultiAlert from "./components/MultiAlert/MutliAlert";

export const SubmitButton = () => {
  const { nodes, edges } = usePipelineStore();
  const { data, mutateAsync } = usePostPipeline();
  const [showAlert, setShowAlert] = useState(false);
  const [isError, setIsError] = useState(false);
  const handleSubmit = async () => {
    try {
      await mutateAsync({
        pipeline: JSON.stringify({
          nodes: nodes,
          edges: edges,
        }),
      });
      setShowAlert(true);
    } catch (error) {
      setIsError(true);
    }
  };
  return (
    <div className="px-8 flex items-center justify-center">
      {/* {loading && <Loader />} */}
      {showAlert && (
        <MultiAlert
          data={data}
          isError={isError}
          onClose={() => {
            setShowAlert(false);
            setIsError(false);
          }}
        />
      )}
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
