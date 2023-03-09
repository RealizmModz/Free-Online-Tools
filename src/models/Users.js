const { Schema, model } = require('mongoose');

const UserSchema = new Schema ({
	UserId: {
		type: String,
		unique: true,
	},
	Email: {
		type: String,
		unique: true,
	},
	Username: {
		type: String,
		unique: true,
	},
	Password: String,
})

const Users = model('Users', UserSchema);

module.exports = Users