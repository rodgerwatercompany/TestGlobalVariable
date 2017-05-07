
console.log("Rodger window " + window);

console.log("*************");
for (var i in window) console.log("i " + i);
console.log("*************");

window.G = window.G || {};
console.log("Rodger " + window.G);

window.G.WORD = {

    LabelString: "rodger"

};