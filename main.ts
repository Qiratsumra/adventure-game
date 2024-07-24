#! /usr/bin/env node

import inquirer from "inquirer";


import chalk from 'chalk';

console.log(chalk.bgRed.bold.italic(`*************************************************************************************************`));
console.log(chalk.bgRed.bold.italic(`>>>>>>>>>>>>>>>>>>>>> Welcome to the Adventure Game <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<`));
console.log(chalk.bgRed.bold.italic(`*************************************************************************************************`));

 class Player{
    name:string;
    fuel:number= 100;

    constructor(userPlayerName:string){
        this.name = userPlayerName
    };
     
    fuelDecrease(){
        this.fuel -= 25;
    };

    fuelIncrease(){
        this.fuel += 25;
    };
};



 class  Opponent {
    name:string;
    fuel :number = 100;
    
    constructor(opponentName:string){
        this.name = opponentName
    };

    fuelDecrease(){
        this.fuel -=25;
    };
 };

 let answerInput  = await inquirer.prompt(
 [
    {
        name:"user_name",
        type:"input",
        message:chalk.bgMagenta(`Enter your name:`)
    },
    {
        type:'list',
        name:"userOpponentName",
        message:chalk.bgMagenta(`Select the oppenont`),
        choices:["Skeleton","Alien","Zombie"]
    }
 ]
);

console.log();
console.log();

 let {user_name,userOpponentName} = answerInput;
 console.log(`${chalk.bold.bgRed(user_name)} vs ${chalk.bold.bgRed(userOpponentName)}`);

console.log();


 const myPlayer = new Player(user_name);


 const oppenontPlayer = new Opponent(userOpponentName);
 

 let condition = true;

 while (condition) {
    let startMatch = await inquirer.prompt(
        [
            {
                name:"options",
                type:"list",
                message:chalk.bgMagenta(`Select your option!`),
                choices:["Attack","IncreasePoints","Run for life"]
            }
        ]
    );

    let {options} = startMatch;

    if (options === "Attack") {
        attackFunc()
    }else if(options === "IncreasePoints"){
        increasefunc()
    }else if(options === "Run for life"){
        runForLifeFunc()
    }else{
        console.log(chalk.bgWhite.black(`Invalid information!`));
        
    };


    function attackFunc() {
        
        // generate random number from 0 to 1;
        let randomNumber = Math.floor(Math.random() * 2)
        console.log(randomNumber);
        
        // when random number is equal  to 0, decrease the fuel of player
        if (randomNumber === 0) {
            myPlayer.fuelDecrease();
            console.log(`${myPlayer.name}'s fuel is ${chalk.bold.bgGreen(myPlayer.fuel)}`);
            console.log();
            console.log(`${oppenontPlayer.name}'s fuel is ${chalk.bold.bgGreen(oppenontPlayer.fuel)}`);
            
        
        if (myPlayer.fuel === 0) {
            console.log(chalk.bgBlue.whiteBright(`${myPlayer.name} you are loose! Better luck for next time`));

            process.exit();
        }
        // when random nummber is equal to 1 , increase the fuel of player
    }
     if(randomNumber===1){
        oppenontPlayer.fuelDecrease();
        console.log(chalk.bgRedBright.whiteBright(`${myPlayer.name}'s fuel is ${chalk.bold(myPlayer.fuel)}`))
        console.log(chalk.bgBlue(`${oppenontPlayer.name}'s fuel is ${oppenontPlayer.fuel}`));

        if (oppenontPlayer.fuel === 0) {
            console.log(chalk.bgMagenta(`${chalk.bold.green(myPlayer.name)}! your are won`));
             process.exit();
        }
    
    };

};
// increasefunc start
function increasefunc(){
    myPlayer.fuelIncrease()
       console.log(chalk.bgBlueBright(`${myPlayer.name}'s fuel increase to ${myPlayer.fuel}`));
    }
// increasefunc end

// runForLifeFunc start
function  runForLifeFunc() {
  console.log(`${myPlayer.name} lost! Better luck for next time`);
  process.exit()  
};
// runForLifeFunc end here
};