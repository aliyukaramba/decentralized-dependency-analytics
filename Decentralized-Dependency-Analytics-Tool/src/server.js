const express = require('express');
const depcheck = require('depcheck');
const Web3 = require('web3');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(express.json());

// API route to analyze project dependencies
app.post('/analyze', (req, res) => {
    const { projectPath } = req.body;

    depcheck(projectPath || '.', (unused) => {
        res.json({
            dependencies: unused.dependencies,
            devDependencies: unused.devDependencies,
            missing: unused.missing,
        });
    });
});

// API route to get teaRank and TEA token balance
app.get('/teaRank', async (req, res) => {
    const web3 = new Web3(new Web3.providers.HttpProvider(process.env.TEA_PROVIDER_URL));
    const contract = new web3.eth.Contract([], process.env.TEA_CONTRACT_ADDRESS); // Placeholder for contract ABI

    try {
        const teaRank = await contract.methods.getTeaRank().call();
        const teaBalance = await contract.methods.balanceOf(process.env.WALLET_ADDRESS).call();
        res.json({ teaRank, teaBalance });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch data from Tea Protocol' });
    }
});

// API route to check for vulnerabilities
app.get('/vulnerabilities', (req, res) => {
    // Placeholder for vulnerability checking logic
    res.json({ vulnerabilities: [] });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});