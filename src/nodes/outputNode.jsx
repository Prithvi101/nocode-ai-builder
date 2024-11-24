// outputNode.js

import { useState } from "react";
import BaseNode from "../components/BaseNode/BaseNode";
import { LuFileOutput } from "react-icons/lu";
import InputField from "../components/InputField/InputField";
import { Position } from "reactflow";

export const OutputNode = ({ id, data, selected }) => {
  const [name, setName] = useState("");
  const [fileType, setFileType] = useState("");
  return (
    <BaseNode selected={selected}>
      <BaseNode.TitleBar data={data} Icon={LuFileOutput}>
        Output
      </BaseNode.TitleBar>
      <InputField label={"Name"} value={name} onChange={setName}></InputField>
      <InputField
        label={"Type"}
        value={fileType}
        onChange={setFileType}
        dropDownItems={["File", "Text"]}
      ></InputField>
      <BaseNode.Handle
        type="target"
        position={Position.Left}
        id={`${id}-response`}
      />
    </BaseNode>
  );
};
