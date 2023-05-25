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
          Object.values(
            senators.reduce((acc, senator) => {
              const { state, title, first_name, last_name, url, party } = senator;
              const senatorClass = title.includes('1st Class') ? '1' : '2';

              // Create or update the senator for the state
              if (!acc[state]) {
                acc[state] = {
                  state,
                  senators: [{ senatorClass, first_name, last_name, url, party }],
                };
              } else {
                acc[state].senators.push({ senatorClass, first_name, last_name, url, party });
              }

              return acc;
            }, {})
          ).map(stateGroup => (
            <div key={stateGroup.state} className="max-w-sm rounded shadow-md border-4 border-red-800 p-5">
              <h1 className="text-blue-900 text-xl md:text-2xl font-bold text-center mb-4">{stateGroup.state}</h1>
              <ul className="text-red-800 text-center">
                {stateGroup.senators.map((senator, index) => (
                  <li key={`${senator.senatorClass}-${senator.first_name}-${senator.last_name}-${senator.url}-${senator.party}`}>
                    <a href={senator.url} target="_blank">
                      Senator {senator.party}: {senator.first_name} {senator.last_name}
                    </a>
                  </li>
                ))}
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
