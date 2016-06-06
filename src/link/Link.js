import Sprite from '../util/Sprite';
import ChangeRoom from '../room/ChangeRoom';
import Rooms from '../room/Rooms';

export default class Link extends Sprite {
    constructor() {
        super('./sprite/link.png', 0, { x: 16 * 5, y: 16 * 5 });

        this.items = [];
        this.frame = 0;
        this.direction = 'DOWN';
    }

    getDirection(keys) {
        if (keys[this.direction]) {
            return this.direction;
        } else if (keys.DOWN) {
            return 'DOWN';
        } else if (keys.UP) {
            return 'UP';
        } else if (keys.LEFT) {
            return 'LEFT';
        } else if (keys.RIGHT) {
            return 'RIGHT';
        } else {
            return null;
        }
    }

    updateDirection(world) {
        const frameStarts = {
            DOWN: 0,
            LEFT: 2,
            UP: 4,
            RIGHT: 6
        };

        const newDirection = this.getDirection(world.keys);

        if (newDirection != null) {
            if (newDirection != this.direction) {
                this.frame = frameStarts[newDirection];
            } else if (world.tick % 4 == 0) {
                this.frame = (this.frame + 1) % 2 + frameStarts[newDirection];
            }
        } else {
            this.frame = frameStarts[this.direction];
        }

        this.direction = newDirection || this.direction;
    }

    updatePosition(world) {
        var newX = this.position.x,
            newY = this.position.y;

        // move link
        if (world.keys.DOWN) {
            newY += 2;
        } else if (world.keys.UP) {
            newY -= 2;
        }

        if (world.keys.RIGHT) {
            newX += 2;
        } else if (world.keys.LEFT) {
            newX -= 2;
        }

        const newPosition = {
            x: newX,
            y: newY
        };

        const newRoom = world.room.newRoom(newPosition);
        if (newRoom != null) {
            debugger;
            
            world.changeRoom = new ChangeRoom(
                this,
                world.room,
                Rooms[newRoom],
                this.direction
            );

            return;
        }

        if (world.room.canWalk(newPosition)) {
            this.position = newPosition;
        }
    }

    update(world) {
        this.updateDirection(world);
        this.updatePosition(world);
    }
}
