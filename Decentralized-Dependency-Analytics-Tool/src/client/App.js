import React, { useState } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import './styles/app.css';

const App = () => {
    const [repoUrl, setRepoUrl] = useState('');
    const [dependencyGraph, setDependencyGraph] = useState(null);
    const [teaRank, setTeaRank] = useState(null);
    const [teaBalance, setTeaBalance] = useState(null);
    const [vulnerabilities, setVulnerabilities] = useState([]);

    const analyzeDependencies = async () => {
        try {
            const response = await axios.post('/analyze', { repoUrl });
            setDependencyGraph(response.data);
        } catch (error) {
            console.error('Error analyzing dependencies:', error);
        }
    };

    const fetchTeaRank = async () => {
        try {
            const response = await axios.get('/teaRank');
            setTeaRank(response.data.teaRank);
            setTeaBalance(response.data.teaBalance);
        } catch (error) {
            console.error('Error fetching teaRank:', error);
        }
    };

    const fetchVulnerabilities = async () => {
        try {
            const response = await axios.get('/vulnerabilities');
            setVulnerabilities(response.data);
        } catch (error) {
            console.error('Error fetching vulnerabilities:', error);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        analyzeDependencies();
        fetchTeaRank();
        fetchVulnerabilities();
    };

    return (
        <div className="app">
            <h1>Decentralized Dependency Analytics Tool</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter repository URL or package name"
                    value={repoUrl}
                    onChange={(e) => setRepoUrl(e.target.value)}
                    required
                />
                <button type="submit">Analyze</button>
            </form>
            {dependencyGraph && (
                <div>
                    <h2>Dependency Graph</h2>
                    <Bar data={dependencyGraph} />
                </div>
            )}
            {teaRank !== null && (
                <div>
                    <h2>Tea Rank: {teaRank}</h2>
                    <h2>TEA Token Balance: {teaBalance}</h2>
                </div>
            )}
            {vulnerabilities.length > 0 && (
                <div>
                    <h2>Vulnerabilities</h2>
                    <ul>
                        {vulnerabilities.map((vuln, index) => (
                            <li key={index}>{vuln}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default App;