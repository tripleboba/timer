/**
 * Implement an alarm clock / timer 
 * which will beep after a specified amount of time has passed.
 * The user can specify an unlimited number of alarms using command line arguments
 * 
 *  NEED TO RUN ON COMPUTER'S TERMINAL TO WORK! not through visual code's terminal
 */

const timeSet = process.argv.splice(2);
for (let time of timeSet) {
  if (!isNaN(time) && time > 0 && typeof(time !== 'number')) {
    setTimeout(() => { 
      process.stdout.write('\x07'); 
    }, time * 1000,
    console.log(`Time set @: ${time} secs to beep`));
  }
}