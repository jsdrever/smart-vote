import React from 'react';

const Donation = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-cover bg-center" style={{ backgroundImage: 'url(/images/thumb-1920-554598senate.jpg)' }}>
      <div className="bg-blue-900 bg-opacity-75 p-8">
        <h1 className="text-4xl font-bold text-white mt-10 text-center">Donate to the Developers</h1>
        <p className="text-lg text-white mt-4 text-center">
          If you want to aide in improving this website, or if you simply find this website useful with helping you find the right candidates to vote for.<br></br>
          Please consider donating to the developers. Thank you!
        <div className="text-center">
        <a href="https://buy.stripe.com/test_9AQ9DAcVTc1J56ofYY" class="button" target="_blank" className="font-bold bg-black">Donate Now</a>
        </div>
        </p>
      </div>
    </div>
  );
};

export default Donation;