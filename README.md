# 🚀 Project Atlas
<p align="center">
  <a href="https://github.com/TomerGit98/Project-Janus/actions">
    <img src="https://img.shields.io/github/actions/workflow/status/TomerGit98/Project-Janus/janus-ci-cd.yaml?branch=main&label=CI%2FCD" alt="CI/CD Status">
  </a>
  <img src="https://img.shields.io/github/languages/top/TomerGit98/Project-Janus" alt="Top language">
  <img src="https://img.shields.io/github/repo-size/TomerGit98/Project-Janus" alt="Repo size">
  <img src="https://img.shields.io/badge/cloud-AWS-FF9900?logo=amazon-aws&logoColor=white" alt="AWS">
  <img src="https://img.shields.io/badge/kubernetes-EKS-326CE5?logo=kubernetes&logoColor=white" alt="EKS">
  <img src="https://img.shields.io/badge/helm-chart-0F1689?logo=helm&logoColor=white" alt="Helm">
  <img src="https://img.shields.io/badge/terraform-IaC-7B42F6?logo=terraform&logoColor=white" alt="Terraform">
</p>

# NOTE:
**In this project I relied more on AI than usual due to time constraints.**
That said, I still learned a lot, did extensive hands-on work, and reused knowledge from previous projects.
**my initial prompt can be found in:**
  * **`docs/project_talos_initial_prompt.md`**

---

**Project Atlas** is a production-style backend service deployed to **two different runtimes**:

* **Windows IIS (via iisnode)**
* **AWS EKS (Kubernetes)**

On this project I focused on:
* **deployment mechanics**
* **CI/CD pipelines**
* **operational parity** over application complexity.

---

## 🎯 Project Goals

* Learn and show **IIS deployment and automation**
* Demonstrate **AWS EKS provisioning with Terraform**
* Use **the same application** across multiple runtimes
* Implement **CI/CD pipelines**
* Expose build/runtime metadata consistently (using `/version`)

---

## 🧩 Architecture Overview

```
GitHub Repository
│
├─ CI Pipeline
│   ├─ Build Docker image
│   ├─ Tag image with Git SHA
│   └─ Push to Amazon ECR
│
├─ CD – AWS EKS
│   ├─ Update Kubernetes Deployment image
│   └─ Rollout via kubectl
│
└─ CD – Windows IIS
    ├─ Sync files to IIS site directory
    ├─ Install Node.js dependencies
    └─ Restart IIS
```
---

### Environments

| Environment | Platform            | Exposure         |
| ----------- | ------------------- | ---------------- |
| IIS         | Windows Server 2022 | HTTP (Port 80)   |
| EKS         | AWS (eu-central-1)  | AWS LoadBalancer |

---

## 🖥️ IIS Deployment (Windows Focus)

This project intentionally includes **IIS**, to expand my knowledge of Windows-based systems as many enterprise environments still rely on it.
**IIS Setup can be found in:**
  * **`docs/iis-setup.md`**

### Key Components

* IIS on Windows Server 2022
* **iisnode** to host Node.js
* URL Rewrite for request routing
* Application Pool identity permissions
* `web.config`-based configuration

### Common Issues Solved

* `403.14` – no default document
* `404` – missing / misnamed `web.config`
* `500.19` – locked handler sections
* IIS AppPool permissions (logs & execution)
* iisnode schema compatibility

> IIS was configured entirely via hands-on troubleshooting and validation, not templates.

---

## ☸️ Kubernetes Deployment (AWS EKS)

EKS infrastructure is provisioned using **Terraform**.

### Highlights

* Custom VPC (public + private subnets)
* Managed Node Groups
* Kubernetes `Deployment` + `Service (LoadBalancer)`
* Docker images pulled from Amazon ECR
* Immutable image tags based on Git SHA
* Usage of official AWS VPC and EKS Terraform modules

---

## 🔄 CI/CD Pipelines

I **intentionally separated** CI and CD to reflect real-world workflows.

### CI Pipeline

Triggered on push to `master`:

* Build Docker image
* Tag image with commit SHA
* Push image to Amazon ECR

### CD – EKS

Triggered manually:

* Update Kubernetes Deployment image
* Rollout and validate service

### CD – IIS

Triggered manually on a **self-hosted Windows runner**:

* Inject build metadata
* Sync files to IIS directory
* Install production dependencies
* Restart IIS
* Validate endpoints locally

---

## 🧪 Runtime Parity & Versioning

The same `/version` endpoint exists across **all environments**:

```json
{
  "service": "project-atlas",
  "git_sha": "11c681999dcb5a011f4ad9039e115cf563809595",
  "build_time": "2025-12-19T12:29:41Z",
  "runtime": "eks",
  "ts": "2025-12-19T12:33:39.530Z"
}
```

This allows:

* Deployment verification
* Runtime awareness
* Debugging mismatches across platforms

---

## 🧠 What I Learned?

* IIS is powerful but unforgiving — it expects specific configurations, files and permissions that required deep troubleshooting and learning
* Self-hosted runners behave very differently from hosted ones - here comes permissions issue into play again
* Kubernetes cleanup requires understanding **cloud provider dependencies** - because it was a first time for me that `terraform destroy` failed - first because Gateway and Subnet didn't manage to delete since they had an ELB dependency still alive - and then a VPC (to be investigated - why I didn't encounter it in Project Janus and here didn't - most likely due to the manually created EC2 instance - which I should move to Terraform)
* Separating CI and CD improves clarity and control - didn't learn - more refined - since I had previous knowledge from my previous work - but there we didn't have "production" environment - since our product wasn't LIVE - it was a released version files

---

## 🛠️ Tech Stack

* **Languages:** Node.js
* **CI/CD:** GitHub Actions (Wanted Azure DevOps - but didn't manage due to time constrains)
* **Cloud:** AWS (EKS, ECR, VPC, ELB, EC2)
* **IaC:** Terraform
* **Web Server:** IIS + iisnode
* **Containers:** Docker
* **Orchestration:** Kubernetes
  *(Wanted “vanilla” Kubernetes instead of Helm — turned out very similar)*
  *אותה הגברת בשינוי אדרת*
---

## Contact (me - of course)

Author: **Tomer Avisar**
Role: DevOps Engineer
- GitHub: [TomerGit98](https://github.com/TomerGit98)  
- LinkedIn: [linkedin.com/in/tomer-avisar-41248b1a3](https://www.linkedin.com/in/tomer-avisar-41248b1a3/)
Feel free to reach out on LinkedIn or GitHub for feedback or ideas.