# 🧠 AIService

AIService is a backend service built with **Node.js, Express, and TypeScript**, designed as an **agent-based RAG (Retrieval-Augmented Generation) system** focused on **generating and orchestrating website APIs**.

The service follows a clean, layered architecture suitable for scalable AI-driven backend systems.

---

## 🎯 Purpose

This service acts as an **AI agent runtime** that:

- 🧩 Retrieval-Augmented Generation (RAG)
- 🤖 Agent-based reasoning
- 🏗️ Website API generation
- 🧠 Context-aware decision making
- 🔄 Autonomous composition

---

## 🏛️ Architecture Overview

The project is organized by responsibility, not by feature.

- ⚙️ **config**  
  Environment configuration, constants, and runtime settings

- 🎮 **controllers**  
  HTTP-level request handling and coordination  
  Controllers do not contain business logic

- 🧠 **services**  
  Core application logic, agent orchestration, RAG flows, and AI reasoning

- 🗄️ **repositories**  
  Data access layer (databases, vector stores, external APIs)

- 🧰 **middleware**  
  Cross-cutting concerns such as logging, CORS, error handling, and request lifecycle control

- 🚀 **server.ts**  
  Application bootstrap and HTTP server wiring

This structure supports agent-based workflows and complex reasoning pipelines while keeping the HTTP layer thin.

---

## 🧬 RAG Agent Design

AIService is designed around **agent-driven RAG patterns**, where:

- Agents retrieve contextual data from repositories
- Retrieved context is injected into reasoning steps
- Services coordinate multi-step agent execution
- Controllers expose agent capabilities over HTTP

This allows the system to:
- Generate website APIs dynamically
- Adapt responses based on retrieved knowledge
- Evolve toward multi-agent collaboration

---

## 🧑‍💻 Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The server runs using:
- ts-node
- nodemon
- TypeScript path aliases
- Centralized middleware

---

## 🔐 Environment Variables

Environment configuration lives in:
```bash
.env
```

A template is provided:
```bash
.env-template
```

---

## 🧪 Testing

Test is done using Jest framework and live under:

```bash
test/
```

Run tests:

```bash
npm run test
```

Watch mode:

```bash
npm run test:watch
```

Coverage:

```bash
npm run test:coverage
```

---

## 🏗️ Build and Run

Build the project:

```bash
npm run build
```

Run the compiled output:

```bash
npm start
```

The build process:

- Compiles TypeScript
- Preserves clean directory structure
- Prepares the service for production execution



