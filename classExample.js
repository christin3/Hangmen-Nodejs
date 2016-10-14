/**
 * Created by Christine on 10/12/16.
 */
var Letter = require('./letter.js');
function Word(value){
    this.value = value;
    //.map is an array function
    this.letters = value.split().map(function(v){
        return new Letter (v);
    });




}