//should control whether or not a letter appears as a "_" or as itself on-screen.
function Letter(value) {
    this.value = value;
    this.visible = false;
}

Letter.prototype.show = function() {
    // ternary operator below
    return (this.visible) ? this.value : '_';
};

module.exports = Letter;




//     if (this.visible) {
//         return this.value;
//     }
//     else {
//         return "_";
//     }
// };
