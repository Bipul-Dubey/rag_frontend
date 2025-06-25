import { IMessage } from "@/types";

export const Messages: IMessage[] = [
  {
    id: "msg_001",
    type: "user",
    text: "Can you show me a code example in Python?",
  },
  {
    id: "msg_002",
    type: "bot",
    text: "```python\nprint('Hello, world!')\n```",
  },

  {
    id: "msg_003",
    type: "user",
    text: "Give me a JSON schema for a user object.",
  },
  {
    id: "msg_004",
    type: "bot",
    text: '```json\n{ "name": "John", "email": "john@example.com" }\n```',
  },

  {
    id: "msg_005",
    type: "user",
    text: "Send a sample YAML config for a service.",
  },
  {
    id: "msg_006",
    type: "bot",
    text: "```yaml\nservice:\n  name: my-service\n  port: 8080\n```",
  },

  {
    id: "msg_007",
    type: "user",
    text: "Explain using a Markdown table.",
  },
  {
    id: "msg_008",
    type: "bot",
    text: "| Key | Value |\n|-----|--------|\n| A   | Alpha  |\n| B   | Beta   |",
  },

  {
    id: "msg_009",
    type: "user",
    text: "What’s the difference between map and forEach in JS?",
  },
  {
    id: "msg_010",
    type: "bot",
    text: "```js\nconst arr = [1, 2, 3];\narr.map(x => x * 2); // returns new array\narr.forEach(x => console.log(x)); // executes side effects\n```",
  },

  {
    id: "msg_011",
    type: "user",
    text: "Upload an image of a data pipeline.",
  },
  {
    id: "msg_012",
    type: "bot",
    text: "![Pipeline](https://example.com/pipeline.png)",
  },

  {
    id: "msg_013",
    type: "user",
    text: "Can you generate a chart or graph?",
  },
  {
    id: "msg_014",
    type: "bot",
    text: "![Chart](https://example.com/chart.png)",
  },

  {
    id: "msg_015",
    type: "user",
    text: "Give me a plain list of commands.",
  },
  {
    id: "msg_016",
    type: "bot",
    text: "- git clone\n- git commit\n- git push",
  },

  {
    id: "msg_017",
    type: "user",
    text: "Give me the API response as plain text.",
  },
  {
    id: "msg_018",
    type: "bot",
    text: "{ status: 200, message: 'OK' }",
  },

  {
    id: "msg_019",
    type: "user",
    text: "Summarize this document in bullet points.",
  },
  {
    id: "msg_020",
    type: "bot",
    text: "- Point A\n- Point B\n- Point C",
  },

  {
    id: "msg_021",
    type: "user",
    text: "Give me an audio clip explaining this.",
  },
  {
    id: "msg_022",
    type: "bot",
    text: "[Audio](https://example.com/clip.mp3)",
  },

  {
    id: "msg_023",
    type: "user",
    text: "Send a video demo of this feature.",
  },
  {
    id: "msg_024",
    type: "bot",
    text: "[Video](https://example.com/demo.mp4)",
  },

  { id: "msg_025", type: "user", text: "Generate HTML content." },
  {
    id: "msg_026",
    type: "bot",
    text: "```html\n<div>Hello, World!</div>\n```",
  },

  { id: "msg_027", type: "user", text: "Give me a CSV format." },
  {
    id: "msg_028",
    type: "bot",
    text: "Name,Age,City\nAlice,30,London\nBob,25,NYC",
  },

  {
    id: "msg_029",
    type: "user",
    text: "What’s the current time in UTC?",
  },
  {
    id: "msg_030",
    type: "bot",
    text: "🕒 Current UTC time: 2025-06-25T18:30:00Z",
  },

  {
    id: "msg_031",
    type: "user",
    text: "Simulate a command line session.",
  },
  {
    id: "msg_032",
    type: "bot",
    text: "```bash\n$ ls -la\n$ cd /var/www\n```",
  },

  {
    id: "msg_033",
    type: "user",
    text: "Show a math formula using LaTeX.",
  },
  { id: "msg_034", type: "bot", text: "$$E=mc^2$$" },

  {
    id: "msg_035",
    type: "user",
    text: "Write a SQL query to fetch users.",
  },
  {
    id: "msg_036",
    type: "bot",
    text: "```sql\nSELECT * FROM users WHERE active = 1;\n```",
  },

  {
    id: "msg_037",
    type: "user",
    text: "Give me a C++ class definition.",
  },
  {
    id: "msg_038",
    type: "bot",
    text: "```cpp\nclass Person {\n public:\n  string name;\n};\n```",
  },

  {
    id: "msg_039",
    type: "user",
    text: "Make a checklist for deployment.",
  },
  {
    id: "msg_040",
    type: "bot",
    text: "- [x] Lint\n- [ ] Unit Tests\n- [ ] Build\n- [ ] Deploy",
  },

  {
    id: "msg_041",
    type: "user",
    text: "Render markdown heading levels.",
  },
  { id: "msg_042", type: "bot", text: "# H1\n## H2\n### H3" },

  { id: "msg_043", type: "user", text: "Can you send me a file?" },
  {
    id: "msg_044",
    type: "bot",
    text: "[Download PDF](https://example.com/report.pdf)",
  },

  {
    id: "msg_045",
    type: "user",
    text: "Render a bordered table with emojis.",
  },
  {
    id: "msg_046",
    type: "bot",
    text: "| Emoji | Meaning |\n|-------|---------|\n| 🚀    | Launch  |\n| 🧠    | Brain   |",
  },

  {
    id: "msg_047",
    type: "user",
    text: "Simulate a JSON API POST request.",
  },
  {
    id: "msg_048",
    type: "bot",
    text: '```http\nPOST /api/user\nContent-Type: application/json\n\n{ "name": "Alice" }\n```',
  },

  { id: "msg_049", type: "user", text: "Write a GraphQL query." },
  {
    id: "msg_050",
    type: "bot",
    text: "```graphql\nquery {\n  user(id: 1) {\n    name\n  }\n}\n```",
  },

  { id: "msg_051", type: "user", text: "Show me Terraform for EC2." },
  {
    id: "msg_052",
    type: "bot",
    text: '```hcl\nresource "aws_instance" "web" {\n  ami = "ami-0abcd"\n}\n```',
  },
];
