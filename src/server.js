const express = require('express');
const depcheck = require('depcheck');
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// Endpoint to analyze dependencies
app.get('/analyze', async (req, res) => {
  try {
    const options = { path: '.' }; // Placeholder: analyze current directory
    const result = await depcheck('.', options);
    res.json({
      dependencies: result.dependencies,
      devDependencies: result.devDependencies,
      missing: result.missing
    });
  } catch (error) {
    console.error('Dependency analysis error:', error);
    res.status(500).json({ error: 'Failed to analyze dependencies' });
  }
});

// Endpoint to fetch teaRank (placeholder)
app.get('/teaRank', (req, res) => {
  res.json({ teaRank: 0, teaBalance: 0 }); // Mock until Tea contract is available
});

// Endpoint to check vulnerabilities (placeholder)
app.get('/vulnerabilities', (req, res) => {
  res.json({ vulnerabilities: [] }); // Mock response
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});