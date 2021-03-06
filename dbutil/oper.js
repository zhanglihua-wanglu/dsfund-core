const DBTS = require("./tables.js");
const cfg = require("../config.js");
var mongoose = require("mongoose");
mongoose.Promise = global.Promise;

let options = {
	useMongoClient:true,
	poolSize: 5
};
mongoose.connect(cfg.mongooseURI, options);
var db = mongoose.connection;

var UserModel = db.model("user", DBTS.UserSchema);



function insertUser(user, callback)
{
	console.log(user);
	UserModel.create(user, function(err,r){
		callback(err,r);
	});
}

exports.closeDb = function(){
	db.close();
}
exports.UserModel = UserModel;
exports.insertUser = insertUser;

