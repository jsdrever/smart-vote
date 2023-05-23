import React, { useEffect, useState } from 'react';

const Senators = () => {
  const [senators, setSenators] = useState([]);

  useEffect(() => {
    const fetchSenators = async () => {
      try {
        const response = await fetch('https://api.placeholder.com/senators'); // replace with actual API endpoint https://api.congress.gov/v3/member?api_key=7JqeXnx57GmlOSkwahRXM6cia6X57mpXpdJ29n2v
        const data = await response.json();
        setSenators(data);
      } catch (error) {
        console.error('Error fetching senators:', error);
      }
    };

    fetchSenators();
  }, []);

  return (
    <div className="bg-gray-100 p-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {senators.map(senator => ( //didn't know the actual property names for now
          <div key={senator.id} className="max-w-sm rounded shadow-md border-4 border-red-800 p-5">
            <h1 className="text-blue-900 text-xl md:text-2xl font-bold text-center mb-4">{senator.state}</h1>
            <ul className="text-red-800 text-center">
              {senator.names.map(name => (
                <li key={name}><a href="#">{name}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Senators;
