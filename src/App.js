import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PipelineToolbar } from "./toolbar";
import { PipelineUI } from "./ui";
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="h-[100vh] flex flex-col w-[100dvw] overflow-hidden">
        <PipelineToolbar />
        <PipelineUI />
      </div>
    </QueryClientProvider>
  );
}

export default App;
