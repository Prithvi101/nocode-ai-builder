import { useState } from "react";
import BaseNode from "../components/BaseNode/BaseNode";
import InputField from "../components/InputField/InputField";
import { MdOutlineInput, MdTransform } from "react-icons/md";
import { Position } from "reactflow";

export function TransformNode({ id, data, selected }) {
  const [name, setName] = useState("");
  const [outputName, setoutputName] = useState("");

  return (
    <BaseNode selected={selected}>
      <BaseNode.TitleBar data={data} Icon={MdTransform}>
        Transform
      </BaseNode.TitleBar>
      <InputField
        id={id}
        label={"Input"}
        value={name}
        onChange={setName}
      ></InputField>
      <InputField
        id={id}
        label={"Output"}
        value={outputName}
        onChange={setoutputName}
      ></InputField>

      <BaseNode.Handle
        type="source"
        position={Position.Right}
        id={`${id}-prompt`}
      />
    </BaseNode>
  );
}
