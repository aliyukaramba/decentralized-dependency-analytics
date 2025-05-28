const { fetchTeaRank, fetchTEABalance, registerProject } = require('../src/tea');
const axios = require('axios');

jest.mock('axios');

describe('Tea Protocol Integration', () => {
    const mockContractAddress = '0x1234567890abcdef1234567890abcdef12345678';

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('fetchTeaRank should return teaRank', async () => {
        const teaRankResponse = { data: { teaRank: 42 } };
        axios.get.mockResolvedValueOnce(teaRankResponse);

        const teaRank = await fetchTeaRank(mockContractAddress);
        expect(teaRank).toBe(42);
        expect(axios.get).toHaveBeenCalledWith(`https://api.tea.xyz/teaRank/${mockContractAddress}`);
    });

    test('fetchTEABalance should return TEA balance', async () => {
        const teaBalanceResponse = { data: { balance: 100 } };
        axios.get.mockResolvedValueOnce(teaBalanceResponse);

        const balance = await fetchTEABalance(mockContractAddress);
        expect(balance).toBe(100);
        expect(axios.get).toHaveBeenCalledWith(`https://api.tea.xyz/balance/${mockContractAddress}`);
    });

    test('registerProject should successfully register the project', async () => {
        const registerResponse = { data: { success: true } };
        axios.post.mockResolvedValueOnce(registerResponse);

        const result = await registerProject('Decentralized Dependency Analytics Tool', mockContractAddress);
        expect(result).toBe(true);
        expect(axios.post).toHaveBeenCalledWith('https://api.tea.xyz/register', {
            name: 'Decentralized Dependency Analytics Tool',
            contractAddress: mockContractAddress,
        });
    });

    test('registerProject should handle registration failure', async () => {
        const registerResponse = { data: { success: false } };
        axios.post.mockResolvedValueOnce(registerResponse);

        const result = await registerProject('Decentralized Dependency Analytics Tool', mockContractAddress);
        expect(result).toBe(false);
    });
});