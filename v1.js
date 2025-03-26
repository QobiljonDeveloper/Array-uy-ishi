const users = new Map();

function addPhoneNumber(userName, label, phoneNumber) {
  if (!users.has(userName)) {
    users.set(userName, new Map());
  }
  users.get(userName).set(label, phoneNumber);
}

function updatePhoneNumber(userName, label, newPhoneNumber) {
  if (users.has(userName) && users.get(userName).has(label)) {
    users.get(userName).set(label, newPhoneNumber);
  } else {
    console.log(`${userName} uchun "${label}" raqami topilmadi!`);
  }
}

function deletePhoneNumber(userName, label) {
  if (users.has(userName) && users.get(userName).has(label)) {
    users.get(userName).delete(label);
    if (users.get(userName).size === 0) {
      users.delete(userName);
    }
  } else {
    console.log(`${userName} uchun "${label}" raqami topilmadi!`);
  }
}

function getUserPhones(userName) {
  if (users.has(userName)) {
    console.log(`${userName} telefon raqamlari:`);
    users.get(userName).forEach((number, label) => {
      console.log(`   ${label}: ${number}`);
    });
  } else {
    console.log(`${userName} topilmadi!`);
  }
}

addPhoneNumber("Ali", "Ish", "+998901234567");
addPhoneNumber("Ali", "Shaxsiy", "+998909876543");
addPhoneNumber("Bobur", "Uy", "+998937654321");

getUserPhones("Ali");

updatePhoneNumber("Ali", "Ish", "+998901111111");

getUserPhones("Ali");

deletePhoneNumber("Ali", "Shaxsiy");
getUserPhones("Ali");

deletePhoneNumber("Ali", "Ish");
getUserPhones("Ali");
