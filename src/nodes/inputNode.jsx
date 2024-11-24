// inputNode.js

import { useState } from "react";
import { Position } from "reactflow";
import BaseNode from "../components/BaseNode/BaseNode";
import { LuFileInput } from "react-icons/lu";
import InputField from "../components/InputField/InputField";

export const InputNode = ({ id, data, selected }) => {
  const [name, setName] = useState("");
  const [fileType, setFileType] = useState("");
  return (
    <BaseNode selected={selected}>
      <BaseNode.TitleBar data={data} Icon={LuFileInput}>
        Input
      </BaseNode.TitleBar>
      <InputField label={"Name"} value={name} onChange={setName}></InputField>
      <InputField
        label={"Type"}
        value={fileType}
        onChange={setFileType}
        dropDownItems={["File", "Text"]}
      ></InputField>
      <BaseNode.Handle
        type="source"
        position={Position.Right}
        id={`${id}-prompt`}
      />
    </BaseNode>
  );
};
