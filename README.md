<div align="center">

**English** · [简体中文](README.zh-CN.md)

<img src="assets/hero.svg" alt="Wang Shun — AI Applications and Backend Engineering" width="100%" />

### AI Application Development / General Backend Development

Focused on LLM tool calling, RAG, Agent orchestration, code generation, as well as backend service governance and engineering delivery.

[![Website](https://img.shields.io/badge/Portfolio-wangshun.work-0f766e?style=flat-square&logo=googlechrome&logoColor=white)](https://wangshun.work)
[![Organization](https://img.shields.io/badge/Organization-wangshun--china-182b42?style=flat-square&logo=github&logoColor=white)](https://github.com/wangshun-china)
[![Email](https://img.shields.io/badge/Email-2606209307%40qq.com-2563eb?style=flat-square&logo=gmail&logoColor=white)](mailto:2606209307@qq.com)

</div>

## About Me

- Master's student at **Shanghai Ocean University**, working on real-time 3D reconstruction of UAV imagery based on **3D Gaussian Splatting (3DGS)**.
- Interested in **AI Agents, LLM application engineering, Java backend, and distributed systems**.
- Use Claude Code, Codex, GPT, Gemini, and DeepSeek to assist with requirement breakdown, solution design, implementation, code review, and debugging — with quality controlled through manual review, testing, and CI/CD.
- For the full experience and online project demos, visit [my resume website](https://wangshun.work).

## Featured Projects

| AI & Agent Applications | Backend & Infrastructure |
| :--- | :--- |
| **[AI Coder](https://github.com/wangshun-china/ai-code)** <br><br> Full-stack platform for generating frontend applications from natural language, with multiple Agents covering planning, scaffolding, UI coding, review, fixing, preview, and deployment. <br><br> `Spring AI Alibaba Graph` · `LangChain4j` · `Tool Calling` · `RAG` · `Redis` · `Dubbo` · `Vue 3` · `Docker` <br><br> [Source](https://github.com/wangshun-china/ai-code) · **[Live Demo](https://ai-coder.wangshun.work)** | **[Lumina-RPC](https://github.com/wangshun-china/lumina-rpc)** <br><br> Self-built lightweight RPC framework covering protocol codec, service registry and discovery, dynamic proxy, load balancing, fault tolerance, tracing, and a visual control plane. <br><br> `Java` · `Netty` · `ByteBuddy` · `SPI` · `SSE` · `Vue Flow` · `ECharts` <br><br> [Source](https://github.com/wangshun-china/lumina-rpc) · **[Live Demo](https://rpc.wangshun.work)** |
| **[Agent Quest](https://github.com/wangshun-china/agent-quest)** <br><br> Interactive levels showcasing Agent Harness capabilities: boundaries, tool calling, planning, memory, observability, and evaluation. <br><br> `TypeScript` · `Agent Harness` · `Tool Calling` · `Observability` <br><br> [Source](https://github.com/wangshun-china/agent-quest) · **[Live Demo](https://agent.wangshun.work)** | **API Relay Platform** <br><br> Self-hosted and maintained LLM API relay service, providing a unified interface, call management, and usage analytics across different model providers. <br><br> `Model API aggregation` · `Channel management` · `Usage analytics` · `Docker` · `Nginx` · `HTTPS` <br><br> **[Live Service](https://api.wangshun.work)** |
| **[AutoGuard AI](https://github.com/xixi-box/AutoGuard-AI-Reviewer)** <br><br> GitHub App for intelligent code review — pulls PR diffs via Webhook, calls LLMs to generate structured review comments, and posts them back. <br><br> `Python` · `FastAPI` · `GitHub App` · `Webhook` · `DeepSeek` · `JWT` · `HMAC` <br><br> [Source](https://github.com/xixi-box/AutoGuard-AI-Reviewer) | **More Projects** <br><br> Explore detailed project write-ups, engineering notes, and interactive demos on my portfolio. <br><br> **[Explore Portfolio](https://wangshun.work)** · [GitHub Organization](https://github.com/wangshun-china) |

> **Demo availability:** Some online demos run on a local WSL instance and are exposed to the public internet via FRP. When offline, the source code and project descriptions on my website are still available.

## Selected Open Source Contributions

Beyond my own projects, I contribute fixes and regression tests to widely used open-source software. Here are six merged upstream pull requests:

| Project | Merged Contribution |
| :--- | :--- |
| **[ClickHouse · #129709](https://github.com/ClickHouse/ClickHouse/pull/129709)** | Fixed MySQL OK-packet payload sizing and parsing of optional fields. |
| **[Wasmtime · #15275](https://github.com/bytecodealliance/wasmtime/pull/15275)** | Fixed core dumps for custom-page-size WebAssembly memories, including truncated final chunks. |
| **[go-redis · #4296](https://github.com/redis/go-redis/pull/4296)** | Limited nested RESP3 reply parsing to prevent stack exhaustion from malicious responses. |
| **[Qdrant · #11350](https://github.com/qdrant/qdrant/pull/11350)** | Corrected Euclidean distance threshold handling in recommendation scoring. |
| **[MCP Rust SDK · #1427](https://github.com/modelcontextprotocol/rust-sdk/pull/1427)** | Ensured stateful Streamable HTTP session workers honor cancellation during shutdown. |
| **[PR-Agent · #4932](https://github.com/The-PR-Agent/pr-agent/pull/4932)** | Guarded GitLab ticket context by project visibility to prevent restricted issue data exposure. |

**[View All Merged PRs](https://github.com/search?q=is%3Apr+author%3Axixi-box+is%3Amerged&type=pullrequests)** · [All PR Activity](https://github.com/search?q=is%3Apr+author%3Axixi-box&type=pullrequests)

## Engineering & Delivery

- [Resume website](https://github.com/wangshun-china/interview-web): a Vue 3 resume site with project showcase and a lightweight ops console, live at [wangshun.work](https://wangshun.work).
- [Deployment templates](https://github.com/xixi-box/template): reusable solutions for GitHub Actions, Docker Compose, Self-hosted Runner, Nginx, and FRP.
- Some code and core projects are mainly maintained in the [wangshun-china](https://github.com/wangshun-china) organization.

## Tech Stack

<div align="center">

<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" alt="Java" title="Java" width="38" height="38" />&nbsp;
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg" alt="Spring" title="Spring" width="38" height="38" />&nbsp;
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" alt="Python" title="Python" width="38" height="38" />&nbsp;
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" alt="TypeScript" title="TypeScript" width="38" height="38" />&nbsp;
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg" alt="Vue" title="Vue" width="38" height="38" />&nbsp;
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg" alt="Redis" title="Redis" width="38" height="38" />&nbsp;
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" alt="MySQL" title="MySQL" width="38" height="38" />&nbsp;
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" alt="Docker" title="Docker" width="38" height="38" />&nbsp;
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg" alt="GitHub Actions" title="GitHub Actions" width="38" height="38" />&nbsp;
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" alt="Linux" title="Linux" width="38" height="38" />

</div>

**AI Applications:** `Spring AI Alibaba` · `LangChain4j / LangGraph4j` · `ReAct Agent` · `Tool Calling` · `RAG` · `Prompt Engineering` · `Structured Output` · `LLM API Integration`

**Backend & Middleware:** `Java 21` · `Python` · `Spring Boot 3` · `FastAPI` · `Dubbo 3` · `Nacos` · `Netty` · `MySQL` · `Redis / Redisson` · `Caffeine` · `SSE`

**Frontend & Visualization:** `TypeScript` · `Vue 3` · `Vite` · `Element Plus` · `Tailwind CSS` · `Vue Flow` · `ECharts`

**DevOps & Deployment:** `Git` · `Docker / Docker Compose` · `GitHub Actions` · `CI/CD` · `Nginx` · `Linux` · `Alibaba Cloud ECS / ACR` · `Self-hosted Runner` · `FRP`

## GitHub Activity

<div align="center">

<a href="https://github.com/xixi-box"><img src="https://raw.githubusercontent.com/xixi-box/xixi-box/output/stats.svg" alt="Wang Shun's GitHub statistics" height="170" /></a>
<a href="https://github.com/xixi-box?tab=repositories"><img src="https://raw.githubusercontent.com/xixi-box/xixi-box/output/top-langs.svg" alt="Most used repository languages" height="170" /></a>

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/xixi-box/xixi-box/output/github-snake-dark.svg" />
  <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/xixi-box/xixi-box/output/github-snake-light.svg" />
  <img src="https://raw.githubusercontent.com/xixi-box/xixi-box/output/github-snake-light.svg" alt="Animated snake moving across Wang Shun's GitHub contribution graph" width="100%" />
</picture>

<sub>Statistics and contribution animation refresh daily via GitHub Actions.</sub>

</div>

---

<div align="center">

[Website](https://wangshun.work) · [GitHub Organization](https://github.com/wangshun-china) · [Contact Me](mailto:2606209307@qq.com)

</div>
