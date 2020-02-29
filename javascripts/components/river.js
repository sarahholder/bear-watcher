import utils from '../helpers/utils.js';
import bearData from '../helpers/data/bearData.js';



const bearBuilder = () => {
    const bears = bearData.getBears();
    let domString = '';
    bears.forEach((bear) => {
        domString +=   `<div class="row card-container m-2">`
        domString += '<div class="col-4 text-center m-2">';
        domString += '<div class="card">';
        domString += `<img class="card-img-top" src="${bear.imageUrl}" alt="Card image cap">`
        domString += '<div class="card-body ">';
        domString +=    `<h5 class="card-title">${bear.name}</h5>`;
        domString += `<button id=${bear.id} class="btn btn-dark catch-btn">GOT IT!</button>`;
        domString += `<button id=${bear.id} class="btn btn-dark tried-btn">MISSED!</button>`;
        domString += '</div>';
        domString += '</div>';
        domString += '</div>';
        domString += '</div>'
    })

    utils.printToDom('river', domString);   
}

export default { bearBuilder };