let totalBudget = document.getElementById("total-budget");
let totalExpense = document.getElementById("total-expense");
let totalBalance = document.getElementById("total-balance");
let expenses = 0;
let currentBudget = 0;

function showAmount() {
    let budgetInp = parseInt(document.getElementById("budget-inp").value);
    if (isNaN(budgetInp)) {
        alert("Please enter a valid budget amount");
        return;
    }
    currentBudget = budgetInp;
    totalBudget.textContent = budgetInp;
    totalBalance.textContent = budgetInp - expenses;
}

function ShowExpenseAmount() {
    let expInp = parseInt(document.getElementById("expense-amount").value);
    let expenseName = document.getElementById("expense-name").value;
    
    if (!expenseName || isNaN(expInp)) {
        alert("Please enter valid expense details");
        return;
    }
    
    if (currentBudget === 0) {
        alert("Please set your budget first");
        return;
    }
    
    let list = document.getElementById("list");
    const li = document.createElement("li");

    const nameSpan = document.createElement("span");
    nameSpan.textContent = expenseName;
    nameSpan.style.color = "red";

    const amtSpan = document.createElement("span");
    amtSpan.textContent = expInp;
    amtSpan.style.color = "red";

    const btnGroup = document.createElement("div");
    btnGroup.className = "btn-group";

    const editBtn = document.createElement("button");
    editBtn.textContent = "✏️";
    editBtn.onclick = function() {
        const newName = prompt("Edit expense name:", nameSpan.textContent);
        if (newName !== null) nameSpan.textContent = newName;
    };

    const delBtn = document.createElement("button");
    delBtn.textContent = "🗑️";
    delBtn.onclick = function() {
        expenses -= parseInt(amtSpan.textContent);
        totalExpense.textContent = expenses;
        totalBalance.textContent = currentBudget - expenses;
        li.remove();
    };

    btnGroup.appendChild(editBtn);
    btnGroup.appendChild(delBtn);

    li.appendChild(nameSpan);
    li.appendChild(amtSpan);
    li.appendChild(btnGroup);
    list.appendChild(li);

    expenses += expInp;
    totalExpense.textContent = expenses;
    totalBalance.textContent = currentBudget - expenses;

    // Clear input fields
    document.getElementById("expense-name").value = "";
    document.getElementById("expense-amount").value = "";
}