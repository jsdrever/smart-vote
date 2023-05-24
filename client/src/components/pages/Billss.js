import React, { useEffect, useState } from 'react';

const Billss = () => {
    const [bills, setBills] = useState([]);

  useEffect(() => {
    const fetchBills = async () => {
      try {
        const apiKey = 'cxscIDM6F7yNhGWcXHehmlLYMP8rZ31FAjKEj1Ht';
        const response = await fetch("https://api.propublica.org/congress/v1/bills/search.json?query=megahertz", {
          headers: {
            "X-API-Key": apiKey
          }
        });
        const data = await response.json();
        setBills(data.results[0].members); //members = ???? what is this path
      } catch (error) {
        console.error('Error fetching bills:', error);
      }
    };

    fetchBills();
  }, []);

  return (
    <div className="bg-gray-100 p-5 style={{ backgroundImage: 'url(/images/senate_chamber.jpeg)">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {bills.length > 0 ? (
          Object.values(
            bills.reduce((acc, bill) => {
              const { bill_id, title, votes, congress } = bill; 
              // const BillName = bill_id.includes('1st Class') ? '1' : '2'; I dont think i need this one

              // Create or update the bill
              if (!acc[bill_id]) {
                acc[bill_id] = {
                  bill_id,
                  bills: [{ bill_id, title, votes, congress }],
                };
              } else {
                acc[bill_id].bills.push({ bill_id, title, votes, congress });
              }

              return acc;
            }, {})
          ).map(billGroup => (
            <div key={billGroup.bill} className="max-w-sm rounded shadow-md border-4 border-red-800 p-5">
              <h1 className="text-blue-900 text-xl md:text-2xl font-bold text-center mb-4">{billGroup.bill}</h1>
              
              <ul className="text-red-800 text-center">
                {billGroup.bills.map((bills, index) => (
                  <li key={`${bills.bill_id}-${bills.title}-${bills.votes}`}>
                    <a href="#">
                      Bill {bills.bill_id}: {bills.title} {bills.votes} {bills.congress}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))
        ) : (
          <p>Loading bills...</p>
        )}
      </div>
    </div>
  );
}

export default Billss;