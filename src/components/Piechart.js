import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const Piechart = (props) => {
let prodData = {}
let prodDataArr = []
console.log(props.categories);
for (const category of props.categories) {
let tempSum = 0
for (const data of props.prodData) {
if (data.category===category){
    tempSum+=1
}    
}    
prodData[category] = tempSum
prodDataArr.push(tempSum)
}
console.log(prodDataArr);
    const data = {
        labels: props.categories,
        datasets: [
          {
            label: 'Categories in Catalogue',
            data: prodDataArr,
            backgroundColor: [
                'rgba(0, 255, 0, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(0, 10, 86, 0.5)',
                'rgba(255, 0, 172, 0.5)',
              ],
              borderColor: [
                'rgba(153, 255, 153, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(255, 0, 172, 1)',
              ],
        
            borderWidth: 1,
          },
        ],
      };

  return (
    <>
    <Pie data={data} />
    </>
  )
}

export default Piechart