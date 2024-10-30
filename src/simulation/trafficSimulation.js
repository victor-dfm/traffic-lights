const {initializeTrafficLights, moveCars, updateTrafficLights} = require('./script.js');

function trafficSimulation(road, n) {
    let roadArray = road.split('');
    let cars = [];

    // Initialise the position of each car in the array
    roadArray.forEach((char, index) => {
        if (char === 'C') {
            cars.push(index);
        }
    })

    // Initialise the status of traffic lights
    const { trafficLightStates, cycleLength } = initializeTrafficLights(roadArray);

    for (let i = 0; i < n; i++) {
        console.log(`Iteración ${i}: ${roadArray.join('')}`);

        // Restore the original state to the positions of the previous cars
        cars.forEach(index => {
            roadArray[index] = '.';
        });

        // Update the traffics lights
        updateTrafficLights(roadArray, trafficLightStates, cycleLength);

        // Move the cars and eliminate those that reach the end
        moveCars(roadArray, cars, i);
    }
}

module.exports = {trafficSimulation};
