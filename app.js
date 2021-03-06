const yargs = require('yargs');

// const command = process.argv[2];

// console.log(yargs.argv);

// yargs.demandOption([true])


yargs.command({
    command: 'Add',
    describe: 'Adds a new note',
    builder:{
        title:{
            alias:'title',
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body:{
            alias: 'body',
            demandOption: true,
            default: 'name',
            describe: 'Note body',
            type: 'string'
        },
    },

   
    handler: (argv) => {
        console.log('Note Title: ', argv.title);
        console.log('Note body: ', argv.body);
        
        
    }
})

yargs.command({
    command: 'Remove',
    describe: 'Removes a note',
    handler: () => {
        console.log('Removing a note...');
        
    }
})

yargs.command({
    command: 'List',
    describe: 'Shows your notes',
    handler: () => {
        console.log('Showing all your notes...');
        
    }

})

yargs.command({
    command: 'Read',
    descrip: 'Read a note',
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


