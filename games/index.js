const box = document.querySelectorAll('.box');

const oxo = [];
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
         

        // console.log(oxo);
        winnablePattern(oxo, 3);
    }); 
}

function winnablePattern(oxo, elementsPerSubArray) {
    console.log(oxo);
    var matrix = [], i, k;

    for (i = 0, k = -1; i < oxo.length; i++) {
        if (i % elementsPerSubArray === 0) {
            k++;
            matrix[k] = [];
        }

        matrix[k].push(oxo[i]);
    }

    return matrix;
}