require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"HelloWorld":[function(require,module,exports){
"use strict";
cc._RFpush(module, '280c3rsZJJKnZ9RqbALVwtK', 'HelloWorld');
// Script\HelloWorld.js



cc.Class({
    "extends": cc.Component,

    properties: {
        label: {
            "default": null,
            type: cc.Label
        },
        // defaults, set visually when attaching this script to the Canvas
        text: 'Hello, World!'
    },

    // use this for initialization
    onLoad: function onLoad() {
        this.label.string = this.text;

        console.log("Rodger " + window.G.WORD.LabelString);

        this.label.string = window.G.WORD.LabelString;
        //console.log("Rodger word " + word.LabelString);
    },

    // called every frame
    update: function update(dt) {}
});

cc._RFpop();
},{}],"WORD":[function(require,module,exports){
"use strict";
cc._RFpush(module, '2f9d38tFndLjK5NOKxx70kg', 'WORD');
// Script\WORD.js


console.log("Rodger window " + window);

console.log("*************");
for (var i in window) console.log("i " + i);
console.log("*************");

window.G = window.G || {};
console.log("Rodger " + window.G);

window.G.WORD = {

    LabelString: "rodger"

};

cc._RFpop();
},{}]},{},["HelloWorld","WORD"])

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL0NvY29zQ3JlYXRvci9yZXNvdXJjZXMvYXBwLmFzYXIvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsImFzc2V0cy9TY3JpcHQvSGVsbG9Xb3JsZC5qcyIsImFzc2V0cy9TY3JpcHQvV09SRC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7QUNBQTtBQUNBO0FBRUE7QUFDSTtBQUFKO0FBRUk7QUFDSTtBQUNJO0FBQ0E7QUFBWjtBQUNBO0FBRVE7QUFBUjtBQUNBO0FBQ0E7QUFFSTtBQUNJO0FBQVI7QUFFUTtBQUFSO0FBRVE7QUFBUjtBQUNBO0FBQ0E7QUFDQTtBQUVJO0FBQUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUVJO0FBQUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIlxuXG5cbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIGxhYmVsOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcbiAgICAgICAgfSxcbiAgICAgICAgLy8gZGVmYXVsdHMsIHNldCB2aXN1YWxseSB3aGVuIGF0dGFjaGluZyB0aGlzIHNjcmlwdCB0byB0aGUgQ2FudmFzXG4gICAgICAgIHRleHQ6ICdIZWxsbywgV29ybGQhJ1xuICAgIH0sXG5cbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5sYWJlbC5zdHJpbmcgPSB0aGlzLnRleHQ7XG4gICAgICAgIFxuICAgICAgICBjb25zb2xlLmxvZyhcIlJvZGdlciBcIiArIHdpbmRvdy5HLldPUkQuTGFiZWxTdHJpbmcpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5sYWJlbC5zdHJpbmcgPSB3aW5kb3cuRy5XT1JELkxhYmVsU3RyaW5nO1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwiUm9kZ2VyIHdvcmQgXCIgKyB3b3JkLkxhYmVsU3RyaW5nKTtcbiAgICB9LFxuXG4gICAgLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lXG4gICAgdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcblxuICAgIH0sXG59KTtcbiIsIlxyXG5jb25zb2xlLmxvZyhcIlJvZGdlciB3aW5kb3cgXCIgKyB3aW5kb3cpO1xyXG5cclxuY29uc29sZS5sb2coXCIqKioqKioqKioqKioqXCIpO1xyXG5mb3IgKHZhciBpIGluIHdpbmRvdylcclxuY29uc29sZS5sb2coXCJpIFwiICsgaSk7XHJcbmNvbnNvbGUubG9nKFwiKioqKioqKioqKioqKlwiKTtcclxuXHJcbndpbmRvdy5HID13aW5kb3cuRyB8fCB7fTtcclxuY29uc29sZS5sb2coXCJSb2RnZXIgXCIgKyB3aW5kb3cuRyk7XHJcblxyXG53aW5kb3cuRy5XT1JEID0gIHtcclxuICAgIFxyXG4gICAgTGFiZWxTdHJpbmcgOiBcInJvZGdlclwiXHJcbiAgICBcclxufTtcclxuXHJcbiJdfQ==