
const bears = [

    {id: "bear1",
    name: "Bobby",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/5/5d/Kamchatka_Brown_Bear_near_Dvuhyurtochnoe_on_2015-07-23.jpg"
    }
];


const newBear = (e) => {
    e.preventDefault();
    const newBear =   {
      id: `bear${bears.length + 1}`,
      name: document.getElementById('bear-name').value,
      imageUrl: document.getElementById('bear-picture').value
    };
    bears.push(newBear);
    document.getElementById('newBearForm').reset();
    //buildAllDinos();
  };

  
  const getBears = () =>{
      return bears;
  }

export { getBears }