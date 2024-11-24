// llmNode.js

import { Position } from "reactflow";
import BaseNode from "../components/BaseNode/BaseNode";
import { LuServer } from "react-icons/lu";

export const LLMNode = ({ id, data }) => {
  return (
    <>
      <BaseNode>
        <BaseNode.TitleBar data={data} Icon={LuServer}>
          LLM
        </BaseNode.TitleBar>

        <BaseNode.Content data={data}>
          This is Content of LLM Node
        </BaseNode.Content>
        <BaseNode.Handle
          type="target"
          position={Position.Left}
          id={`${id}-system`}
          style={{ top: `${100 / 3}%` }}
        />
        <BaseNode.Handle
          type="target"
          position={Position.Left}
          id={`${id}-prompt`}
          style={{ top: `${200 / 3}%` }}
        />
        <BaseNode.Handle
          type="source"
          position={Position.Right}
          id={`${id}-response`}
        />
      </BaseNode>
    </>
  );
};
