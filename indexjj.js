
    var visitorName = prompt("Please enter your name:", "Guest");
 if (visitorName === null || visitorName === "") {
            visitorName = "Visitor";
        }
        alert("Welcome to my site, " + visitorName + "!");
        document.getElementById("visitor-name").innerText = visitorName;
        document.getElementById("welcome-message").style.display = "block";

    