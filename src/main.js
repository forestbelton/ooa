import Link from './link/Link';
import Rooms from './room/Rooms';
import Header from './Header';

var canvas = document.getElementById('canvas'),
    ctx = canvas.getContext('2d');

const keyCodeMap = {
    37: 'LEFT',
    38: 'UP',
    39: 'RIGHT',
    40: 'DOWN'
}

var world = {
    keys: {},
    tick: 0,
    header: new Header(),
    link: new Link(),
    room: Rooms.Room2,
};

document.addEventListener('keydown', function(ev) {
    world.keys[keyCodeMap[ev.keyCode]] = true;
}, true);

document.addEventListener('keyup', function(ev) {
    delete world.keys[keyCodeMap[ev.keyCode]];
}, true);

var fpsInterval,
    startTime,
    then;

function startLoop(fps) {
    fpsInterval = 1000 / fps;
    then = window.performance.now();
    startTime = then;
    loop();
}

function loop(newtime) {
    requestAnimationFrame(loop);

    var now = newtime;
    var elapsed = now - then;

    if (elapsed > fpsInterval) {
        then = now - (elapsed % fpsInterval);
        animate();
    }
}

function animate() {
    world.header.update();

    if (world.changeRoom) {
        if (world.changeRoom.done) {
            world.room = world.changeRoom.newRoom;
            delete world.changeRoom;
        } else {
            world.changeRoom.update(world);
        }
    } else {
        world.room.update(world);
        world.link.update(world);
    }

    ctx.clearRect(0, 0, 160, 144);

    if (world.changeRoom) {
        world.changeRoom.draw(ctx);
        world.header.draw(ctx);
    } else {
        world.room.draw(ctx);
        world.header.draw(ctx);
        world.link.draw(ctx);
    }

    ++world.tick;
}

startLoop(30);
