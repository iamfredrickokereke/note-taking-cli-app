const yargs = require('yargs');
// const command = process.argv[2];

// console.log(yargs.argv);
 
yargs.command({
    command: 'Add',
    description: 'Adds a new note',
    handler: () => {
        console.log('Adding a note...!');
        
    }
})

yargs.command({
    command: 'Remove',
    description: 'Removes a note',
    handler: () => {
        console.log('Removing a note...');
        
    }
})

yargs.command({
    command: 'List',
    description: 'Shows your notes',
    buider: {

        title: {
            describe: 'Note listing...',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        console.log('Showing all your notes...' + argv.title);
        
    }
    
})

yargs.command({
    command: 'Read',
    description: 'Read a note',
    handler: () => {
        console.log('Reading notes...');
        
    }
})


yargs.parse();




// yargs.version('1.0.0')


// console.log(yargs.argv);

// check data argument passed

// if (command === 'add') {
//     console.log('Adding note...');
//     console.log(process.argv);
    
    
// }else if (command === 'remove') {
//     console.log('Removing note...');
    
// }


