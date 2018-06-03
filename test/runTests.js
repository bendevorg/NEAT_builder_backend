require('dotenv').config();

//  Start tests
require('./auth/root');

//  Overbuff APIs
require('./overbuff/topPick');

// User registration
require('./register/registerUser');

// User deletation
require('./register/deleteUser');

//  Close connections
require('./utils/closeApp');
