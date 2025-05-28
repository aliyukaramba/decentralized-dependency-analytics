# API Documentation for Decentralized Dependency Analytics Tool

## API Endpoints

### 1. Analyze Dependencies
- **Endpoint**: `/analyze`
- **Method**: `POST`
- **Description**: Analyzes a project's dependencies using `depcheck` and returns a JSON dependency graph.
- **Request Body**:
  ```json
  {
    "repositoryUrl": "string" // URL of the repository to analyze
  }
  ```
- **Response**:
  - **200 OK**: Returns a JSON object containing the dependency graph.
  - **400 Bad Request**: If the request body is invalid.
  - **500 Internal Server Error**: If an error occurs during analysis.

### 2. Tea Rank
- **Endpoint**: `/teaRank`
- **Method**: `GET`
- **Description**: Queries the Tea Protocol to fetch the project's teaRank and TEA token balance.
- **Response**:
  - **200 OK**: Returns a JSON object with teaRank and TEA token balance.
  - **404 Not Found**: If the project is not registered with the Tea Protocol.
  - **500 Internal Server Error**: If an error occurs while fetching data.

### 3. Vulnerabilities
- **Endpoint**: `/vulnerabilities`
- **Method**: `GET`
- **Description**: Checks the project's dependencies for vulnerabilities using a placeholder API or the Tea Protocol's vulnerability reporting system.
- **Response**:
  - **200 OK**: Returns a JSON object with a list of vulnerabilities found.
  - **500 Internal Server Error**: If an error occurs during the vulnerability check.

## Usage
To use these endpoints, ensure your server is running and make requests to the appropriate URLs. For example, if your server is running on `http://localhost:3000`, you would access the endpoints as follows:
- Analyze: `http://localhost:3000/analyze`
- Tea Rank: `http://localhost:3000/teaRank`
- Vulnerabilities: `http://localhost:3000/vulnerabilities`

## Notes
- Ensure that you have the necessary permissions and API keys configured in your environment variables for accessing the Tea Protocol.
- The `/analyze` endpoint requires a valid repository URL to function correctly.