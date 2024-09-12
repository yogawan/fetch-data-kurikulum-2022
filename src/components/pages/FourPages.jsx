import React, { useEffect, useState } from 'react';
import fetchData from '../../service/api/dataFetching';
import NavigationMolecules from '../molecules/NavigationMolecules';
import NavigationMenuMolecules from '../molecules/NavigationMenuMolecules';

const FourPages = () => {
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
    return <div className='loading'>Fetching data from PUSKOM UTY...</div>;
  } if (error) {
    return <div className='loading'>Error: {error}</div>;
  };

  return (
    <div>
        <h2>Semester 4</h2>
        <NavigationMenuMolecules></NavigationMenuMolecules>
        <NavigationMolecules></NavigationMolecules>
        <div className="container">
            <div className="card">
                {data.s4.map((item, index) => (
                    <div key={index} className="content">
                        <div className="item">
                            <p className='code'>{item.code}</p>
                            <p className='i'>Kode_MK</p>
                        </div>
                        <div className="item">
                            <p className='name'>{item.name}</p>
                            <p className='i'>Nama_MK</p>
                        </div>
                        <div>
                          <hr />
                        </div>
                        <div className="item">
                            <p className='sks'>{item.sks}</p>
                            <p className='i'>SKS</p>
                        </div>
                        <div className="item">
                            <p className='tf'>{item.tf}</p>
                            <p className='i'>W/P</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
};

export default FourPages;
