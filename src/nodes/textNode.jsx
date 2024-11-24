// textNode.js

import { useState } from "react";
import { Handle, Position } from "reactflow";
import BaseNode from "../components/BaseNode/BaseNode";
import InputField from "../components/InputField/InputField";
import { MdTextFields } from "react-icons/md";

export const TextNode = ({ id, data, selected }) => {
  const [name, setName] = useState("");
  return (
    <>
      <BaseNode selected={selected}>
        <BaseNode.TitleBar data={data} Icon={MdTextFields}>
          Text
        </BaseNode.TitleBar>
        <InputField
          id={id}
          label={"Name"}
          value={name}
          onChange={setName}
        ></InputField>

        <BaseNode.Handle
          type="target"
          position={Position.Right}
          id={`${id}-prompt`}
        />
      </BaseNode>
    </>
  );
};
