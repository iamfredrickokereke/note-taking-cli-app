const yargs = require('yargs');
const command = process.argv[2];

console.log(yargs.argv);
 
yargs.command({
    command : 'Add',
    description : "Adds a new note",
    handler : () =>{
        console.log('it works!');
        
    }
})

// check data argument passed

// if (command === 'add') {
//     console.log('Adding note...');
//     console.log(process.argv);
    
    
// }else if (command === 'remove') {
//     console.log('Removing note...');
    
}


