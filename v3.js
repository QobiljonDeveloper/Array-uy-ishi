function processDurations(logs) {
  let userDurations = new Map();

  logs.forEach(log => {
      let parts = log.match(/([\d.]+)\s+(\w+)\s+(\d+)/);
      if (!parts) return;

      let [_, ip, user, duration] = parts;
      duration = parseInt(duration, 10);

      if (!userDurations.has(user)) {
          userDurations.set(user, { totalDuration: 0, uniqueIps: new Set() });
      }

      let userData = userDurations.get(user);
      userData.totalDuration += duration;
      userData.uniqueIps.add(ip);
  });

  userDurations.forEach(({ totalDuration, uniqueIps }, user) => {
      let sortedIps = Array.from(uniqueIps).sort();
      console.log(`${user}: ${totalDuration} [${sortedIps.join(', ')}]`);
  });
}

const logs2 = [
  "192.168.0.11 peter 33",
  "10.10.17.33 alex 12",
  "10.10.17.35 peter 30",
  "10.10.17.34 peter 120",
  "10.10.17.34 peter 120",
  "212.50.118.81 alex 46",
  "212.50.118.81 alex 4",
  "284.238.140.178 nakov 25",
  "84.238.140.178 nakov 35"
];

processDurations(logs2);
