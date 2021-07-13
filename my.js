let rect = new Rectangle(100, 10);
rect.draw();


window.addEventListener('keyup', function(event) {
    switch(event.keyCode) {
        case 37:
            rect.moveLeft();
            break;
    }
})

// let rect2 = new Rectangle(50, 20, 100, 50);
// rect2.setBackgroundColor('red')
// rect2.draw();

let circle = new Circle(60, 70, 10);
circle.draw()