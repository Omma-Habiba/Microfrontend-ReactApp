import React, { useEffect, useState } from 'react';
import { fetchMockData } from './api';

const MockDataComponent = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchMockData();
        setData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div style={dataContainerStyle}>
      <h3>Voici les membres de notre association :</h3>
      <ul style={dataListStyle}>
        {data.slice(0, 10).map(post => (
          <li key={post.id} style={dataItemStyle}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

const dataContainerStyle = {
  padding: '20px',
  fontFamily: 'Arial, sans-serif'
};

const dataListStyle = {
  listStyleType: 'none',
  padding: '0'
};

const dataItemStyle = {
  backgroundColor: '#f4f4f4',
  margin: '10px 0',
  padding: '10px',
  borderRadius: '5px'
};

export default MockDataComponent;
