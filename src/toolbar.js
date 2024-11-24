// toolbar.js
import { DraggableNode } from "./draggableNode";
import { LuFileOutput, LuFileInput, LuText, LuServer } from "react-icons/lu";
import { SubmitButton } from "./submit";
import usePipelineStore from "./hooks/frontend/src/hooks/provider/usePipelineStore";
import { MdSave, MdTransform } from "react-icons/md";

export const PipelineToolbar = () => {
  return (
    <div className="px-10  py-4 flex justify-between items-center">
      <div className="flex gap-4">
        <DraggableNode type="customInput" label="Input" Icon={LuFileInput} />
        <DraggableNode type="llm" label="LLM" Icon={LuServer} />
        <DraggableNode type="customOutput" label="Output" Icon={LuFileOutput} />
        <DraggableNode type="text" label="Text" Icon={LuText} />
        <DraggableNode type="fileSave" label="Save" Icon={MdSave} />
        <DraggableNode type="transform" label="Transform" Icon={MdTransform} />
      </div>
      <div className=" flex  h-6 items-center cursor-pointer ">
        <img
          src="/logo.png"
          alt="vectorshift_logo"
          className="  aspect-square h-full "
        ></img>
        <p className="p-2  text-3xl font-bold text-grey">Vectorshift</p>
      </div>
      <div className="flex">
        <SubmitButton />
      </div>
    </div>
  );
};
