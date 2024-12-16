const R = require("ramda");

const rand = (high, low) => Math.random() * (high - low) + low;

const randomPoints = R.range(0,100).map(_ => ({
    x: rand(-1, 1),
    y: rand(-1, 1)
}));


//get a handle to the svg element in neuron.html
const svg = document.getElementById("plot");

randomPoints.forEach(point => {
    console.log('generating circles');
    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.setAttribute('cx', (point.x + 1) * 250); // Scale and shift x to fit SVG
    circle.setAttribute('cy', (point.y + 1) * 250); // Scale and shift y to fit SVG
    circle.setAttribute('r', 3); // Radius of the point
    circle.setAttribute('fill', 'red');
    console.log(circle);
    svg.appendChild(circle);
});