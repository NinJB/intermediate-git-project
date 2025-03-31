# Intermediate Git Project - Secure Random Number Generator

## Project Overview

This repository contains a secure random number generator project. The project allows users to input a **minimum and maximum value** for number generation, ensuring security and reliability.

## Purpose

This project aims to provide a cryptographically secure random number generator that ensures security and reliability.

## Repository Structure

- `src/`
  - `main.js`: Handles event listeners and integrates with UI components.  
  - `ui.js`: Manages UI updates and interactions.  
  - `utils.js`: Handles the random number generation logic.  
  - `security-fix.js`: Ensures secure number generation.  

- `styles/`
  - `styles.css`: Contains improved UI styling.

- `index.html`: The main webpage interface.  
- `CHANGELOG.md`: Tracks version updates.  
- `README.md`: This file, explains the project.  

## Setup Instructions

To get started with this project, follow the steps below:

### Prerequisites

Ensure you have the following:  

- A code editor (e.g., VS Code)  
- A web browser (e.g., Chrome)  
- Git (if you want to clone the repository locally)  
- GitHub account (if you want to push local commits to the remote repository)  

### Steps

1. Clone the repository:  
    ```bash
    git clone https://github.com/NinJB/intermediate-git-project
    cd intermediate-git-project
    ```
2. Open `index.html` in your web browser to access the application.

## Deployment Instructions

To deploy this project on a live server, follow these steps:

### Using GitHub Pages:

1. Ensure your repository is pushed to GitHub.
2. Navigate to **Settings** in your GitHub repository.
3. Scroll down to the **Pages** section.
4. Under **Branch**, select `main`.
5. Click **Save**, and GitHub Pages will generate a live URL.

### Using a Local Server:

If you want to serve the project locally:  
1. Install a simple web server like **Live Server** (VS Code extension)
2. Open the generated `localhost` link in your browser.

## Contribution Guidelines

Follow these steps to contribute:

1. **Fork the Repository**: Click the "Fork" button on GitHub.
2. **Clone the Repository**:
    ```bash
    git clone https://github.com/NinJB/intermediate-git-project
    cd intermediate-git-project
    ```
3. **Create a New Branch**:
    ```bash
    git checkout -b <follow git naming convention when adding new branch>
    ```
4. **Make Changes**: Edit files and commit your changes.
5. **Push to GitHub**:
    ```bash
    git push origin <branch-name>
    ```
6. **Submit a Pull Request**: Go to your GitHub fork and create a pull request (PR) to the `main` branch.

### Coding Standards:

- Follow best practices in JavaScript and maintain modularity.
- Keep commits small and meaningful.
- Add comments where necessary for clarity.

## Versioning

The project follows **semantic versioning**:

- **1.0.0** - Initial version, basic random generation.
- **1.0.2** - Introduced `security-fix.js` for secure number generation.  
- **2.0.0** - Added user input for min/max values, improved UI and styles.  

## License

This project is open-source and available under the MIT License.
