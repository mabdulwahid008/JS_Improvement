const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

let random = Math.floor(Math.random() * 100)

let count = 1;

(guessNumber = () => {
    readline.question('Guess Number: ', number => {
        if(parseInt(number) === random){
            console.log(`You WON! in ${count} try.`);
            readline.close()
        }
        else{
            if(parseInt(number) < random){
                console.log(`Number is greater than ${number}`);
            }
            else{
                console.log(`Number is less than ${number}`);
            }
            count++;
            guessNumber()
        }
      });
})()
