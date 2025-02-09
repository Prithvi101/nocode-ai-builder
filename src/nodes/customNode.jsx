import { useState } from "react";
import BaseNode from "../components/BaseNode/BaseNode";
import InputField from "../components/InputField/InputField";
import { MdOutlineInput } from "react-icons/md";
import { Position } from "reactflow";

export function CustomNode({ id, data, selected }) {
  const [name, setName] = useState("");
  return (
    <BaseNode selected={selected}>
      <BaseNode.TitleBar data={data} Icon={MdOutlineInput}>
        Text
      </BaseNode.TitleBar>
      <InputField
        id={id}
        label={"Name"}
        value={name}
        onChange={setName}
      ></InputField>

      <BaseNode.Handle
        type="source"
        position={Position.Right}
        id={`${id}-prompt`}
      />
    </BaseNode>
  );
}
