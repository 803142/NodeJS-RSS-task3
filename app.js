const express = require('express');
const app = express();
const db = require('./db');
const user = require('./controllers/usercontroller');
const game = require('./controllers/gamecontroller')


db.sync();
db.authenticate()
    .then(console.log("Connected to DB"))
    .catch((err) => console.log(`Error: ${err}`))
app.use(express.json());
app.use('/api/auth', user);
app.use(require('./middleware/validate-session'))
app.use('/api/game', game);
app.listen(4000, function() {
    console.log("App is listening on 4000");
})