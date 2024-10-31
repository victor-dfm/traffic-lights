# Traffic Lights

This project is an exercise in traffic light algorithms. A string is passed around representing the road with different cars and traffic lights.
And depending on the number of iterations, it progresses by complying with certain rules. It has been done in javascript.

## Get started

This project has been done with node v20.17.0 and npm 10.8.2. Make sure you have these versions. The just clone the repository and perform the following commands.

1. Install dependencies.

   ```bash
   npm install
   ```

2. In `~/src/index.js` you can modify `road`and the number of iterations `n`. Then in the terminal run the following command to see the result:

   ```bash
    node src/index.js
   ```

## More things

The project is structured in different parts, `script` for the functions of initialising and updating
the time of the traffic lights, so that they can change their state. And the function to move the cars checking if it is possible
to move forward. On the other hand, the main function of the simulator calling the scripts.

Also a CI/CD pipeline has been included, using `jest` for the test and `GitHub Actions`. Testing the scripts.


