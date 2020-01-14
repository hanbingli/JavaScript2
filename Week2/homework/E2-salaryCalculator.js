'use strict'

const mondayTasks = [
    {
      name: 'Daily standup',
      duration: 30, // specified in minutes
    },
    {
      name: 'Feature discussion',
      duration: 120,
    },
    {
      name: 'Development time',
      duration: 240,
    },
    {
      name: 'Talk to different members from the product team',
      duration: 60,
    },
  ];

let hourlyRate = 25;

function dayRate(task){
    const duration = task.map(task =>task.duration);
    const totalHour = duration.reduce((total, num) => total+num, 0)/60;
    let totalPay = totalHour * hourlyRate;
    totalPay = totalPay.toFixed(2)
    let payInEuro = '€' + totalPay
    return payInEuro

}



console.log(dayRate(mondayTasks))