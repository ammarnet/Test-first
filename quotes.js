
 /*let input = prompt("Enter a number:");

// check if the user clicked 'Cancel' (returns null) or entered a non-number
if (input !== null && !isNaN(input) && input !== "") {
    let num = Number(input);
    console.log("Success! Your number is:", num);
} else {
    console.log("That is not a valid number.");
}*/
const quotes = [
    "The best way to predict the future is to create it.", // Index 0
    "Code is like humor. When you have to explain it, it’s bad.", // Index 1
    "Fix the cause, not the symptom.", // Index 2
    "Simplicity is the soul of efficiency.", // Index 3
    "Before software can be reusable it first has to be usable." // Index 4
];

// 2. Prompt the user and convert to a number
let userInput = prompt("Enter a number:");
let number = Number(userInput);

// 3. Perform the Modulus operation
// Formula: $remainder = number \pmod{5}$
let index = number % 5;

// 4. Handle negative numbers (optional but good practice)
// This ensures the index is always positive
index = Math.abs(index);

// 5. Write the result to the page
if (userInput !== null && !isNaN(number)) {
    document.write("<h3>Your Number: " + number + "</h3>");
    document.write("<h3>Remainder: " + index + "</h3>");
    document.write("<p><strong>Quote:</strong> " + quotes[index] + "</p>");
} else {
    document.write("Invalid input. Please refresh and enter a number.");
}
// 1. Create an initial array of 3 favorite websites
let favSites = [
    "https://www.google.com",
    "https://www.github.com",
    "https://www.wikipedia.org"
];

// Function to helper-print links to the page
function displayLinks(title) {
    document.write("<h3>" + title + "</h3>");
    favSites.forEach(url => {
        document.write(`<a href="${url}" target="_blank">${url}</a><br>`);
    });
}

// 2. Write initial list to the page
displayLinks("Original Website List:");

// 3. Prompt user for their favorite website
let userSite = prompt("Enter your favorite website URL (include https://):");

// 4. Add it as the last item
if (userSite) {
    favSites.push(userSite);
}




// This assumes 'favSites' is your updated array after the push and shift
document.write("<h3>My Revised Website List:</h3>");

// Loop through the array and create the HTML links
favSites.forEach(function(url) {
    document.write('<a href="https://www.google.com " target="_blank">' + url + '</a><br>');
});



