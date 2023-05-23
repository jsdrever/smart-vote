import React, { useEffect, useState } from 'react';

const Senators = () => {
  const [senators, setSenators] = useState([]);

  useEffect(() => {
    const fetchSenators = async () => {
      try {
        const apiKey = 'cxscIDM6F7yNhGWcXHehmlLYMP8rZ31FAjKEj1Ht';
        const response = await fetch('https://api.propublica.org/congress/v1/116/senate/members.json', {
          headers: {
            "X-API-Key": apiKey
          }
        });
        const data = await response.json();
        setSenators(data.results[0].members);
      } catch (error) {
        console.error('Error fetching senators:', error);
      }
    };

    fetchSenators();
  }, []);

  return (
    <div className="bg-gray-100 p-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {senators.length > 0 ? (
          senators.map(senator => (
            <div key={senator.id} className="max-w-sm rounded shadow-md border-4 border-red-800 p-5">
              <h1 className="text-blue-900 text-xl md:text-2xl font-bold text-center mb-4">{senator.state}</h1>
              <ul className="text-red-800 text-center">
                <li><a href="#">Senator 1: {senator.first_name} {senator.last_name}</a></li>
                <li><a href="#">Senator 2: {senator.state_rank === 'junior' ? 'Junior' : 'Senior'} {senator.first_name} {senator.last_name}</a></li>
              </ul>
            </div>
          ))
        ) : (
          <p>Loading senators...</p>
        )}
      </div>
    </div>
  );
}

export default Senators;

