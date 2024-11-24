export const DraggableNode = ({ type, label, Icon }) => {
  const onDragStart = (event, nodeType) => {
    const appData = { nodeType };
    event.target.style.cursor = "grabbing";
    event.dataTransfer.setData(
      "application/reactflow",
      JSON.stringify(appData)
    );
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <div
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={(event) => (event.target.style.cursor = "grab")}
      className={`border border-gray-300 hover:border-purple-500 group hover:text-purple-500 
                  bg-white shadow-sm hover:shadow-md 
                  cursor-grab transition-shadow ease-in-out duration-300 
                  p-4 text-gray-700 font-semibold items-center 
                  gap-2 rounded-xl min-w-[5rem] flex flex-col 
                   ${type}`}
      draggable
    >
      {Icon && (
        <Icon className="text-3xl text-gray-400 group-hover:text-purple-500 " />
      )}
      <span className="text-center">{label}</span>
    </div>
  );
};
