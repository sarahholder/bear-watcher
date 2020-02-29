
const bears = [

    {
      id: "bear1",
    name: "Bobby",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/5/5d/Kamchatka_Brown_Bear_near_Dvuhyurtochnoe_on_2015-07-23.jpg"
    },
    {
      id: "bear2",
    name: "Candy",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/5/5d/Kamchatka_Brown_Bear_near_Dvuhyurtochnoe_on_2015-07-23.jpg"
    },
];

const addBear = (newBear) => {
    bears.push(newBear);   
  };


  const getBears = () =>{
  
      return bears;
  }

export default { getBears, addBear }