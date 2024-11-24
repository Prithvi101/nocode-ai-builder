import { useState } from "react";
import BaseNode from "../components/BaseNode/BaseNode";
import InputField from "../components/InputField/InputField";
import { MdSave } from "react-icons/md";
import { Position } from "reactflow";

export function FileSave({ id, data, selected }) {
  const [name, setName] = useState("");
  return (
    <BaseNode selected={selected}>
      <BaseNode.TitleBar data={data} Icon={MdSave}>
        Save
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
