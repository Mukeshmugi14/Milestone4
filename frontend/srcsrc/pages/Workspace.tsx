import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { useState } from "react";
import axios from "../api/axios";

const Workspace = () => {
  const [activeTab, setActiveTab] = useState("explain");
  const [inputCode, setInputCode] = useState("");
  const [output, setOutput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [model, setModel] = useState("gemma2b");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    setInputCode("");
    setOutput("");
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const response = await axios.post("/generate", {
        prompt: inputCode,
        model_name: model,
      });
      setOutput(response.data.generated_text);
    } catch (error) {
      console.error("Error generating text:", error);
      setOutput("Error generating text.");
    }
    setIsLoading(false);
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <main className="p-5">
          <div className="flex justify-between items-center mb-4">
            <div className="flex space-x-4">
              <button
                className={`px-4 py-2 rounded ${
                  activeTab === "explain" ? "bg-blue-500 text-white" : "bg-gray-200"
                }`}
                onClick={() => handleTabClick("explain")}
              >
                Explain
              </button>
              <button
                className={`px-4 py-2 rounded ${
                  activeTab === "generate" ? "bg-blue-500 text-white" : "bg-gray-200"
                }`}
                onClick={() => handleTabClick("generate")}
              >
                Generate
              </button>
              <button
                className={`px-4 py-2 rounded ${
                  activeTab === "debug" ? "bg-blue-500 text-white" : "bg-gray-200"
                }`}
                onClick={() => handleTabClick("debug")}
              >
                Debug
              </button>
            </div>
            <div>
              <select
                className="px-4 py-2 border rounded"
                value={model}
                onChange={(e) => setModel(e.target.value)}
              >
                <option value="gemma2b">Gemma-2b</option>
                <option value="phi2">Phi-2</option>
                <option value="codebert">CodeBERT</option>
                <option value="deepseek">DeepSeek</option>
              </select>
            </div>
          </div>
          <div>
            <textarea
              className="w-full h-64 p-2 border rounded"
              placeholder={`Enter code to ${activeTab}...`}
              value={inputCode}
              onChange={(e) => setInputCode(e.target.value)}
            />
            <button
              className="bg-green-500 text-white px-4 py-2 rounded mt-2"
              onClick={handleSubmit}
              disabled={isLoading}
            >
              {isLoading ? "Loading..." : "Submit"}
            </button>
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-bold">Output:</h3>
            <div className="p-4 border rounded bg-gray-100">
              <pre>
                <code>{output}</code>
              </pre>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Workspace;
