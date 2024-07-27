import { groupByFirstLetter } from './utils.js';

export class uiModeler {

    constructror(){
        console.log('UI U IU I UI UI uiModeler constructor');

    }

    generateUi(elementsGroups, building){
        console.log('generating UI ... ');
        const detailsDiv = document.getElementById('details');
    
        const groups = groupByFirstLetter(Object.keys(elementsGroups));
    
        detailsDiv.innerHTML = '';
    
    
        for (const key of Object.keys(groups)) {
            if (groups[key].length > 0) {
    
                // Create and append the h1 element
                const h1 = document.createElement('p');
                h1.textContent = key;
                detailsDiv.appendChild(h1);
    
                // Create and append the div element
                const div = document.createElement('div');
                groups[key].forEach(value => {
                    // Create and append the span element for each value
                    const span = document.createElement('button');
                    span.className = 'btn btn-light';
                    span.type = 'button';
                    span.textContent = value;
                    div.appendChild(span);
    
                    // Add event listener for click
                    span.addEventListener('click', (event) => {
                        console.log('Clicked:', event.target.textContent);
                        building.hideGroup(value);
                    });
    
                });
                detailsDiv.appendChild(div);
    
                const checkBox = document.createElement('div');
                checkBox.innerHTML =`
        
                    <div class="input-group-prepend">
                        <div class="input-group-text">
                        <input type="checkbox" aria-label="Checkbox for following text input">
                        </div>
                    </div>
                        <p>Equerre 10mm  ( x8 )</p>
                `;
    
                checkBox.className = 'input-group mb-3';
    
                // checkBox.addEventListener('change', (event) => {
                //     const checked = event.target.checked;
                //     div.style.display = checked ? 'block' : 'none';
                // });
                detailsDiv.appendChild(checkBox);
    
            }
        }
        console.log('UI generated');
    }
    
}
