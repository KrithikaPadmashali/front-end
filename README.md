# Credexa Frontend (module-by-module scaffold)

This repository contains a module-by-module React frontend scaffold for the Credexa UI shown in the attachments.

Modules implemented (placeholders & working components):
- Login & Signup (auth simulated in-memory)
- FD Calculator (public — works without login) with chart visualization
- Products & Pricing (landing / explore area)
- Dashboard (FD module & customer module — protected route)

Install & run (Windows PowerShell):

```powershell
npm install
npm run dev
```

Open http://localhost:5173

Notes:
- This scaffold uses React Router v6 and Chart.js via react-chartjs-2.
- Auth is simulated in-memory; replace with real API calls for production.
"# front-end" 
