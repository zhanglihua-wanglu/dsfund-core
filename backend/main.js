#!/usr/bin/env node

const dbop = require("../dbutil");
const eth = require("../ethutil");


function checkDbUser(){
	console.log("check db user");
	dbop.handleUser({}).then(function(r){
		console.log(r);
	}).then(function(){
		dbop.closeDb();
	}).catch(function(err){
		console.log(err);
	});
}


function main(){
	process.nextTick(checkDbUser);
}


main();
