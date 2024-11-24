// toolbar.js

import { DraggableNode } from "./draggableNode";
import { LuFileOutput, LuFileInput, LuText, LuServer } from "react-icons/lu";
import { SubmitButton } from "./submit";

export const PipelineToolbar = () => {
  return (
    <div className="px-10  py-4 flex justify-between items-center">
      <div className="flex gap-4">
        <DraggableNode type="customInput" label="Input" Icon={LuFileInput} />
        <DraggableNode type="llm" label="LLM" Icon={LuServer} />
        <DraggableNode type="customOutput" label="Output" Icon={LuFileOutput} />
        <DraggableNode type="text" label="Text" Icon={LuText} />
      </div>
      <div className="flex">
        <SubmitButton />
      </div>
    </div>
  );
};
