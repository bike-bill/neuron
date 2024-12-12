const uid = require("cuid");

function Neuron() {
    this.id = uid();
    this.bias = bias == undefined? Math.random() * 2 - 1: this.bias;

    // Incoming connections
    this.incoming = {
        neurons: {}, //new Map()
        weights: {}  //new Map()
    }

    // Outgoing connections
    this.outgoing = {
        neurons: {}, //new Map()
        weights: {}  //new Map()
    }

    this._output; //f'(x)
    this.output; //f(x)
    this.error; //E'(f(x))
}

module.exports = Neuron;
