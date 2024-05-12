const box = document.querySelectorAll('.box');

const oxo = [];
const xPattern = [];
const oPattern = [];
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
            // x pattern 
            xPattern.push(Number(this.classList[2]));
            sortPattern(xPattern);
            console.log(xPattern);
            win(xPattern);
            
        } else {
            // o pattern
            oPattern.push(Number(this.classList[2]));
            sortPattern(oPattern);
            console.log(oPattern);
            win(oPattern);

        }
    }); 
}

function win(value) {
 
    const winPattern=   [   [1,2,3],[4,5,6],
                            [7,8,9],[1,4,7],
                            [2,5,8],[3,6,9],
                            [1,5,9],[3,5,7] 
                        ];
}
    
function sortPattern(value) {
    value.sort();

}

