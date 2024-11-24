import React from "react";
import { LuCheck, LuX } from "react-icons/lu";

const MultiAlert = ({ data, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-white border-2 border-gray-200 shadow-2xl rounded-2xl w-full max-w-md text-gray-800 font-sans relative animate-fade-in">
        <div className="border-b border-gray-200 p-4 px-10 flex justify-between items-center">
          {/* Title */}
          <p className="text-2xl font-bold text-center tracking-wide text-gray-800">
            Pipeline Analysis
          </p>
          {/* Close Icon */}
          <button
            className="text-gray-500 hover:text-gray-800 transition-transform transform hover:scale-110"
            onClick={onClose}
          >
            ✕
          </button>
        </div>

        <div className="p-4">
          {/* Data Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <LuCheck className="w-6 h-6 text-green-500" />
              <span className="text-sm font-semibold">
                Number of nodes{"  "}
                <span className="font-bold text-green-500">
                  {data.num_nodes}
                </span>
              </span>
            </div>
            <div className="flex items-center gap-3">
              <LuCheck className="w-6 h-6 text-green-500" />
              <span className="text-sm font-semibold">
                Number of edges{" "}
                <span className="font-bold text-green-500">
                  {data.num_edges}
                </span>
              </span>
            </div>
            <div className="flex items-center gap-3">
              {data.is_dag ? (
                <LuCheck className="w-6 h-6 text-green-500" />
              ) : (
                <LuX className="w-6 h-6 text-red-500" />
              )}
              <span className="text-sm font-semibold">
                Is DAG{" "}
                <span
                  className={`font-bold ${
                    data.is_dag ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {data.is_dag ? "Yes" : "No"}
                </span>
              </span>
            </div>
          </div>

          {/* Close Button */}
          <div className="text-center mt-6">
            <button
              className="w-40 bg-primary text-white font-bold py-3 rounded-full shadow-lg hover:shadow-xl transition-transform duration-300 hover:scale-105"
              onClick={onClose}
            >
              Got It!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultiAlert;
