import axios from 'axios';

export const getOneOppFromServer = async(side) => {
    const {data} = await axios.get(`https://deco-db.herokuapp.com/users`);
    console.log(data)
    let filteredData = data.filter(partisan => partisan.lean !== side);
    console.log(filteredData)
    let oneOpp = filteredData[Math.floor(Math.random() * filteredData.length)]
    console.log(oneOpp)
    return oneOpp;
}
