// script.js — Renders a hard-coded set of transactions and computes
// per-employee totals for the "starfsmannasjóður" ledger. Also supports
// adding new transactions via the form.

document.addEventListener('DOMContentLoaded', () => {
	// Small demo counter (leftover helper)
	const counterBtn = document.getElementById('counterBtn');
	let counter = 0;
	if (counterBtn) {
		counterBtn.addEventListener('click', () => {
			counter += 1;
			counterBtn.textContent = `Counter: ${counter}`;
		});
	}

	// Hard-coded transactions: Daníel (few), Georg (few), Ólafur (many)
	const transactions = [
		{ date: '2025-10-01', employee: 'Daníel', description: 'Coffee for team', amount: 1200 },
		{ date: '2025-10-03', employee: 'Georg', description: 'Stationery', amount: 850 },
		{ date: '2025-10-04', employee: 'Ólafur', description: 'Team lunch', amount: 7600 },
		{ date: '2025-10-07', employee: 'Ólafur', description: 'Office supplies', amount: 2340 },
		{ date: '2025-10-09', employee: 'Georg', description: 'Taxi home', amount: 1500 },
		{ date: '2025-10-10', employee: 'Ólafur', description: 'Catering', amount: 12000 },
		{ date: '2025-10-12', employee: 'Ólafur', description: 'Printer toner', amount: 4990 },
		{ date: '2025-10-15', employee: 'Ólafur', description: 'Parking fees', amount: 600 },
		{ date: '2025-10-18', employee: 'Daníel', description: 'Snacks', amount: 450 },
		{ date: '2025-10-20', employee: 'Ólafur', description: 'Business cards', amount: 1290 },
		{ date: '2025-10-22', employee: 'Ólafur', description: 'Conference', amount: 18500 },
		{ date: '2025-10-28', employee: 'Ólafur', description: 'Software licence', amount: 7990 }
	];

	const nf = new Intl.NumberFormat('is-IS');

	const tbody = document.getElementById('transactionsBody');
	const summary = document.getElementById('summary');
	if (!tbody || !summary) return;

		// Map employee display names to safe CSS classes
		const empClassMap = {
			'Ólafur': 'emp-olafur',
			'Georg': 'emp-georg',
			'Daníel': 'emp-daniel'
		};
		function getEmpClass(name) {
			return empClassMap[name] || '';
		}

		// Helper: render the transactions table and summary
	function renderTransactions() {
		// Clear existing rows
		tbody.innerHTML = '';

		// Ensure newest first by sorting copy
		const rows = [...transactions].sort((a, b) => new Date(b.date) - new Date(a.date));

			rows.forEach(tx => {
				const tr = document.createElement('tr');
				const tdDate = document.createElement('td');
				tdDate.textContent = new Date(tx.date).toLocaleDateString('is-IS');
				const tdEmp = document.createElement('td');
				const span = document.createElement('span');
				span.className = 'employee-chip ' + getEmpClass(tx.employee);
				span.textContent = tx.employee;
				tdEmp.appendChild(span);
				const tdDesc = document.createElement('td');
				tdDesc.textContent = tx.description;
				const tdAmt = document.createElement('td');
				tdAmt.className = 'right';
				tdAmt.textContent = nf.format(tx.amount);

				tr.appendChild(tdDate);
				tr.appendChild(tdEmp);
				tr.appendChild(tdDesc);
				tr.appendChild(tdAmt);
				tbody.appendChild(tr);
			});
	}

	function renderSummary() {
		summary.innerHTML = '';
		const totals = transactions.reduce((acc, tx) => {
			acc[tx.employee] = (acc[tx.employee] || 0) + tx.amount;
			return acc;
		}, {});

		const rows = Object.entries(totals).sort((a, b) => b[1] - a[1]);
			rows.forEach(([employee, amount]) => {
				const card = document.createElement('div');
				card.className = 'card ' + getEmpClass(employee);
			const h3 = document.createElement('h3');
			h3.textContent = employee;
			const p = document.createElement('p');
			p.textContent = 'Samtals lagt inn';
			const amt = document.createElement('div');
			amt.className = 'amount';
			amt.textContent = nf.format(amount) + ' ISK';

			card.appendChild(h3);
			card.appendChild(p);
			card.appendChild(amt);
			summary.appendChild(card);
		});
	}

	// Initial render
	renderTransactions();
	renderSummary();

	// Form handling for new transactions
	const form = document.getElementById('transactionForm');
	if (form) {
		// Prefill date input with today
		const dateInput = document.getElementById('txDate');
		if (dateInput && !dateInput.value) {
			const today = new Date();
			const yyyy = today.getFullYear();
			const mm = String(today.getMonth() + 1).padStart(2, '0');
			const dd = String(today.getDate()).padStart(2, '0');
			dateInput.value = `${yyyy}-${mm}-${dd}`;
		}

		form.addEventListener('submit', (ev) => {
			ev.preventDefault();
			const d = document.getElementById('txDate').value;
			const emp = document.getElementById('txEmployee').value;
			const desc = document.getElementById('txDescription').value.trim();
			const amtRaw = document.getElementById('txAmount').value;
			const amt = Number(amtRaw);

			if (!d || !emp || !desc || !amtRaw || Number.isNaN(amt) || amt < 0) {
				alert('Vinsamlegast fylltu út gildin rétt (dagsetning, starfsmaður, lýsing, upphæð).');
				return;
			}

			// Add new transaction (store date as YYYY-MM-DD)
			transactions.push({ date: d, employee: emp, description: desc, amount: Math.round(amt) });

			// Re-render
			renderTransactions();
			renderSummary();

			// Clear description and amount, keep date and employee for convenience
			document.getElementById('txDescription').value = '';
			document.getElementById('txAmount').value = '';
		});
	}
});
