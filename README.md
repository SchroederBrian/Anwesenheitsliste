# Full-stack Example: Next.js + FastAPI + SQLite

This repository contains a minimal full-stack setup:

* **Frontend** – Next.js 14, React, TypeScript, Tailwind CSS, shadcn/ui  
* **Backend** – FastAPI (Python)  
* **Database** – SQLite  

---

## Quick start

```bash
# 1. Frontend
cd frontend
npm install
npm run dev     # http://localhost:3000
```

```bash
# 2. Backend  (in a new terminal)
cd backend
python -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt
uvicorn main:app --reload   # http://localhost:8000
```

Open http://localhost:3000 in your browser and play with the todo list.

You can expand this scaffold with Docker, authentication, Prisma/SQLAlchemy migrations, etc.
