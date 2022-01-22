# EC2 Dashboard

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Running the project

In the project directory, you can run:

### `npm install`

This installs any required npm packages

### `npm start`

This starts the project on your local machine

# About

I originally had each instance coded as a component, but I realized that was unnecessary because the data being displayed
will be read-only, meaning there won't be a need for state management. The table, pagination, and sorting was created using
an npm package called react-bootstrap-table-next, and react-bootstrap-table2-paginator. I used AWS Amplify for the user
authentication and cloud hosting.