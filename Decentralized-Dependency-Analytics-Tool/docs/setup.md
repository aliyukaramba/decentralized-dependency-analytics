# Setup Instructions for Decentralized Dependency Analytics Tool

## Prerequisites
- Ensure you have [Node.js](https://nodejs.org/) (v18 or higher) installed on your machine.
- You will need a GitHub account to push the project to a repository.

## Project Setup
1. **Clone the Repository**:
   If you haven't already, clone the repository to your local machine or open it in GitHub Codespaces.

2. **Install Dependencies**:
   Navigate to the project directory and run the following command to install the necessary dependencies:
   ```
   npm install
   ```

3. **Environment Variables**:
   Create a `.env` file in the root directory and add your Tea Protocol API keys and contract addresses. This file should not be committed to the repository.

4. **Running the Backend Server**:
   To start the Express server, run:
   ```
   npm start
   ```

5. **Running the Frontend**:
   To start the React frontend, run:
   ```
   npm run dev
   ```

## Tea Protocol Registration
1. **Generate tea.yaml**:
   The `tea.yaml` file is required for registering your project with the Tea Protocol. You can generate it by running:
   ```
   npm run tea-register
   ```

2. **Commit tea.yaml**:
   Ensure that the `tea.yaml` file is committed to your repository. This file contains the constitution for your project, including the project name, description, and maintainers.

3. **Connect to Tea’s Web App**:
   Visit [Tea's Web App](https://app.tea.xyz) to monitor your project's teaRank and TEA token rewards.

## Testing
To run the unit tests for the backend and frontend, use:
```
npm test
```

## Contribution Guidelines
We welcome contributions from the community! Please refer to the `README.md` for detailed contribution guidelines, including how to report vulnerabilities and participate in the Tea community.

## Additional Notes
- If you plan to apply for Tea’s $250K grant program, ensure your project achieves a teaRank above 30.
- For any issues or feature requests, please open an issue in the GitHub repository.

This setup guide should help you get started with the Decentralized Dependency Analytics Tool. Happy coding!