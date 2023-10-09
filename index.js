// code your solution here
function saturdayFun(somevalue=`roller-skate`){

    return `This Saturday, I want to ${somevalue}!`
}

function mondayWork(somevalue=`go to the office`) {
    return `This Monday, I will ${somevalue}.`
}

function wrapAdjective(symbol) {
    return function(adjective) {
      return `You are ${symbol}${adjective}${symbol}!`;
    };
  }