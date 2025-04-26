import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";

const server = new McpServer({
  name: "MCPlistanime",
  description: "MCPlistanime is a tool for anime list.",
  version: "1.0.0",
});

server.tool(
  "list-anime",
  "asks for a list of animes",
  {
    ask: z.string().describe("ask for a list of animes"),
  },
  async ({ ask }) => {
    const response = await fetch("https://listanime-umber.vercel.app/api/listanimes");

    const data = await response.json();

    if (data.lenth === 0) {
      return {
        content: [{ type: "text", text: "No anime found." }],
      };
    }

    return {
      content: [
        {
          type: "text",
          text: JSON.stringify(data, null, 2),
        },
      ],
    };
    
  }
);


// Listening client
const transport=new StdioServerTransport()
await server.connect(transport)
