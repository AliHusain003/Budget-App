let totalBudget = document.getElementById("total-budget");
let totalExpense = document.getElementById("total-expense");
let totalBalance = document.getElementById("total-balance");
let sign = "₹";
var expenses=0;

let showAmount = () => {
    let budgetInp = parseInt(document.getElementById("budget-inp").value);  
    totalBudget.textContent = budgetInp;
    totalBalance.textContent = budgetInp;
}

let ShowExpenseAmount = () => {   
    let expInp = parseInt(document.getElementById("expense-amount").value);
    let expenseName = document.getElementById("expense-name").value;
    let list = document.getElementById("list");

    const li = document.createElement("li");

    const nameSpan = document.createElement("span");
    nameSpan.textContent = expenseName;
    nameSpan.style.marginRight = "0.5vw";
    nameSpan.style.width = "5vw";
    nameSpan.style.color = "red";

    const amtSpan = document.createElement("span");
    amtSpan.textContent = expInp;
    amtSpan.style.width = "5vw";
    amtSpan.style.color = "red";


    const btnGroup = document.createElement("div");
    btnGroup.className = "btn-group";

    const updateBtn = document.createElement("button");
    updateBtn.textContent = "📝";
    updateBtn.onclick = () => {
        nameSpan.textContent = "";
        amtSpan.textContent = "";
    }

    const delBtn = document.createElement("button");
    delBtn.textContent = "🗑️";
    delBtn.onclick = () => li.remove();

    li.appendChild(nameSpan);
    li.appendChild(amtSpan);
    btnGroup.appendChild(updateBtn);
    btnGroup.appendChild(delBtn);
    li.appendChild(btnGroup);

    list.appendChild(li);

    
    expenses = expenses + expInp;
    //alert(expenses);
    let totalExpense = document.getElementById("total-expense");
    totalExpense.textContent = expenses;
    
    let totalBalance = parseInt(document.getElementById("total-balance").innerHTML);
    document.getElementById("total-balance").innerHTML = totalBalance - expenses;
    

    
}


