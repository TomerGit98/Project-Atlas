lets design a Portfolio Project
Lets look at the requirements again:
Responsibilities:
Supporting the establishment and maintenance of cloud environments in AWS, and familiarity with the GCP ecosystem.
Participating in the development of CI/CD processes and the automation of development and deployment workflows.
Working with and maintaining API Management systems.
Monitoring systems, troubleshooting issues, and improving performance.
Collaborating with development teams, QA, and systems analysts.
Job Requirements:
At least 1-2 years of experience in a DevOps role or a similar technological position.
Familiarity with cloud services – AWS is an advantage.
Experience with CI/CD tools like Azure DevOps – an advantage.
Basic knowledge of Linux systems and scripting (Bash/Python) – an advantage.
Basic knowledge of Windows systems and IIS – a must.
Familiarity with Docker and Kubernetes – an advantage.
High self-learning ability, teamwork skills, and good communication.
Additional Advantages:
Relevant certifications – an advantage.
Experience with monitoring tools like Prometheus, Grafana, ELK.
Basic understanding of cloud security.
Experience with Apigee API management – an advantage.




What I dont have expirience with AT ALL:
Azure DevOps
IIS

I also attached my CV (created with you :D)
So we can better refine the project direction

I have 1 Porfolio project with AWS and IaC + K8S:
https://github.com/TomerGit98/Project-Janus

---

Excellent – this is actually a **very strong starting point**, and you’re thinking about the *right gaps* to close 👍
Let’s design a **laser-focused portfolio project** that:

* Complements **Project Janus** (AWS + IaC + K8s)
* Directly maps to **UPS + Yael job requirements**
* Explicitly covers your **current gaps**:

  * ❌ Azure DevOps (no experience)
  * ❌ IIS (no experience)
* Can realistically be **completed in ~6 days**
* Looks **enterprise / corporate**, not “startup demo”

I’ll first anchor us in **your CV reality**, then propose the project, then give a **6-day execution plan**.

---

## 1️⃣ Reality Check: What You Already Cover (Very Well)

Based on your CV  and Project Janus:

### You already **strongly cover**

* CI/CD (Jenkins, Groovy, pipelines, automation)
* AWS (via Project Janus)
* Docker + Kubernetes
* Linux + Bash/Python
* Monitoring exposure (Grafana)
* Cross-team collaboration (Dev/QA/Infra)
* Enterprise scale mindset (Finastra)

So **we do NOT want**:

* Another “AWS + Terraform + EKS” clone
* Another Jenkins-heavy project

That would be **redundant**.

---

## 2️⃣ What the Job Description Is Quietly Screaming For

Let’s decode the *real signal* in the JD:

### 🔴 Hard Musts (Risk Areas)

* **Windows + IIS** → *explicit “must”*
* **API Management** → Apigee mentioned
* **Azure DevOps** → “advantage”, but *they use it*

### 🟡 Soft but Important

* CI/CD *outside* Jenkins
* Monitoring & troubleshooting
* Corporate / enterprise patterns
* Ability to learn new tooling fast

👉 This means your **next portfolio project must be**:

> “Look, I’m a Jenkins guy — but I can adapt instantly to other ecosystems.”

---

## 3️⃣ Portfolio Project Concept (High-Level)

### 🧠 Project Name (enterprise-friendly)

**Project Atlas**

> *Enterprise API Platform with Azure DevOps CI/CD, IIS, and Hybrid Cloud Monitoring*

(UPS likes mythological / logistics metaphors — Atlas fits very well.)

---

## 4️⃣ What This Project Demonstrates (Mapping 1:1 to JD)

| JD Requirement         | How Project Atlas Covers It          |
| ---------------------- | ------------------------------------ |
| AWS cloud environments | AWS EC2 / ALB / S3 (lightweight)     |
| GCP familiarity        | GCP diagram + notes (optional bonus) |
| CI/CD automation       | **Azure DevOps Pipelines (YAML)**    |
| API Management         | **Apigee (conceptual + mock)**       |
| Monitoring             | Prometheus + Grafana                 |
| Troubleshooting        | Intentional failure + fix            |
| Windows + IIS          | **Core of the project**              |
| Docker / K8s           | Optional side component              |
| Security basics        | IAM, secrets, TLS                    |
| Self-learning          | Azure DevOps + IIS from scratch      |

This is *exactly* what recruiters want to see.

---

## 5️⃣ Project Architecture (Simple but Enterprise-Correct)

### 🔹 Application

* Simple **.NET API** *or* **Node.js API**
* Runs on **Windows Server**
* Served via **IIS**
* Exposes:

  * `/health`
  * `/api/orders`
  * `/api/track`

(UPS-flavored without branding issues)

---

### 🔹 CI/CD (KEY DIFFERENTIATOR)

**Azure DevOps Pipeline**:

* Build stage
* Test stage
* Package artifact
* Deploy to IIS (WinRM or agent-based)

> This is where you *prove adaptability*.

---

### 🔹 API Management (Apigee)

* Use **Apigee free / trial / mock**
* OR: simulate Apigee with:

  * API gateway config
  * Rate limiting
  * API key validation

Explain clearly:

> “Apigee used here conceptually due to access limitations.”

That’s **100% acceptable**.

---

### 🔹 Monitoring

* Prometheus scraping:

  * App metrics
  * IIS exporter
* Grafana dashboard:

  * Requests
  * Latency
  * Error rate

---

## 6️⃣ What This Project Is NOT

❌ Not production-perfect
❌ Not over-engineered
❌ Not expensive

✔ Demonstrates **learning speed + relevance**

---

## 7️⃣ 6-Day Execution Plan (Realistic)

### **Day 1 – Windows & IIS Foundations**

* Spin up Windows Server (local VM or AWS EC2)
* Install IIS
* Deploy “Hello World” API
* Document IIS basics (bindings, app pools)

### **Day 2 – Application & API**

* Implement simple API endpoints
* Add `/health`
* Enable logging
* Manual deploy to IIS

### **Day 3 – Azure DevOps CI**

* Create Azure DevOps project
* Pipeline:

  * Build
  * Test
  * Artifact publish
* Show YAML clearly

### **Day 4 – CD to IIS**

* Add deploy stage
* Automated IIS deploy
* Rollback explanation (even manual)

### **Day 5 – Monitoring & API Management**

* Add Prometheus exporter
* Grafana dashboard
* Apigee:

  * Diagram
  * Policy examples
  * Rate limit simulation

### **Day 6 – Polish & Storytelling**

* Clean README
* Architecture diagram
* “What I learned” section
* Explicit JD mapping table

---

## 8️⃣ README Sections (Very Important)

Your README should have:

1. **Why this project exists**

   > “Designed to close gaps in Azure DevOps, IIS, and API Management for enterprise DevOps roles.”

2. **Architecture Diagram**

3. **CI/CD Pipeline Explanation**

4. **IIS Learnings**

5. **Azure DevOps Learnings**

6. **API Management Concepts**

7. **Monitoring & Troubleshooting**

8. **How this maps to UPS requirements**

This turns the repo into an **interview weapon**.

---

## 9️⃣ How This Complements Project Janus

| Project   | What it Proves                          |
| --------- | --------------------------------------- |
| **Janus** | AWS, IaC, Kubernetes                    |
| **Atlas** | Azure DevOps, IIS, APIs, enterprise ops |

Together:

> “I can operate across clouds, stacks, and tooling — not locked to one ecosystem.”

That’s **exactly** what UPS / Yael want.

---

## 🔥 Next Step (I Recommend This Order)

1. I define the **exact tech stack** (Node vs .NET, hosting choice)
2. I generate:

   * Azure DevOps pipeline YAML
   * IIS deployment script
   * README template
3. We shape **interview talking points**

👉 Tell me:

* Do you prefer **Node.js** or **.NET**?
* Local Windows VM or AWS EC2 Windows?

We’ll lock this in and start Day 1.

---

Lets do Node
But regarding point 2:
I generate:
Azure DevOps pipeline YAML
IIS deployment script

You do not generate
You will be my Senior DevOps Engineer - and lets treat this as Co-Programming where you are in a teaching position and help me when I am stuck
Also I will need some extra help when it comes to IIS and AZ DevOps

You CAN:
Generate the README template

This project will be version controlled with GitHub (so I can send it more easily + will document for us some steps with the commits

But we can start with the first point
Is the directive clear?

---

Crystal clear. We’ll do this like real co-programming: **you drive**, I’ll **guide, review, unblock**, and I’ll only *generate* what you explicitly want me to generate (README template ✅). For Azure DevOps YAML + IIS deploy scripts, I’ll **teach you how to write them**, review your drafts, and help debug when you get stuck.

## Step 0 — Project Atlas (Node + IIS + Azure DevOps) kickoff

### What you’ll build (minimal but enterprise)

* **Node.js API** (Express) with:

  * `GET /health`
  * `GET /api/track/:id`
  * `GET /api/orders` (dummy data)
* Runs on **Windows Server + IIS** using **iisnode** (or ARR + Node as a Windows service if needed).
* CI/CD later via **Azure DevOps** to deploy to IIS.
* Monitoring later.

## Day 1, Task 1 — Repo scaffold (GitHub)

Create a new GitHub repo: `project-atlas` and start with this structure:

```
project-atlas/
  src/
    server.js
  package.json
  .gitignore
  README.md
```

### Commands

```bash
mkdir project-atlas && cd project-atlas
npm init -y
npm i express
npm i -D nodemon
mkdir src
```

Create `src/server.js`:

```js
const express = require("express");
const app = express();

app.use(express.json());

app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok", service: "project-atlas", ts: new Date().toISOString() });
});

app.get("/api/track/:id", (req, res) => {
  res.json({ trackingId: req.params.id, status: "IN_TRANSIT", updatedAt: new Date().toISOString() });
});

app.get("/api/orders", (req, res) => {
  res.json([
    { id: "ORD-1001", status: "CREATED" },
    { id: "ORD-1002", status: "PACKED" },
  ]);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Atlas API listening on port ${port}`));
```

Update `package.json` scripts:

```json
"scripts": {
  "start": "node src/server.js",
  "dev": "nodemon src/server.js",
  "test": "node -e \"console.log('no tests yet')\""
}
```

Run locally:

```bash
npm run dev
```

Test:

* [http://localhost:3000/health](http://localhost:3000/health)
* [http://localhost:3000/api/track/ABC123](http://localhost:3000/api/track/ABC123)

### Commit 1 (recommended message)

`chore: scaffold express api with health and sample endpoints`

---

## Day 1, Task 2 — Choose hosting approach for IIS (important decision)

For Node on IIS, you have two realistic approaches:

### Option A (most “IIS-native”): **IIS + iisnode**

✅ Looks great for “IIS must” requirement
⚠️ Slight setup complexity (iisnode module)

### Option B (more modern ops): **IIS as reverse proxy (ARR) → Node service**

✅ Very common in enterprise Windows shops
✅ Easier CI/CD (you deploy Node as a Windows service)
⚠️ Slightly less “Node hosted by IIS” purist

**Given the job says “IIS must”**: we’ll aim for **Option A first**. If it becomes painful, we fall back to Option B (still counts as IIS).

---

## What I need from you (no repeats later)

1. Are you using **Windows Server on AWS EC2**, or a **local Windows VM** for Day 1–2?
2. Paste your **first commit hash** (or repo link) after you push.

Then we’ll proceed to IIS setup step-by-step, and I’ll coach you through installing/configuring the IIS side without me “writing it for you.”
