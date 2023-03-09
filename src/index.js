const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const models = require('./models/Users.js');
const {
	v4: uuidv4,
} = require('uuid');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGODB_URI);

app.set('views', path.join(__dirname, 'public/views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
	res.render('index');
});

app.post('/signup', (req, res) => {
	let email = req.body.email;
	let username = req.body.username;
	let password = req.body.password;
	let userid = uuidv4();

	 bcrypt.hash(password, 10, (err, hash) => {
		  const User = new models({
			UserId: userid,
			Username: username,
			Email: email,
			Password: hash,
		  })

		 	User.
	 })
});


app.listen(process.env.PORT, () => {
	console.log(`Successfully Logged In! Listening on port ${process.env.PORT}`)
});