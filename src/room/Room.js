export default class Room {
    constructor(src, walkable, zones) {
        this.walkable = walkable;
        this.zones = zones;

        this.room = new Image();
        this.room.src = src;
    }

    update(world) {
    }

    draw(ctx, xOffset, yOffset) {
        ctx.drawImage(
            this.room,
            0,
            0,
            160,
            128,
            0 + (xOffset || 0),
            16 + (yOffset || 0),
            160,
            128
        )
    }

    newRoom(position) {
        var tileX1 = Math.floor(position.x / 16) + 1,
            tileY1 = Math.floor(position.y / 16),
            tileX2 = Math.ceil(position.x / 16) + 1,
            tileY2 = Math.ceil(position.y / 16);

        if (this.walkable[tileY1 * 12 + tileX1] > 1) {
            return this.zones[this.walkable[tileY1 * 12 + tileX1]];
        } else if (this.walkable[tileY2 * 12 + tileX2] > 1) {
            return this.zones[this.walkable[tileY2 * 12 + tileX2]];
        } else {
            return null;
        }
    }

    canWalk(position) {
        var tileX1 = Math.floor(position.x / 16) + 1,
            tileY1 = Math.floor(position.y / 16),
            tileX2 = Math.ceil(position.x / 16) + 1,
            tileY2 = Math.ceil(position.y / 16);

        return this.walkable[tileY1 * 12 + tileX1]
            && this.walkable[tileY2 * 12 + tileX2]
    }
}
