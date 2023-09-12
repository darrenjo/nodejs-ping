const ping = require('ping');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function pingIP() {
  rl.question('Enter an IP address to ping: ', (ip) => {
    ping.sys.probe(ip, (isAlive) => {
      const status = isAlive ? 'alive' : 'dead';
      console.log(`IP ${ip} is ${status}`);
      rl.close();
    });
  });
}

pingIP();
