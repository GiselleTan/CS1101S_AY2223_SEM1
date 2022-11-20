/////////////////////////////////////////////////////////////////////
//MISSION 12: ROBOTIC TRIALS (XP: 835 / 800)

//M12, TASK 1
const words = "Bluetooth speaker has been connected";
ev3_speak(words);





//////////////////////////////////////////////////
//M12, TASK 2
const motor_b = ev3_motorB();
const motor_c = ev3_motorC();

ev3_runForTime(motor_b, 3000, 200);
ev3_runForTime(motor_c, 3000, 200);
ev3_pause(3000);





//////////////////////////////////////////////////
//M12, TASK 3
const motor_b = ev3_motorB();
const motor_c = ev3_motorC();

ev3_runToRelativePosition(motor_c, 150, 200);
ev3_runToRelativePosition(motor_b, -150, 200);

ev3_pause(5000);





//////////////////////////////////////////////////
//M12, TASK 4
const motor_b = ev3_motorB();
const motor_c = ev3_motorC();

function go_forward(mseconds, speed) {
    ev3_runForTime(motor_b, mseconds, speed);
    ev3_runForTime(motor_c, mseconds, speed);
    ev3_pause(mseconds);
}

function turn_motor(motor_b_position, motor_c_position, mseconds, speed) {
    ev3_runToRelativePosition(motor_b, motor_b_position, speed);
    ev3_runToRelativePosition(motor_c, motor_c_position, speed);
    ev3_pause(mseconds);
}

go_forward(3000, 200);
turn_motor(-150, 150, 1000, 200);
go_forward(1500, 200);
turn_motor(150, -150, 1000, 200);
go_forward(4500, 200);