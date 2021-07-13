const SPEED = 5;
class Rectangle {
    constructor(width, height) {
        this.canvas = document.getElementById('my-canvas');
        this.ctx = this.canvas.getContext('2d');
        this.width = width;
        this.height = height;
        this.x = this.canvas.width / 2 - this.width / 2;
        this.y = this.canvas.height - this.height;
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
        this.ctx.stroke();
    }

    setBackgroundColor(color) {
        this.ctx.fillStyle = color;
    }

    moveLeft() {
        this.clear();
        this.x -= SPEED;
        this.draw();
    }

    moveRight() {

    }

    moveTop() {

    }

    moveBottom() {

    }

    clear() {
        this.ctx.clearRect(this.x, this.y, this.width, this.height);
    }
}