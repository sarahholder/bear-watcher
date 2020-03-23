import utils from '../helpers/utils.js';
import bearData from '../helpers/data/bearData.js';
import river from './river.js';

const addNewBear =()=>{
    const bears = bearData.getBears();
    const newBear =   {
        id: `bear${bears.length + 1}`,
        name: $('#bear-name').val(),
        imageUrl: $('#bear-picture').val()
      };
      console.log('newBear', newBear);
    bearData.addBear(newBear);
    river.bearBuilder();
}

const newBearForm = () => {
   
    let domString = '';
    domString += `<div class= "container-fluid">`;
    domString += `  <div class="row p-2">`;
    domString += `      <div class="form-group col-md-6">`;
    domString += `          <label for="exampleInputEmail1">Bear Name:</label>`;
    domString += `          <input type="text" class="form-control" id="bear-name" aria-describedby="bear-name" placeholder="Enter Bear Name:">`;
    domString += `      </div>`;
    domString += `      <div class="form-group col-md-6">`;
    domString += `          <label for="bear-picture">Bear Picture:</label>`;
    domString += `          <input type="text" class="form-control" id="bear-picture" placeholder="Enter Picture Link">`;
    domString += `      </div>`;
    domString += '  </div>';
    domString += '  <div class="flex">';
    domString += `      <button id="add-bear" type:"submit" class="btn btn-outline-dark col-md-2 m-2"><i class="fas fa-plus-square fa-2x" style="color:#00ccff"></i>Add Bear</<button>`;
    domString += '  </div>';
    domString += `</div>`;
    
    utils.printToDom('bear-form', domString);  
    $('#add-bear').click(addNewBear); 
}


export default { newBearForm };