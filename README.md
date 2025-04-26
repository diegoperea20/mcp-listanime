# MCP Listanimes

MCP Listanime of web [listanime](https://listanime-umber.vercel.app/)

<p align="center">
  <img src="README-images/mcplistanime.png" alt="Step1">
</p>

<p align="center">
  <img src="README-images/webactivos.png" alt="Step1">
</p>


## 🛠️ Steps to Create from Scratch

### 1. Initialize your project

(download nodejs)
```bash
npm -y init
```

### 2. In your package.json, add the following:
```bash
"type": "module"
```
### 3 .📦 Install Dependencies

```python
npm install @modelcontextprotocol/sdk

#(Optional) Install zod for Validations
npm install zod
```


🔍 Using the MCP Inspector
You can verify your MCP project using the built-in inspector.

5. Run with Inspector

```bash
npx -y @modelcontextprotocol/inspector npx -y tsx main.ts
```
<p align="center">
  <img src="README-images/mcpinspector.png" alt="Step1">
</p>


⚙️ VSCode Integration (Optional)
in workspace >settings.json

```bash
"mcp":{
    "servers": {
      "listanime": {
        "command": "npx",
        "args": ["-y", "tsx", "D:/mcp-listanime/main.ts"]
      }
    }
  },
```

For stop MCP only push Stop
<p align="center">
  <img src="README-images/mcpvscode.png" alt="Step1">
</p>




-----

Created by [Diego Ivan Perea Montealegre](https://github.com/diegoperea20)
