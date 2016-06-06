const STEP_SIZE = 4;

export default class ChangeRoom {
    constructor(link, oldRoom, newRoom, direction) {
        this.link = link;
        this.oldRoom = oldRoom;
        this.newRoom = newRoom;
        this.direction = direction;

        this.done = false;
        this.currentFrame = 0;
    }

    update() {
        if (this.currentFrame >= 128) {
            this.done = true;
            return;
        }

        const displacement = this.computeDisplacement();
        this.link.position.x += displacement.x;
        this.link.position.y += displacement.y;

        this.currentFrame += STEP_SIZE;
    }

    computeOffsets() {
        switch (this.direction) {
            case 'UP':
                return {
                    oldX: 0,
                    oldY: this.currentFrame,
                    newX: 0,
                    newY: this.currentFrame - 128
                };
            case 'DOWN':
                return {
                    oldX: 0,
                    oldY: -this.currentFrame,
                    newX: 0,
                    newY: 128 - this.currentFrame
                };
        }
    }

    computeDisplacement() {
        return {
            UP: { x: 0, y: 3.5 },
            DOWN: { x: 0, y: -3.5 }
        }[this.direction];
    }

    draw(ctx) {
        const offsets = this.computeOffsets();

        this.oldRoom.draw(ctx, offsets.oldX, offsets.oldY);
        this.newRoom.draw(ctx, offsets.newX, offsets.newY);
        this.link.draw(ctx);
    }
}
