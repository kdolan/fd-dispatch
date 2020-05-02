const rp = require('request-promise');
const Call = require('../api/obj/Call').Call;

const { Command } = require('commander');
const program = new Command();
program.version('0.0.1');

const BASE_URL = process.env.NODE_ENV === "production" ? "https://fd-dispatch.kevinjdolan.com" : "http://localhost:2999";

program
    .command('create').description('Create a new call')
    .action(async (source, destinaton) => {
        console.log("Creating new call...");
        try {
            const call = await createCall();
            console.log(`New Call Created - ID: ${call.id}, Date Time: ${call.dateTime.toLocaleTimeString()}, URL: ${BASE_URL}/calls/${call.id}`);
            return call;
        }
        catch (err) {
            console.error(`Failed To Create Call`);
            console.error(err.stack);
            process.exit(1);
        }
    });

program.parse(process.argv);

async function createCall() {
    const options = {
        method: 'POST',
        uri: `${BASE_URL}/v1/calls`,
        body: {
            department: "Windham"
        },
        json: true
    };

    return rp(options)
        .then(call => {
            return new Call(call);
        })
}