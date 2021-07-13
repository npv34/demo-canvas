class Circle {
    constructor(x, y, radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.canvas = document.getElementById('my-canvas');
        this.ctx = this.canvas.getContext('2d');
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        this.ctx.stroke();
    }
}