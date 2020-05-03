const rp = require('request-promise');
const chalk = require('chalk');
const Call = require('../api/obj/Call').Call;

const { Command } = require('commander');
const program = new Command();
program.version('0.0.1');

const API_BASE_URL = process.env.NODE_ENV === "local_dev" ? "http://localhost:3000" : "https://fd-dispatch-api.kevinjdolan.com";
const CLIENT_BASE_URL = process.env.NODE_ENV === "local_dev" ? "http://localhost:2999" : "https://fd-dispatch.kevinjdolan.com";

program
    .option('-a, --amr <path>', 'amr audio path' )
    .option('-w, --wav <path>', 'wav audio path' )
    .option('-m, --mp3 <path>', 'mp3 audio path' )
    .option('-d, --descrip <descrip>', 'tone description' )
    .option('-t, --time <time>', 'time of detection' );

program
    .command('create').description('Create a new call')
    .action(async (source, destinaton) => {
        console.log(chalk.blue("Creating new call..."));
        try {
            const call = await createCall();
            console.log(chalk.blue(`New Call Created - ID: ${call.id}, Date Time: ${call.dateTime.toLocaleTimeString()}, URL: ${CLIENT_BASE_URL}/calls/${call.id}`));
            return call;
        }
        catch (err) {
            console.error(chalk.red(`Failed To Create Call`));
            console.error(err.stack);
            process.exit(1);
        }
    });

program.parse(process.argv);

console.log(chalk.blue('Arguments'));
if(program.amr)
    console.log(chalk.blue(`  AMR Path: ${program.amr}`));
if(program.wav)
    console.log(chalk.blue(`  WAV Path: ${program.wav}`));
if(program.mp3)
    console.log(chalk.blue(`  MP3 Path: ${program.mp3}`));
if(program.descrip)
    console.log(chalk.blue(`  Description: ${program.descrip}`));
if(program.time)
    console.log(chalk.blue(`  Time: ${program.time}`));

async function createCall() {
    const options = {
        method: 'POST',
        uri: `${API_BASE_URL}/v1/calls`,
        headers: {
            accept: "application/json",
            "content-type": "application/json"
        },
        body: {
            department: "Windham",
            type: "Medical",
            determinant: "N/A"
        },
        json: true
    };

    return rp(options)
        .then(call => {
            return new Call(call);
        })
}