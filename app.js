// const request = require('request');

const get = require('./movie');

var movie = require("./movie");
var threeFavoriteMovies = ['The Empire Strikes Back', 'V for Vendetta', 'Super Troopers'];


threeFavoriteMovies.forEach(function(film){
  // your code here
 	get(film);

});




