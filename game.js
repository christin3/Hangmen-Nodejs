/**
 * Created by Christine on 10/8/16.
 */
//file will randomly select a word for the player.
var Word = require('./word.js');

function Game (){
  this.init();
};


Game.prototype.wrds = ["dog", "cat", "cow", "man", "moose", "loose"];

Game.prototype.init = function (){
    this.word = this.random();
    // this.guesses = new Set ();
    this.done = false;
};
Game.prototype.random = function() {
    return new Word(this.wrds[Math.floor(Math.random() * this.wrds.length)]);
};
module.exports = Game;