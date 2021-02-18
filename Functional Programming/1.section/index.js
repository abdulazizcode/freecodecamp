//Function to return greeTea
const prepareTea = () => 'greenTea';


const getTea = (numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups++) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  console.log(teaCups);
};


const tea4TeamFCC = getTea(10);

