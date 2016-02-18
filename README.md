# chapter4_oauth2
Sample Express OAuth 2 integration

This project demonstrates how to implement server-side OAuth 2.0 on top of Express.

Running the project:

1. Clone this repository
2. Ensure MongoDB is running
3. Navigate to the projects folder
4. Install all modules by entering `npm install`
5. Install eslint and the [Google JS styleguide](http://google.github.io/styleguide/javascriptguide.xml) by running `npm install -D eslint eslint-config-google`
6. Start the server by typing `npm start`
7. Navigate to `http://localhost:3000` to retrieve client credentials
8. Request an Authorization Code
9. Retrieve an Access Token by providing the Authorization Code obtained in step 8
