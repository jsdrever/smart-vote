import React, { useState } from 'react';

const Home = () => {
  // function SearchBar({ onFormSubmit }) {
    // Our state variable for the search term. Defaults to "microsoft/vscode".
  //   const [term, setTerm] = useState('microsoft/vscode');
      const [searchInput, setSearchInput] = useState('');
  
    const handleFormSubmit = async (e) => {
      e.preventDefault();
  
      // onFormSubmit(searchInput);
      try {
          // const response = await fetch('url goes here');
          // const data = await response.json();
          // console.log(data);
          console.log(searchInput);
      }
      catch(err) {
          console.error(err);
      }
    };
    //! We declare a state variable that is an array called `issues` and a function to update it. 
    //! this is for the searchbar i think/hope
    // const [issues, setIssues] = useState([]);

    //! When the page loads, set the document title to something specific to this app.
    //! This only runs once because of our empty dependency array.
    // useEffect(() => {
    //   document.title = 'GitHub issues';
    // }, []);
  
    //! Helper function that preforms an API request and sets the `issues` array to a list of issues from GitHub
    // const getRepoIssues = (repo) => {
    //   let issuesURL = `https://api.github.com/repos/${repo}/issues?direction=asc`;
    //   console.log('issuesURL', issuesURL);
    //   fetch(issuesURL)
    //     .then((res) => res.json())
    //     .then((response) => setIssues(response));
    // };
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-cover bg-center" style={{ backgroundImage: 'url(/images/thumb-1920-554598senate.jpg)' }}>
        <div className="bg-blue-900 bg-opacity-75 p-8">
          <h1 className="text-4xl font-bold text-white mt-10">Welcome to Informed Voter!</h1>
          <p className="text-lg text-white mt-4">
            Introducing our new app, 'Informed Voter'! With Informed Voter, you can easily search for senators and discover detailed information about their voting 
            history on various bills. Stay informed about your representatives' decisions and gain valuable insights into their voting patterns.
          </p>
        </div>
        <div className="bg-blue-900 bg-opacity-75 p-8 mt-8">
          <p className="text-lg text-white">
            Using Informed Voter is simple and intuitive. Just enter the name of a senator or use advanced search filters to narrow down your results. Once you find a 
            senator, you can explore their profile, which includes their biographical information, party affiliation, and a comprehensive list of bills they have voted on.
          </p>
          <p className="text-lg text-white mt-4">
            With a clear indication of 'Yes' or 'No' for each bill, you can quickly understand where the senator stands on important issues. Stay up to date with the latest 
            legislation and make informed decisions by understanding your representatives' voting records.
          </p>
          <p className="text-lg text-white mt-4">
            In addition to individual senator profiles, Informed Voter provides an overview of bills currently under consideration in the Senate. You can browse bills by 
            category, status, or search for specific keywords. This helps you stay informed about the legislative agenda and track the progress of bills that matter to you.
          </p>
          <p className="text-lg text-white mt-4">
            Informed Voter empowers citizens to engage in the democratic process by promoting transparency and accountability. Whether you're a concerned citizen, a 
            political enthusiast, or a researcher, Informed Voter is your go-to resource for exploring the voting history of senators and gaining valuable insights into
            the legislative landscape.
          </p>
        </div>
        <div className="mt-8 w-2/3 flex justify-center">
          <form className="ui form" onSubmit={handleFormSubmit}>
            <div className="flex">
              <input
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                type="text"
                className="flex-1 px-6 py-3 rounded-l-lg focus:outline-none bg-white text-lg"
                placeholder="Search for a Senator"
              />
              <button className="px-6 py-3 bg-red-800 rounded-r-lg focus:outline-none text-white text-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2a8 8 0 100 16A8 8 0 0010 2zm0 1a7 7 0 110 14A7 7 0 0110 3zm4.95 13.23a1 1 0 01-1.41 1.41l-2.83-2.83a5 5 0 111.41-1.41l2.83 2.83zM13 10a3 3 0 11-6 0 3 3 0 016 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    );
    
};

export default Home;
