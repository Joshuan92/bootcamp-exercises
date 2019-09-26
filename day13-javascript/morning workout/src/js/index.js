const bankAccounts = {
  '000256784': 790,
  '000986056': 5600,
  '001546238': 78065,
  '030987456': 120910,
};


const action = prompt('Choose your action (Write "balance" to show your balance. Write "withdraw" to withdraw your money.)');

if (action === 'balance') {
  const accountNumber = prompt('Enter your bank account number: ');
  document.write(bankAccounts[accountNumber]);

} else if (action === 'withdraw') {
  const accountNumber = prompt('Enter your bank account number: ');
  const amount = prompt('How much do you want to withdraw: ');
  if (bankAccounts[accountNumber] - amount >= 0) {
    document.write(`<br>You have withdrew: ${amount}<br>`);
    document.write(`Your balance now is: ${bankAccounts[accountNumber] - amount}<br>`);
  }
  else {
    document.write('<br>You have insucifient funds.');


  }

} else {
  document.write('<br>wrong action');
}
