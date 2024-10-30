function initializeTrafficLights(roadArray) {
    const trafficLightStates = {};
    const cycleLength = { G: 5, O: 1, R: 5};

    roadArray.forEach((char,index) => {
        if (char === 'G' || char === 'O' || char === 'R') {
            trafficLightStates[index] = { state: char, timer: 0}
        }
    })

    return { trafficLightStates, cycleLength };
}

function updateTrafficLights(roadArray, trafficLightStates, cycleLength) {
    for (const position in trafficLightStates) {
        const light = trafficLightStates[position];
        light.timer++;

        if (light.state === 'G' && light.timer >= cycleLength.G) {
            light.state = 'O';
            light.timer = 0;
        } else if (light.state === 'O' && light.timer >= cycleLength.O) {
            light.state = 'R';
            light.timer = 0;
        } else if (light.state === 'R' && light.timer >= cycleLength.R) {
            light.state = 'G';
            light.timer = 0;
        }

        roadArray[position] = light.state;
    }
}

function moveCars(roadArray, cars){

    // Copy to remember traffic lights and the position of cars
    const initialRoadArray = [...roadArray];
    const roadWithCars = [...roadArray];
    cars.forEach(index => {
        roadWithCars[index] = 'C';
    })

    // Control variable to allow only the car at the traffic light to go first
    let allowFirstCarToAdvance = true;

    for (let j = cars.length - 1; j >= 0; j--) {
        if(!allowFirstCarToAdvance) break;

        const carIndex = cars[j];
        if (carIndex === roadArray.length - 1) {
            cars.splice(j, 1);
            continue;
        }

        const nextPosition = roadArray[carIndex + 1];
        const isCarBehind = carIndex > 0 && roadWithCars[carIndex - 1] === 'C';

        // If the car is just above a traffic light and is first, allow it to move forward
        if (initialRoadArray[carIndex] !== '.' && allowFirstCarToAdvance) {
            if (isCarBehind) allowFirstCarToAdvance = false;
            cars[j] += 1;
            continue
        }

        if (nextPosition === 'G' || nextPosition === '.') {
            cars[j] += 1;
        }

        roadWithCars[carIndex] = initialRoadArray[carIndex];
        roadWithCars[cars[j]] = 'C';
    }

    cars.forEach(index => {
        roadArray[index] = 'C';
    })
}

module.exports = { initializeTrafficLights, moveCars, updateTrafficLights };
