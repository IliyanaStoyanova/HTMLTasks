const minElem = 1
const maxElem = 20;
const sup = 2;
const fieldMain = document.querySelector('.main');

for(let i = minElem; i <= maxElem; i++) {
    const fieldParagraph = document.createElement('p');
    fieldParagraph.className = 'math-expression';

    const fieldNumber = document.createElement('var');
    fieldNumber.className = 'num';
    fieldNumber.innerHTML = i;

    const fieldSup = document.createElement('sup');
    fieldSup.innerHTML = sup;

    const fieldResult = document.createElement('var');
    fieldResult.className = 'result';
    fieldResult.innerHTML = Math.pow(i, 2);

    fieldParagraph.appendChild(fieldNumber);
    fieldNumber.appendChild(fieldSup);
    fieldParagraph.append(' = ');
    fieldParagraph.appendChild(fieldResult);
    
    fieldMain.insertAdjacentElement('beforeend', fieldParagraph);
}