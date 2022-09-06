import React, { useState } from 'react';
import Header from './Header';
import Bio from './pages/Bio';
import Deployed from './pages/Deployed';
// import Undeployed from './pages/Undeployed';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

const deployments = [
  {
    deployment: "https://ilw11notetaker.herokuapp.com/",
    title: "Note Taker",
    desc: "First application deployed to Heroku. Simple note taker with the ability to save and delete notes. Uses Javascript to read and write from a json file to store user notes.",
    repo: "https://github.com/HeartSleeves/ILW11NoteTaker",
  },

  {
    deployment: "https://ilw14techblog.herokuapp.com/",
    title: "Tech Blog",
    desc: "Fully deployed, basic social website hosted on Heroku using JawsDB and MySql database. Page displays are created through Handlebars, and database requests are handled through Express JS and Node.",
    repo: "https://github.com/HeartSleeves/ILW14TechBlog",
  },

  {
    deployment: "https://heartsleeves.github.io/Lovegood-Password-Gen/",
    title: "Password Generator",
    desc: "One of my earliest projects. A password generator using simple Javascript to select random characters from an array. The user can choose the password length disallow symbols in the final password.",
    repo: "https://github.com/HeartSleeves/Lovegood-Password-Gen",
  },
  {
    deployment: "https://love-ivy.github.io/ILCodingQuiz/",
    title: "Javascript Quiz",
    desc: "This coding quiz adds and removes classes to navigate between pages. A global timer is used to track user score. Time is subracted for wrong answers and the quiz ends when the timer reaches 0. High scores are saved utilizing local storage and displayed in descending order.",
    repo: "https://github.com/Love-Ivy/ILCodingQuiz",
  },
  {
    deployment: "https://love-ivy.github.io/ILW5Schedule/",
    title: "Daily Schedule",
    desc: "First use of third-party software. This webpage uses moment.js to get the current local time and date. Each hour block will change color to can be saved to local storage.",
    repo: "https://github.com/Love-Ivy/ILW5Schedule",
  },
  {
    deployment: "https://echandlerdavis.github.io/Project-1-Group-7/",
    title: "Pet adoption shelter search",
    desc: "First collaborative project and use of API fetch requests. The search bar uses the Google Places API to autocomplete, limited to localities. That information is then sent to the Petfinder API to request organizations in the surrounding area. Those organizations are then displayed in order of distance to the selected search area.",
    repo: "https://github.com/echandlerdavis/Project-1-Group-7",
  },
  {
    deployment: "https://love-ivy.github.io/ILW6Weather/",
    title: "Weather Dashboard",
    desc: "This webpage serves as a tool to find current weather forecasts in a chosen city. When the user clicks the search button, the OpenWeather Geocoding API is called. The search field repopulates with the specific city found, and the search is saved and displayed in a list of previous searches. The One Call 1.0 API then returns the current  weather, displayed in the main box, and a five day forecast displayed in cards. The date and units used are localized based on country.",
    repo: "https://github.com/Love-Ivy/ILW6Weather",
  },
];

// const undeployed = [
//   {
//     title: "Social Network API",
//     repo: "https://github.com/HeartSleeves/ILW18API",
//     desc: 'API and endpoints for a social network application using MongoDB and Mongoose. Supports Users to add and remove Friends, post "Thoughts" and "Reactions" to those thoughts.',
//   },
//   {
//     title: "Readme Generator",
//     repo: "https://github.com/HeartSleeves/ILW9ReadmeGen",
//     desc: "An early venture into Node JS. Using the Inquirer npm package, generate a professional Readme for any project.",
//   },
//   {
//     title: "Team Profile Generator",
//     repo: "https://github.com/HeartSleeves/ILW10Team",
//     desc: "This node js application uses a looping Inquirer menu to build a development team. When complete, a styled webpage is created, displaying the project team members.",
//   },
//   {
//     title: "Employee Tracker",
//     repo: "https://github.com/HeartSleeves/ILW12EmployeeTracker",
//     desc: "Early experience with MySql. This Javascript application uses Inquirer menus to collect user information and store it to a Sql database. Supports all CRUD requests for Employees, Roles, and Departments within a company, including a self-reference to employee Managers.",
//   },
//   {
//     title: "E-commerce Back-end",
//     repo: "https://github.com/HeartSleeves/ILW13Commerce",
//     desc: "MySql database and API endpoints for hosting an Ecommerce web application. Supports CRUD operations for multiple values and a junction table to add descriptive tags to products",
//   },
// ];

export default function DeployedContainer() {
  const [currentPage, setCurrentPage] = useState('Portfolio');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Bio') {
      return <Bio />;
    }
    if (currentPage === 'Portfolio') {
      return <Deployed deployments={deployments}/>;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
    </div>
  );
}