const box = document.querySelectorAll('.box');
const h1 = document.querySelector('h1');

const oxo = [];
const xPattern = [];
const oPattern = [];
const winner = [];

for (let index = 0; index < box.length; index++) {
    box[index].addEventListener('click', function() {

        if(oxo.length === 0){

            oxo.push( this.textContent = 'x');
            this.textContent = 'x';
        }
        else {
            
            if ( oxo[(oxo.length -1)] === 'x'){
             oxo.push( this.textContent = 'o');
             this.textContent = 'o';

            }
            else if ( oxo[(oxo.length -1)] === 'o'){
                oxo.push( this.textContent = 'x');
                this.textContent = 'x';
            }
        }
        if(this.textContent === 'x'){
            // x array pattern 
            xPattern.push(Number(this.classList[2]));

            //sort to ascending orders
            sortPattern(xPattern);
            
            //pass click value to function
            win(xPattern);

            //change the background color
            this.classList.add('x-green');

            console.log(this);
            
        } else {
            // o array pattern
            oPattern.push(Number(this.classList[2]));
            
            //sort to ascending orders
            sortPattern(oPattern);
            
            //pass click value to function
             win(oPattern);

            //change the background color
             this.classList.add('o-blue');

        }
    }); 
}
function win(value) {
    
    const winPattern=   [   
        [1,2,3],[4,5,6],
        [7,8,9],[1,4,7],
        [2,5,8],[3,6,9],
        [1,5,9],[3,5,7] 
    ];
    if(value.length >=3) {

        winPattern.forEach((element) => {
            if(value[0] === element[0] && value[1] === element[1] && value[2] === element[2]) {
                console.log(element);
                console.log(value);
                
            }
            
        });
        
    }
    }

    
function sortPattern(value) {
    value.sort();

}
