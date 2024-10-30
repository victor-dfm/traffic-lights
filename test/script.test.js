const { initializeTrafficLights, updateTrafficLights, moveCars } = require('../src/simulation/script');

test('initializeTrafficLights', () => {
 const roadArray = ['.','G','.','O','.','R','.'];
 const { trafficLightStates, cycleLength } = initializeTrafficLights(roadArray);

 expect(trafficLightStates[1]).toEqual({state: 'G', timer:0});
 expect(trafficLightStates[3]).toEqual({state: 'O', timer:0});
 expect(trafficLightStates[5]).toEqual({state: 'R', timer:0});
 expect(cycleLength).toEqual({ G: 5, O: 1, R: 5 });
});

test('updateTrafficLights', () => {
 const roadArray = ['.','G','.','R','.','O'];
 const { trafficLightStates, cycleLength } = initializeTrafficLights(roadArray);

 // Runs 5 iterations for the green traffic light to change to yellow
 for (let i = 0; i < 5; i++) {
  updateTrafficLights(roadArray, trafficLightStates, cycleLength);
 }

 expect(roadArray[1]).toBe('O');

 // Runs 1 additional iteration to make yellow change to red
 updateTrafficLights(roadArray, trafficLightStates, cycleLength);
 expect(roadArray[1]).toBe('R');

 // Run 5 more iterations for red to change back to green
 for (let i = 0; i < 5; i++) {
  updateTrafficLights(roadArray, trafficLightStates, cycleLength);
 }

 expect(roadArray[1]).toBe('G');
})

test('moveCars', () => {
 let roadArray = ['C','.','G','.','C','.','R','.','.'];
 let cars = [0,4];
 const { trafficLightStates, cycleLength } = initializeTrafficLights(roadArray);

 // Update the traffic lights and move the cars once
 updateTrafficLights(roadArray, trafficLightStates, cycleLength);
 moveCars(roadArray, cars);

 // Verify that the cars moved correctly
 expect(cars).toContain(1);
 expect(cars).toContain(5);
 expect(roadArray[1]).toBe('C');
 expect(roadArray[5]).toBe('C');
})
