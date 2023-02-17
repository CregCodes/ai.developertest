# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

We would like you to create a web application that produces some kind of user management functionality. The application should be able to:

- Display the users in a list/table.
- Have the ability to create users.
- Have the ability to update users.
- Have the ability to delete users.

Context:

- Creating a user management portal for an admin/ or designated person to manage employee status and find reporting lines for a list of employees in a fictional organisation.

Checklist:

- Initialised a back end repo for handling database queries through the front end of the application.
  - Created GET route/ Model function
    - Admin can view all employees currently in the database
  - Created POST route/ model function
    - Admin can add a new employee to the database
  - Created DELETE/ PATCH route handlers & model functions for admin to:
    - delete an employee from the database where necessary
    - edit an employee's details where necessary (e.g. if a role or reporting line changes)

Node.js as backend implementations via a RESTful API

- Created Back End implementatons

  - Set up Back End Repo:
  - Repo Link: https://github.com/CregCodes/User_Management_Test_BE.git

  - Created PostGresSQL Database

    - Pool/ PostGres URL added to a .env file

    PostGres connection: postgres://tajflcfz:ibLX6nXVjA_7UhIeuFRNuslNDl-uM7bV@manny.db.elephantsql.com/tajflcfz

Testing

- Routes/ Models tested in Postman
  - CRUD routes tested and functional
