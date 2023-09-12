// const ping = require('ping');
// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// function pingIP() {
//   rl.question('Enter an IP address: ', (ip) => {
//     ping.sys.probe(ip, (isAlive) => {
//       const status = isAlive ? 'alive' : 'dead';
//       console.log(`IP ${ip} is ${status}`);
//       rl.close();
//     });
//   });
// }

// pingIP();

const express = require('express');
const ping = require('ping');
const app = express();

const port = process.env.PORT || 3000;
//const host = process.env.HOST;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.post('/ping', (req, res) => {
    const ipAddress = req.body.ipAddress;

    ping.sys.probe(ipAddress, (isAlive) => {
        const status = isAlive ? 'alive' : 'dead';
        res.send(`IP ${ipAddress} is ${status}`);
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
