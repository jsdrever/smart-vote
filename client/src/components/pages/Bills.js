import React, { useEffect, useState } from 'react';

const Billss = () => {
    const [bills, setBills] = useState([]);
    // const [votes, setVotes] = useState([]);

  useEffect(() => {
    const fetchBills = async () => {
      try {
        const apiKey = process.env.REACT_APP_API_KEY;
        const response = await fetch("https://api.propublica.org/congress/v1/bills/search.json?active=true", {
          headers: {
            "X-API-Key": apiKey
          }
        });
        const data = await response.json();
        setBills(data.results[0].bills);
        console.log(data.results[0].bills);
      } catch (error) {
        console.error('Error fetching bills:', error);
      }  
    };

    fetchBills();
  }, []);

  // useEffect(() => {
  //   const fetchVotes= async () => {
  //     try {
  //       const apiKey = 'cxscIDM6F7yNhGWcXHehmlLYMP8rZ31FAjKEj1Ht';
  //       const response = await fetch("https://api.propublica.org/congress/v1/senate/votes/recent.json", {
  //         headers: {
  //           "X-API-Key": apiKey
  //         }
  //       });
  //       const data = await response.json();
  //       setVotes(data);
  //       console.log(data);
  //     } catch (error) {
  //       console.error('Error fetching votes:', error);
  //     }  
  //   };

  //   fetchVotes();
  // }, []);

  return (
    <div className="bg-gray-100 p-5 style={{ backgroundImage: 'url(/images/senate_chamber.jpeg)">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {bills.length > 0 ? (
          Object.values(
            bills.reduce((acc, bill) => {
              const { bill_id, title, votes, congress, congressdotgov_url, sponsor_name, sponsor_party, sponsor_state } = bill; 
              // const BillName = bill_id.includes('1st Class') ? '1' : '2'; I dont think i need this one

              // Create or update the bill
              if (!acc[bill_id]) {
                acc[bill_id] = {
                  bill_id,
                  bills: [{ bill_id, title, votes, congress, congressdotgov_url, sponsor_name, sponsor_party, sponsor_state }],
                };
              } else {
                acc[bill_id].bills.push({ bill_id, title, votes, congress, congressdotgov_url, sponsor_name, sponsor_party, sponsor_state });
              }

              return acc;
            }, {})
          ).map(billGroup => (
            <div key={billGroup.bill} className="max-w-sm rounded shadow-md border-4 border-red-800 p-5">
              <h1 className="text-blue-900 text-xl md:text-2xl font-bold text-center mb-4">Bill {billGroup.bill_id}</h1>
              
              <ul className="text-red-800 text-center">
                {billGroup.bills.map((bills, index) => (
                  <li key={`${bills.bill_id}-${bills.title}-${bills.votes}-${bills.congressdotgov_url}-${bills.sponsor_name}-${bills.sponsor_party}-${bills.sponsor_state}`}>
                    <a href={bills.congressdotgov_url} target="_blank">
                      Description: {bills.title} <br></br><br></br>
                      Sponsor: {bills.sponsor_name} <br></br>
                      Sponsor Party: {bills.sponsor_party} <br></br>
                      Sponsor State: {bills.sponsor_state} <br></br>                    
                      Senate Votes: {bills.votes} {bills.congress} <br></br>
                      Yay: 50 Nay: 50
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
