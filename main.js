
class Snake {
    constructor(board) {
        this.board = board;
        this.create();
        this.tail = [];
    }

    create() {
        this.snake = document.createElement('div')
        this.snake.classList.add('snake');
        this.snake.style.left = '0px';
        this.snake.style.top = '0px';
        console.log(this.board);
        this.board.appendChild(this.snake);
    }
     
    move(to) {
        console.log('move', to);
        this.getPosition()
        console.log(this.x, this.y);
        
        for(let i = this.tail.length-1; i >= 1;i--){
          
            console.log(i, this.tail[i]);
        this.tail[i].style.left = this.tail[i-1].style.left;
        this.tail[i].style.top = this.tail[i-1].style.top;
        }
 
        
        this.tail[0].style.left = this.snake.style.left;
        this.tail[0].style.top = this.snake.style.top;
        
        if (to == 'right') this.x += 40;
        if (to == 'left') this.x -= 40;
        
    
        if (to == 'up') this.y -= 40;
        if (to == 'down') this.y += 40;

        if (this.y < 0) this.y = 360;
        if (this.x < 0) this.x = 360;



        if (this.y >360) this.y =0;
        if(this.x >360) this.x = 0;


        this.snake.style.left = this.x + 'px';
        this.snake.style.top = this.y + 'px';
    }

    getPosition() {

        this.x = parseInt(this.snake.style.left.replace('px', ''));
        this.y = parseInt(this.snake.style.top.replace('px', ''));

    }

    addTail() {
         
        const tail = document.createElement('div')
        tail.classList.add('tail');
        tail.style.left = '0px';
        tail.style.top = '0px';
        console.log(this.board);
        this.board.appendChild(tail);

    this.tail.push(tail);



    }
}

class Board {
    constructor(target) {
        this.target = target;
        this.create();

    }
    create() {
        this.board = document.createElement('div')
        this.board.classList.add('board');
        this.target.appendChild(this.board);
    }
}

class Game {
    constructor(target) {
        this.target = document.querySelector(target);
        this.board = new Board(this.target);
        this.snake = new Snake(this.board.board);
        this.snake.addTail();
        this.snake.addTail();
        this.snake.addTail();
        this.snake.addTail();
        this.snake.addTail();
        this.snake.addTail();
        this.snake.addTail();

        this.snake.move('right');
        this.snake.move('right');
       
        this.initControl();
        // this.snake.move('left');
        // this.snake.move('top');
        // this.snake.move('bottom');

    }

    initControl() {

        console.log(this.board);


        const keyBoard = (event) => {
            console.log(this.snake);


            if (event.key == 'ArrowUp') this.snake.move('up');
            if (event.key == 'ArrowDown') this.snake.move('down');
            if (event.key == 'ArrowLeft') this.snake.move('left');
            if (event.key == 'ArrowRight') this.snake.move('right');
            console.log(event.key);
        }
        window.addEventListener('keydown', keyBoard);

    }
}
let game = new Game('.block');
console.log('test');