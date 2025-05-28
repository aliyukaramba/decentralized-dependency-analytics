# Decentralized Dependency Analytics Tool

## Overview
The Decentralized Dependency Analytics Tool is an open-source project designed to analyze and visualize software project dependencies, track contributions, and manage rewards through the Tea Protocol. This tool aims to provide developers with insights into their project's dependencies, vulnerabilities, and community contributions.

## Project Setup
To get started with the project, follow these instructions:

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/Decentralized-Dependency-Analytics-Tool.git
   cd Decentralized-Dependency-Analytics-Tool
   ```

2. **Install Dependencies**
   Make sure you have Node.js (v18 or higher) installed. Then, run:
   ```bash
   npm install
   ```

3. **Environment Variables**
   Create a `.env` file in the root directory and add your Tea Protocol API keys and contract addresses:
   ```
   TEA_CONTRACT_ADDRESS=your_contract_address
   TEA_API_KEY=your_api_key
   ```

4. **Run the Application**
   Start the backend server:
   ```bash
   npm start
   ```
   In a separate terminal, run the frontend:
   ```bash
   npm run dev
   ```

## Tea Protocol Integration
To integrate with the Tea Protocol, ensure you have the `tea.yaml` file configured correctly. This file contains the project's constitution and is necessary for registration with the Tea Protocol.

### Registering with Tea Protocol
To register your project with the Tea Protocol, run the following command:
```bash
npm run tea-register
```
This will commit the `tea.yaml` file to your repository.

## Contribution Guidelines
We welcome contributions from the community! Please follow these guidelines when contributing:

- Fork the repository and create a new branch for your feature or bug fix.
- Ensure your code adheres to the project's coding standards.
- Write tests for your changes.
- Submit a pull request with a clear description of your changes.

### Tea Community Contributions
If you are a member of the Tea community, we encourage you to contribute by staking and reporting vulnerabilities. Your contributions help improve the tool and the community.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Code of Conduct
Please read our [Code of Conduct](CODE_OF_CONDUCT.md) to understand our expectations for participant behavior.

## Additional Notes
If your project achieves a teaRank above 30, consider applying for Tea’s $250K grant program to further support your development efforts.

For more information on the Tea Protocol, visit [Tea Protocol Documentation](https://docs.tea.xyz).