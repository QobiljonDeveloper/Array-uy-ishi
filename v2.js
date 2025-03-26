function processConnections(logs) {
  let userConnections = new Map();

  logs.forEach(log => {
      let parts = log.match(/IP=([\d.]+)\s+message=.*\s+user=(\w+)/);
      if (!parts) return;

      let [_, ip, user] = parts;

      if (!userConnections.has(user)) {
          userConnections.set(user, new Map());
      }

      let ipMap = userConnections.get(user);
      ipMap.set(ip, (ipMap.get(ip) || 0) + 1);
  });

  userConnections.forEach((ips, user) => {
      console.log(`${user}:`);
      ips.forEach((count, ip) => {
          console.log(`  ${ip} => ${count}`);
      });
  });
}

const logs1 = [
  "IP=192.23.30.40 message='Hello&derps.' user=destroyer",
  "IP=192.23.30.41 message='Hello&yall.' user=destroyer",
  "IP=192.23.30.40 message='Hello&hi.' user=destroyer",
  "IP=192.23.30.42 message='Hello&Dudes.' user=destroyer",
  "IP=192.23.30.41 message='Hey&son' user=mother",
  "IP=192.23.33.40 message='Hi&mom!' user=child0",
  "IP=192.23.30.40 message='Hi&from&me&too' user=child1",
  "IP=192.23.30.42 message='spam' user=destroyer",
  "IP=192.23.30.42 message='spam' user=destroyer",
  "IP=192.23.30.41 message='spam' user=destroyer",
  "IP=192.23.50.40 message='' user=yetAnotherUsername",
  "IP=192.23.50.40 message='comment' user=yetAnotherUsername",
  "IP=192.23.155.40 message='Hello.' user=unknown"
];

processConnections(logs1);
