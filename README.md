# Assessment 2 - Advanced Git & DevOps

## Student Information
- **Student:** Chamod Ravishank - ITBIN-2211-0049 - Role: Developer

## Project Description
This project was completed for Assessment 2 - Advanced Git & DevOps. TaskFlow Pro is a simple, responsive to-do list application designed to help students and professionals manage daily tasks effectively. It includes task creation, completion tracking, deletion, and filtering so users can focus on work without losing momentum.

## Live Deployment
🔗 **Live URL:** https://chamodravishank.github.io/itbin-2211-0049-devops-assignment/

> This project is configured for GitHub Pages deployment and can be published from the `main` branch after linking the repository to GitHub Pages.

## Technologies Used
- HTML5 / CSS3 / JavaScript
- GitHub Actions (CI/CD)
- GitHub Pages

## Features
- **Task creation**: Add new to-do items quickly using the input field.
- **Task completion tracking**: Mark tasks complete or active as needed.
- **Task filtering**: View all tasks, only active tasks, or only completed tasks.
- **Local persistence**: Save priorities in the browser using localStorage.
- **Responsive interface**: Works across desktop and mobile screen sizes.

## Branch Strategy
This project follows a simplified Git Flow approach:
- `main` - Production-ready branch used for deployment.
- `develop` - Integration branch for validated changes before release.
- `feature/*` - Feature branches used to isolate updates and improvements.

## Individual Contributions
### Chamod Ravishank
- Created the repository structure and baseline development setup.
- Designed the task planner interface and interaction flow.
- Implemented localStorage-based persistence and task filtering logic.
- Configured GitHub Actions CI and deployment workflows.
- Documented the setup, features, and branch strategy in this README.

## Setup & Installation Instructions

### Prerequisites
- Node.js 20 or higher
- Git installed locally

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/[username]/itbin-2211-0049-devops-assignment.git
   ```
2. Navigate into the directory:
   ```bash
   cd itbin-2211-0049-devops-assignment
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Run the local preview:
   ```bash
   python -m http.server 8000
   ```
5. Open `http://localhost:8000` in the browser.

### CI/CD Deployment Process
The GitHub Actions pipeline runs automatically on pushes to `main`, `develop`, and `feature/**` branches. It installs dependencies, validates JavaScript syntax, builds the project, and then deploys the static output to GitHub Pages when changes land on `main`.

### Challenges & Resolutions
A key challenge was aligning the repository workflow with the assignment requirements while maintaining a clean DevOps process for Assessment 2 - Advanced Git & DevOps. This was resolved by using a `main` production branch, a `develop` integration branch, and feature-specific branches for each task area, then documenting the process clearly in the repository and project workflow.

## Build Status
![CI Badge](https://github.com/[username]/[repo]/actions/workflows/ci.yml/badge.svg)
![Deploy Badge](https://github.com/[username]/[repo]/actions/workflows/deploy.yml/badge.svg)

## Git Workflow Notes
- `main` is protected for production deployment.
- `develop` is used for integration testing.
- Feature work happens in branches such as `feature/todo-ui` and `feature/ci-cd`.
- Merge conflicts are resolved locally before merging changes back into the development branch.

## Verification Checklist
- [x] Public repository configuration ready for GitHub Publishing
- [x] Documentation completed in README
- [x] CI workflow available in `.github/workflows/ci.yml`
- [x] Deployment workflow available in `.github/workflows/deploy.yml`
- [x] Frontend app implemented and responsive
- [x] Persistent task storage configured with localStorage

## Design Notes
- Built for fast task tracking and a clean single-page workflow.
