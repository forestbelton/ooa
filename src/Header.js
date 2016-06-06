export default class Header {
    constructor() {
        this.header = new Image();
        this.header.src = './misc/header.png';
    }

    update() {
    }

    draw(ctx) {
        ctx.drawImage(
            this.header,
            0,
            0,
            160,
            16,
            0,
            0,
            160,
            16
        );
    }
}
