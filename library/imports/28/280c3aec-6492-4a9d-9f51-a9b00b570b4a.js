

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