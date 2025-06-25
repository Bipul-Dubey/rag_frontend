import { IMessage } from "@/types";

export const Messages: IMessage[] = [
  {
    id: "msg_001",
    type: "user",
    text: "Can you show me a code example in Python?",
    referenceLinks: null,
  },
  {
    id: "msg_002",
    type: "bot",
    text: "```python\nprint('Hello, world!')\n```",
    referenceLinks: [
      { label: "Python Docs", url: "https://docs.python.org/3/" },
    ],
  },

  {
    id: "msg_003",
    type: "user",
    text: "Give me a JSON schema for a user object.",
    referenceLinks: null,
  },
  {
    id: "msg_004",
    type: "bot",
    text: '```json\n{ "name": "John", "email": "john@example.com" }\n```',
    referenceLinks: [{ label: "JSON Schema", url: "https://json-schema.org/" }],
  },

  {
    id: "msg_005",
    type: "user",
    text: "Send a sample YAML config for a service.",
    referenceLinks: null,
  },
  {
    id: "msg_006",
    type: "bot",
    text: "```yaml\nservice:\n  name: my-service\n  port: 8080\n```",
    referenceLinks: [{ label: "YAML Spec", url: "https://yaml.org/spec/" }],
  },

  {
    id: "msg_007",
    type: "user",
    text: "Explain using a Markdown table.",
    referenceLinks: null,
  },
  {
    id: "msg_008",
    type: "bot",
    text: "| Key | Value |\n|-----|--------|\n| A   | Alpha  |\n| B   | Beta   |",
    referenceLinks: [
      {
        label: "Markdown Tables",
        url: "https://www.markdownguide.org/extended-syntax/#tables",
      },
    ],
  },

  {
    id: "msg_009",
    type: "user",
    text: "What’s the difference between map and forEach in JS?",
    referenceLinks: null,
  },
  {
    id: "msg_010",
    type: "bot",
    text: "```js\nconst arr = [1, 2, 3];\narr.map(x => x * 2); // returns new array\narr.forEach(x => console.log(x)); // executes side effects\n```",
    referenceLinks: [
      {
        label: "MDN map vs forEach",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",
      },
    ],
  },

  {
    id: "msg_011",
    type: "user",
    text: "Upload an image of a data pipeline.",
    referenceLinks: null,
  },
  {
    id: "msg_012",
    type: "bot",
    text: "![Pipeline](https://example.com/pipeline.png)",
    referenceLinks: [
      {
        label: "Data Pipeline Docs",
        url: "https://cloud.google.com/dataflow/docs/concepts/data-pipeline",
      },
    ],
  },

  {
    id: "msg_013",
    type: "user",
    text: "Can you generate a chart or graph?",
    referenceLinks: null,
  },
  {
    id: "msg_014",
    type: "bot",
    text: "![Chart](https://example.com/chart.png)",
    referenceLinks: [{ label: "Chart.js", url: "https://www.chartjs.org/" }],
  },

  {
    id: "msg_015",
    type: "user",
    text: "Give me a plain list of commands.",
    referenceLinks: null,
  },
  {
    id: "msg_016",
    type: "bot",
    text: "- git clone\n- git commit\n- git push",
    referenceLinks: [{ label: "Git Docs", url: "https://git-scm.com/docs" }],
  },

  {
    id: "msg_017",
    type: "user",
    text: "Give me the API response as plain text.",
    referenceLinks: null,
  },
  {
    id: "msg_018",
    type: "bot",
    text: "{ status: 200, message: 'OK' }",
    referenceLinks: [
      {
        label: "HTTP Status Codes",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status",
      },
    ],
  },

  {
    id: "msg_019",
    type: "user",
    text: "Summarize this document in bullet points.",
    referenceLinks: null,
  },
  {
    id: "msg_020",
    type: "bot",
    text: "- Point A\n- Point B\n- Point C",
    referenceLinks: [
      {
        label: "Summarization Guide",
        url: "https://en.wikipedia.org/wiki/Summarization",
      },
    ],
  },

  {
    id: "msg_021",
    type: "user",
    text: "Give me an audio clip explaining this.",
    referenceLinks: null,
  },
  {
    id: "msg_022",
    type: "bot",
    text: "[Audio](https://example.com/clip.mp3)",
    referenceLinks: [
      {
        label: "Audio API",
        url: "https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API",
      },
    ],
  },

  {
    id: "msg_023",
    type: "user",
    text: "Send a video demo of this feature.",
    referenceLinks: null,
  },
  {
    id: "msg_024",
    type: "bot",
    text: "[Video](https://example.com/demo.mp4)",
    referenceLinks: [
      {
        label: "Video Embed",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video",
      },
    ],
  },

  {
    id: "msg_025",
    type: "user",
    text: "Generate HTML content.",
    referenceLinks: null,
  },
  {
    id: "msg_026",
    type: "bot",
    text: "```html\n<div>Hello, World!</div>\n```",
    referenceLinks: [
      {
        label: "HTML Basics",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      },
    ],
  },

  {
    id: "msg_027",
    type: "user",
    text: "Give me a CSV format.",
    referenceLinks: null,
  },
  {
    id: "msg_028",
    type: "bot",
    text: "Name,Age,City\nAlice,30,London\nBob,25,NYC",
    referenceLinks: [
      { label: "CSV Format", url: "https://tools.ietf.org/html/rfc4180" },
    ],
  },

  {
    id: "msg_029",
    type: "user",
    text: "What’s the current time in UTC?",
    referenceLinks: null,
  },
  {
    id: "msg_030",
    type: "bot",
    text: "🕒 Current UTC time: 2025-06-25T18:30:00Z",
    referenceLinks: [
      { label: "World Time API", url: "https://worldtimeapi.org/" },
    ],
  },

  {
    id: "msg_031",
    type: "user",
    text: "Simulate a command line session.",
    referenceLinks: null,
  },
  {
    id: "msg_032",
    type: "bot",
    text: "```bash\n$ ls -la\n$ cd /var/www\n```",
    referenceLinks: [
      {
        label: "Bash Commands",
        url: "https://www.gnu.org/software/bash/manual/bash.html",
      },
    ],
  },

  {
    id: "msg_033",
    type: "user",
    text: "Show a math formula using LaTeX.",
    referenceLinks: null,
  },
  {
    id: "msg_034",
    type: "bot",
    text: "$$E=mc^2$$",
    referenceLinks: [
      { label: "LaTeX Math", url: "https://katex.org/docs/supported.html" },
    ],
  },

  {
    id: "msg_035",
    type: "user",
    text: "Write a SQL query to fetch users.",
    referenceLinks: null,
  },
  {
    id: "msg_036",
    type: "bot",
    text: "```sql\nSELECT * FROM users WHERE active = 1;\n```",
    referenceLinks: [
      { label: "SQL Tutorial", url: "https://www.w3schools.com/sql/" },
    ],
  },

  {
    id: "msg_037",
    type: "user",
    text: "Give me a C++ class definition.",
    referenceLinks: null,
  },
  {
    id: "msg_038",
    type: "bot",
    text: "```cpp\nclass Person {\n public:\n  string name;\n};\n```",
    referenceLinks: [
      { label: "C++ Reference", url: "https://en.cppreference.com/" },
    ],
  },

  {
    id: "msg_039",
    type: "user",
    text: "Make a checklist for deployment.",
    referenceLinks: null,
  },
  {
    id: "msg_040",
    type: "bot",
    text: "- [x] Lint\n- [ ] Unit Tests\n- [ ] Build\n- [ ] Deploy",
    referenceLinks: [
      {
        label: "DevOps Checklist",
        url: "https://www.atlassian.com/devops/deployment",
      },
    ],
  },

  {
    id: "msg_041",
    type: "user",
    text: "Render markdown heading levels.",
    referenceLinks: null,
  },
  {
    id: "msg_042",
    type: "bot",
    text: "# H1\n## H2\n### H3",
    referenceLinks: [
      {
        label: "Markdown Guide",
        url: "https://www.markdownguide.org/basic-syntax/",
      },
    ],
  },

  {
    id: "msg_043",
    type: "user",
    text: "Can you send me a file?",
    referenceLinks: null,
  },
  {
    id: "msg_044",
    type: "bot",
    text: "[Download PDF](https://example.com/report.pdf)",
    referenceLinks: [
      {
        label: "PDF Spec",
        url: "https://www.adobe.com/devnet/pdf/pdf_reference.html",
      },
    ],
  },

  {
    id: "msg_045",
    type: "user",
    text: "Render a bordered table with emojis.",
    referenceLinks: null,
  },
  {
    id: "msg_046",
    type: "bot",
    text: "| Emoji | Meaning |\n|-------|---------|\n| 🚀    | Launch  |\n| 🧠    | Brain   |",
    referenceLinks: [
      { label: "Emoji Reference", url: "https://emojipedia.org/" },
    ],
  },

  {
    id: "msg_047",
    type: "user",
    text: "Simulate a JSON API POST request.",
    referenceLinks: null,
  },
  {
    id: "msg_048",
    type: "bot",
    text: '```http\nPOST /api/user\nContent-Type: application/json\n\n{ "name": "Alice" }\n```',
    referenceLinks: [
      {
        label: "HTTP Reference",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTTP",
      },
    ],
  },

  {
    id: "msg_049",
    type: "user",
    text: "Write a GraphQL query.",
    referenceLinks: null,
  },
  {
    id: "msg_050",
    type: "bot",
    text: "```graphql\nquery {\n  user(id: 1) {\n    name\n  }\n}\n```",
    referenceLinks: [
      { label: "GraphQL Docs", url: "https://graphql.org/learn/queries/" },
    ],
  },

  {
    id: "msg_051",
    type: "user",
    text: "Show me Terraform for EC2.",
    referenceLinks: null,
  },
  {
    id: "msg_052",
    type: "bot",
    text: '```hcl\nresource "aws_instance" "web" {\n  ami = "ami-0abcd"\n}\n```',
    referenceLinks: [
      {
        label: "Terraform EC2",
        url: "https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/instance",
      },
    ],
  },

  {
    id: "msg_053",
    type: "bot",
    text: "```python\nprint('Hello, world!')\n```",
    referenceLinks: [
      { label: "Python Docs", url: "https://docs.python.org/3/" },
      { label: "W3Schools Python", url: "https://www.w3schools.com/python/" },
    ],
  },
  {
    id: "msg_054",
    type: "bot",
    text: '```json\n{ "name": "John", "email": "john@example.com" }\n```',
    referenceLinks: [
      { label: "JSON Schema", url: "https://json-schema.org/" },
      { label: "RFC 8259", url: "https://tools.ietf.org/html/rfc8259" },
    ],
  },
  {
    id: "msg_055",
    type: "bot",
    text: "```yaml\nservice:\n  name: my-service\n  port: 8080\n```",
    referenceLinks: [
      { label: "YAML Spec", url: "https://yaml.org/spec/" },
      {
        label: "Learn YAML",
        url: "https://rollout.io/blog/yaml-tutorial-every-devops-should-know/",
      },
    ],
  },
  {
    id: "msg_056",
    type: "bot",
    text: "```js\nconst arr = [1, 2, 3];\narr.map(x => x * 2); // returns new array\narr.forEach(x => console.log(x)); // executes side effects\n```",
    referenceLinks: [
      {
        label: "MDN - map",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map",
      },
      {
        label: "MDN - forEach",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach",
      },
    ],
  },
  {
    id: "msg_057",
    type: "bot",
    text: "```graphql\nquery {\n  user(id: 1) {\n    name\n  }\n}\n```",
    referenceLinks: [
      { label: "GraphQL Queries", url: "https://graphql.org/learn/queries/" },
      { label: "Apollo Docs", url: "https://www.apollographql.com/docs/" },
    ],
  },
];
