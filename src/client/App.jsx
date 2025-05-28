import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('/analyze')
      .then(response => setData(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>Dependency Analytics Dashboard</h1>
      <pre>{data ? JSON.stringify(data, null, 2) : 'Loading dependencies...'}</pre>
    </div>
  );
}

export default App;