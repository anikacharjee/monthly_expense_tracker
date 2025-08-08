let expenses = [];

function addExpense() {
  const date = document.getElementById('date').value;
  const item = document.getElementById('item').value;
  const amount = parseFloat(document.getElementById('amount').value);

  if (!date || !item || isNaN(amount)) return;

  expenses.push({ date, item, amount });
  document.getElementById('date').value = '';
  document.getElementById('item').value = '';
  document.getElementById('amount').value = '';
  showMonthlyExpenses();
}

function showMonthlyExpenses() {
  const selectedMonth = document.getElementById('month').value;
  const list = document.getElementById('expense-list');
  const totalDisplay = document.getElementById('total');
  list.innerHTML = '';
  let total = 0;

  expenses.forEach(exp => {
    if (exp.date.startsWith(selectedMonth)) {
      const li = document.createElement('li');
      li.textContent = `${exp.date} - ${exp.item}: ₹${exp.amount}`;
      list.appendChild(li);
      total += exp.amount;
    }
  });

  totalDisplay.textContent = total.toFixed(2);
}
