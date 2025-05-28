const request = require('supertest');
const app = require('../src/server'); // Adjust the path if necessary

describe('API Endpoints', () => {
  it('should analyze project dependencies', async () => {
    const response = await request(app).get('/analyze?repoUrl=https://github.com/example/repo');
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('dependencies');
  });

  it('should fetch teaRank and TEA token balance', async () => {
    const response = await request(app).get('/teaRank?projectId=exampleProjectId');
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('teaRank');
    expect(response.body).toHaveProperty('teaBalance');
  });

  it('should check for vulnerabilities', async () => {
    const response = await request(app).get('/vulnerabilities?repoUrl=https://github.com/example/repo');
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('vulnerabilities');
  });
});