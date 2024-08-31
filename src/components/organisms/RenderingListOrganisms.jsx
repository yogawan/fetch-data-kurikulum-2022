import React, { useEffect, useState } from 'react';
import fetchData from '../../service/api/dataFetching';

const RenderingListOrganisms = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetchData();
        setData(result);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    getData();
  }, []);

  if (loading) {
    return <div className='loading'>Loading...</div>;
  } if (error) {
    return <div className='loading'>Error: {error}</div>;
  };

  console.log(data)
  
  return (
    <div>
        <div className="project">
            {data.s1.map((item) => (
                <div className="content">
                    <p>{item.code}</p>
                    <p>{item.name}</p>
                    <p>{item.sks}</p>
                    <p>{item.tf}</p>
                </div>
            ))}
        </div>
    </div>
  );
};

export default RenderingListOrganisms;
