import React from "react";
import {
  IoCloseCircleOutline,
  IoInformationCircleOutline,
} from "react-icons/io5";
import { Handle } from "reactflow";

// Wrapper component for a custom node in React Flow
const BaseNode = ({ children, selected }) => (
  <div className={`container pb-4 ${selected ? "selected" : ""}`}>
    {children}
  </div>
);

// Sub-component for the node's title bar
BaseNode.TitleBar = ({ children, Icon, data }) => (
  <div className="flex justify-between text-lg w-full px-2 py-2">
    <div className="flex gap-3 items-center">
      {Icon && <Icon className="text-primary font-extrabold" />}
      <h4 className="text-primary font-extrabold">{children}</h4>
    </div>
    <div className="flex">
      {/* Info button */}
      <button onClick={() => console.log("Info clicked")} aria-label="Info">
        <IoInformationCircleOutline className="hover:bg-primary rounded-full hover:text-white" />
      </button>
      {/* Close button */}
      <button onClick={() => {}} aria-label="Close">
        <IoCloseCircleOutline className="hover:bg-primary rounded-full hover:text-white" />
      </button>
    </div>
  </div>
);

// Sub-component for creating React Flow handles
BaseNode.Handle = ({ type, position, id, style, children }) => (
  <Handle
    type={type}
    position={position}
    id={id}
    className="bg-purple-600 border-2 p-2 border-purple-700 rounded-full w-4 h-4 hover:bg-purple-700"
    style={{
      ...style,
      backgroundColor: "#8e78be",
    }}
  >
    <div className={`${id}-child -translate-x-20`}>{children}</div>
  </Handle>
);

// Sub-component for the main content of the node
BaseNode.Content = ({ children }) => (
  <div className="flex flex-col gap-2 w-full p-2">
    <div className="p-2 rounded-lg text-sm text-[#ACACAC] border-2">
      {children}
    </div>
  </div>
);

export default BaseNode;
