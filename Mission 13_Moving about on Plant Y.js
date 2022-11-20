/////////////////////////////////////////////////////////////////////
//MISSION 13: MOVING ABOUT ON PLANET Y (XP: 1000 / 1000)

//M13, TASK 1
const ultra_sensor = ev3_ultrasonicSensor();
function detectDistance(sensor) {
    const distance = ev3_ultrasonicSensorDistance(sensor) / 10; // in cm!
    display(distance);
    ev3_pause(1000);
    return distance;
}

while (true) {
    detectDistance(ultra_sensor);
}





//////////////////////////////////////////////////
//M13, TASK 2
const ultra_sensor = ev3_ultrasonicSensor();
const motor_b = ev3_motorB();
const motor_c = ev3_motorC();
let is_active = true;

function detectDistance(sensor) {
    const distance = ev3_ultrasonicSensorDistance(sensor) / 10; // in cm!
    display(distance);
    return distance;
}

function move(isPause, mseconds, speed) {
    ev3_runForTime(motor_b, mseconds, speed);
    ev3_runForTime(motor_c, mseconds, speed);
    if (isPause) {
        ev3_pause(mseconds);
    }

}

while (is_active) {
    const distance = detectDistance(ultra_sensor);
    if (distance > 10) {
        move(false, 100, 300);
    } else {
        ev3_pause(500);
        is_active = false;
    }
}
move(true, 2000, -300);
ev3_pause(2000);





//////////////////////////////////////////////////
//M13, TASK 3