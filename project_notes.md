## Available Scripts

In the project directory, you can run:

### `npm start`

### Brief

We would like you to create a web application that produces some kind of user management functionality. The application should be able to:

- Display the users in a list/table. ✅
  - Opted for creating a list/ card view component to display employee info for employees stored in a database
- Have the ability to create users. (Had working/ not fully functional)
  - Added a AddEmployee component which will allow user to input employee information and send to the database to display in list/ card component
- Have the ability to update users. (Back End/ Postman only)
  - Added a button component to access PATCH route to update employee details
  - Incomplete
- Have the ability to delete users.
  - Added a delete button to render in each card to delete that emplyee entry

Context:

- Creating a user management portal for an admin/ or designated person to manage employee status and find reporting lines for a list of employees in a fictional organisation.

- Added an individual AddEmployee component at top of page with:

  - Inputs for required employee information so user knows what information to enter
  - submit button for form completion

- Created list component to display data for user

  - list renders number of cards in list format dependent on how many employee records are stored in the database

- Created a back end database with working routes for GET/POST/PATCH & DELETE
  - Data the user needs to add, view, edit, or delete can then be accessed through the Front End of application (User.Management)

-- See below for Back End repo/ .env file

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

--Notes

### 404 Errors/ BE tests in Postman running fine?

- Initially I had trouble with getting first GET useEffect route working in the front end- I noticed I was using the same port number for FE/BE to run to app locally.
  - This took some time to spot as I was initially changing the code in the FE assuming a syntax error in fetchEmployees
  - Changing Pool in BE repo then solved error and was able to load data from PostGresSQL (ElephantSQl) & display in front end.

### POST/ addEmployee functionality

- I had a branch with POST working, however, I noticed it was firing before being called via handleSubmit function- and wanted to fix this issue to avoid employees being added without user input.
- Changing the dependency to wait for newEmployee seemed to intially work- however, I then made a change to reset the input fields to null after calling handleSubmit (so the text inputted was no longer there for user feedback to confirm post was submitted)
- Unfortunately this, and trying to fix the dependency issue led to causing an issue with post altogether which I was unable to resolve in the timeframe I had allowed for working on the test.

- I reverted my branch back to a step before making these changes to try to start again on the POST function- but haven't been able to resolve at this stage.

### PATCH/ DELETE

- Tested and these Models/ Routes are working in the BE (ran several saved route tests in Postman for each patch edit option/ and also delete.)
- Implementing these features would have come after fixing the addEmployee issue- but unfortunately I ran out of time to implement.

- I have added the buttons to each employee card which is rendered- so that a user would know which button (i.e. to edit or delete) would correspond to which employee record- without having to require an ID to select the right employee record to edit or delete.
  - My plan was to create two components for the seperate buttons, import into card to render along with each employee entry in the list (and to make them a reusable component where possible).

### Overall Reflections

- From the test- I identified (as I think we discussed in the interview) that with React (Front End understanding)- I need to work on understanding the component tree/ hierarchy for passing state/ props through parent/ child relationships. (during the test I found I needed to move state up or down, or revisit where I was passing object names instead of prop names destructured into child components).

- I had an initial UI hierarchy sketched for the Front End- however, allocating a bit more time to functions and behaviours in this layout may have helped to avoid some of the technical issues I ran into which help up finishing the test in time.

- useEffect dependencies (particularly with the POST function) tripped me up, and in attempting to resolve this issue lost track of tests/ possible fixes I had tested which resulted in having to revert back to a previous commit.

  - On reflection, taking more time to break down the task and recording tests done would have helped to maybe fix this issue in time.

- Intereting the test brief
- I really enjoyed the openess of the test brief- and felt I had created a rationale for laying out the FE/ BE in a way that was solving the specific problem I was trying to address around user management (ie. a user who needs to keep track of an org hierarchy in a small team, update roles, and update current employees).
- I had tested a table layout for the employee records initially on another branch- however, when deciding to add edit/delete buttons to the individual entries- I felt a card/ list layout would better work for a user to interact with the data intuitively.
