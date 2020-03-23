
const bears = [

    {
      id: "bear1",
    name: "Papa",
    imageUrl: "./img/bear2.jpg",
    catch: [''],
    missed: [''],
    },
    {
      id: "bear2",
    name: "Momma",
    imageUrl: "./img/bear1.jpg",
    catch: [''],
    missed: [''],
    },
    {
    id: "bear2",
    name: "Baby",
    imageUrl: "./img/bear3.png",
    catch: [''],
    missed: [''],
    },
];

const addBear = (newBear) => {
    bears.push(newBear);   
  };

  const getBears = () => {
      return bears;
  }

export default { getBears, addBear }