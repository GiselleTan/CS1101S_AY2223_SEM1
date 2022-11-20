/////////////////////////////////////////////////////////////////////
//MISSION 15: FINDING ELDRIC (XP: 1218 / 1200)

//M15, TASK 1
const color_sensor = ev3_colorSensor();
const touch_sensor = ev3_touchSensor3();

function detect_light_intensity(color_sensor) {
    const intensity = ev3_reflectedLightIntensity(color_sensor);
    display(intensity);
    ev3_pause(1000);
    return intensity;
}

while (!ev3_touchSensorPressed(touch_sensor)) {
    detect_light_intensity(color_sensor);
}





//////////////////////////////////////////////////
//M15, TASK 2
const color_sensor = ev3_colorSensor();
const touch_sensor = ev3_touchSensor3();
const motor_b = ev3_motorB();
const motor_c = ev3_motorC();

while (!ev3_touchSensorPressed(touch_sensor)) {
    if(ev3_reflectedLightIntensity(color_sensor) < 15){
        ev3_runToRelativePosition(motor_b, 80, 200);
        ev3_runToRelativePosition(motor_c, -40 , 100);
        ev3_pause(300);
        
    } else {
        ev3_runToRelativePosition(motor_c, 80, 200);
        ev3_runToRelativePosition(motor_b, -40 ,100);
        ev3_pause(300);
    }
}





//////////////////////////////////////////////////
//M15, TASK 3
const color_sensor = ev3_colorSensor();
const touch_sensor = ev3_touchSensor3();
const motor_b = ev3_motorB();
const motor_c = ev3_motorC();

while (!ev3_touchSensorPressed(touch_sensor)) {
    if(ev3_reflectedLightIntensity(color_sensor) < 15){
        ev3_runToRelativePosition(motor_b, 80, 200);
        ev3_runToRelativePosition(motor_c, -40 , 100);
        ev3_pause(300);
        
    } else {
        ev3_runToRelativePosition(motor_c, 80, 200);
        ev3_runToRelativePosition(motor_b, -40 ,100);
        ev3_pause(300);
    }
}