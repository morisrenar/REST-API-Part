

# BOILERPLATE = Node.js + Express.js 
Source code of the blog post.

#### N.B. No Client side is provided; Try Unit Testing via postMan; To check the API;

## Setup
- Create 2 databases `mainDatabase` and `testDatabase`
- Navigate to the root directory
- `npm install` to install project dependencies
- `nodemon` to run the app

## Server Side Testing
- `npm test` to run unit tests
- API testing via PostMan
- Unit testing via Mocha.js (Assertion library Should.js)

## Server Side File Structure
```bash
├── app/
│   └── controllers/
│       └── dummyController/
│           └──index.js
│       └── test/
│           └── runner.js
│   └── models/
│       └── dummyModel/
│           └── index.js
│   └── routes/
│       └── endPoints
│           └── index.js
├── config
│   └── index.js # Database configaration
├── Test # Configuration for running tests
│   └── utils.js
├── package.json
├── server.js
 ```

# License
This project is licensed under the MIT license.

If you have any questions or comments, please create an issue.