This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).


## Phase 1: Modern Frontend & Identity (Next.js Focus)
- **Languages:** JavaScript (ES6+), TypeScript (Strict Mode).
- **Core Framework:** Next.js 15+ (App Router, Server Components).
- **Styling:** Tailwind CSS (Utility-first, responsive design).
- **UI Architecture:** shadcn (Radix UI + Lucide Icons).
- **CI/CD:** GitHub Actions + GitHub Pages/Vercel.

## Phase 2: Advanced Backend (Java 21 & Spring Boot 3)
- **Core:** Java 21 (Virtual Threads/Loom), Spring Boot 3.4+.
- **Security:** HashiCorp Vault for secret management, OAuth2/JWT.
- **Performance:** GraalVM Native Images for low-latency & low RAM.
- **Persistence:** PostgreSQL (Relational), Redis (Caching), Flyway (Migrations).

## Phase 3: AI & Data Science (Python Ecosystem)
- **Environments:** Pyenv + Poetry.
- **APIs:** FastAPI for high-performance ML serving.
- **Libraries:** LangChain/LlamaIndex for RAG (Retrieval Augmented Generation).
- **Integration:** Connecting Spring Boot with Python AI Agents.

## Phase 4: Infrastructure & DevOps (The "Senior" Layer)
- **Containerization:** Docker (Multi-stage, distroless images).
- **Orchestration:** Kubernetes (K8s) - Nodes, Pods, Helm Charts.
- **Observability:** Prometheus & Grafana stack.
- **IaC:** Terraform for AWS/GCP resource provisioning.

## Phase 5: Cloud Strategy (AWS & GCP)
- **AWS:** ECS/Fargate, App Runner, S3, Lambda.
- **GCP:** Cloud Run, GKE (Google Kubernetes Engine).

# Folder structure
* /app : Routes and Layouts. Similar to Controllers
* /components: Buttons, navs, custom reusable components
* /lib: Configuration classes to connect with external resources
* /services: API calls. Logic layer
* /hooks: React logic
* /types: Interfaces definitions 

## Environment Setup
- **OS:** Windows 11 + WSL2 (Ubuntu)
- **Java Stack:** SDKMAN! installed (Java 21/Spring Boot ready)
- **Node Stack:** NVM installed (Node.js 20+ LTS)
- **Python Stack:** Pyenv installed (Python 3.12.1 for AI/ML)
- **Infrastructure:** Docker Engine running natively on WSL2
- **Version Control:** Git & SSH keys configured (GitHub connected)

## Current Project: CV-NOC (Portfolio)
- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS (Initialized)
- **UI Library:** shadcn/ui (Initialized)

## Getting Started - Next Js / React

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
