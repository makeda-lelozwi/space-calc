/*
- Replace the content of the existing README file with an explanation of the changes made to each portion
- Replace existing comments in code with own explanations 
 */

//INITIAL VALUES
const initialVelocityInKmPerHour = 10000; // velocity (km/h) fix: convert to m/s by /3.6
const accelerationInMetresPerSecond = 3; // acceleration (m/s^2)
const timeInSeconds = 3600; // seconds (1 hour)
const initialDistanceInKm = 0; // distance (km) fix: final answer will be given as m then convert to km (/1000)
const initialFuelAmountInKg = 5000; // remaining fuel (kg)
const fuelBurnRateInKgPerSecond = 0.5; // fuel burn rate (kg/s)

//FINAL VALUES
const finalDistanceInKm = (d + (vel / 3.6) * time) / 1000; //calcultes new distance
const remainingFuelAmountInKg = fuel - fbr * time; //calculates remaining fuel
let finalVelocityInKmPerHour = calcNewVel(acc, vel, time); //calculates new velocity based on acceleration

// Pick up an error with how the function below is called and make it robust to such errors
const calcNewVel = (acc, vel, time) => {
  if (acc === 3) {
    console.error("Convert acceleration.");
  } else {
    return vel + acc * time;
  }
};

console.log(`Corrected New Velocity: ${vel2} km/h`);
console.log(`Corrected New Distance: ${d2} km`);
console.log(`Corrected Remaining Fuel: ${rf} kg`);
