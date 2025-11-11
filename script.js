const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
// Select all elements with class 'prices'
const priceElements = document.querySelectorAll(".prices");

// Initialize total
let total = 0;

// Loop through each price cell and add the values
priceElements.forEach(price => {
  total += parseFloat(price.textContent);
});

// Create a new row and cell for total
const totalRow = document.createElement("tr");
const totalCell = document.createElement("td");

// Make the total cell span across 2 columns
totalCell.setAttribute("colspan", "2");
totalCell.textContent = "Total Price: " + total;

// Append the total cell to the row
totalRow.appendChild(totalCell);
  
};

getSumBtn.addEventListener("click", getSum);

