import util from '../helpers/util.js';
//import bears from '../helpers/data/bearData.js';

const newBearForm = () => {
    console.log("hello I am working");
    let domString = '';
    domString += `<div class= "container-fluid">`;
    domString += `<div class="row p-4">`;
    domString += `<div class="form-group col-md-6">`;
    domString += `<label for="exampleInputEmail1">Bear Name:</label>`;
    domString += `<input type="text" class="form-control" id="bear-name" aria-describedby="bear-name" placeholder="Enter Bear Name:">`;
    domString += `</div>`;
    domString += `<div class="form-group col-md-6">`;
    domString += `<label for="bear-picture">Bear Picture:</label>`;
    domString += `<input type="text" class="form-control" id="bear-picture" placeholder="Enter Picture Link">`;
    domString += `</div>`;
    domString += `<div class= "col-md-10"></div><button type:"submit" class="col-12 btn btn-outline-dark new-bear col-md-2 align-text-center"><i class="fas fa-plus-square fa-2x" style="color:#00ccff"></i>Add Bear</<button>`;
    domString += `</div>`;
    domString += `</div>`;
    
    util.printToDom('bear-form', domString);
}


export default {newBearForm};