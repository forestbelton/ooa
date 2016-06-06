export default class Sprite {
    constructor(src, frame, position) {
        this.sheet = new Image();
        this.sheet.src = src;

        this.frame = frame;
        this.position = position;
    }

    update(world) {
    }

    draw(ctx) {
        const TILE_WIDTH = 16;

        ctx.drawImage(
            this.sheet,
            this.frame * TILE_WIDTH,
            0,
            TILE_WIDTH,
            TILE_WIDTH,
            this.position.x,
            this.position.y,
            TILE_WIDTH,
            TILE_WIDTH
        );
    }
}
