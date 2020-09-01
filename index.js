const readline = require('readline');
const parking = require('./parking');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('Please use the below listed command:')
console.log('------------------------------------')
console.log('- create_parking_lot -noOFSlot-')
console.log('- park CarNo(eg: KA-01-HH-1234) Color(eg:White)');
console.log('- leave -slotNo-')
console.log('- status')

let intiMain = () => {

    rl.on('line', async (input) => {
        input = input.split(" ");
        switch (input[0]) {
            case ('create_parking_lot'):
            case ('create'):
                try {
                    const result = await parking.create(input[1]);
                    console.log(result);
                } catch (e) {
                    console.log('error', `${e}`);
                }
                break;

            case ('park'):
                try {
                    const result = await parking.park(input[1].trim(), input[2].trim());
                    console.log(result);
                } catch (e) {
                    console.log('error', `${e}`);
                }
                break;

            case ('leave'):
                try {
                    const result = await parking.leave(input[1]);
                    console.log(result);
                } catch (e) {
                    console.log('error', `${e}`);
                }
                break;

            case ('status'):
                try {
                    const result = await parking.status();
                    console.log(result);
                } catch (e) {
                    console.log('error', `${e}`);
                }
                break;

            case (''):
                break;

            default:
                console.log('Seems like an issue with command that you typed , please note predeifed commands are case sensitive and matched as per the description!');
        }

    });
}

rl.on('SIGINT', () => {
    rl.question('Are you sure you want to exit? (yes/no) ', (answer) => {
        if (answer.match(/^y(es)?$/i)) rl.pause();
    });
}); 
 
intiMain();