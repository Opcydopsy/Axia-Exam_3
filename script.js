
    // Task 1
    function checkGrade() {
      const score = Number(document.getElementById("gradeScore").value);
      let grade = "";
      if (score >= 70) grade = "A";
      else if (score >= 60) grade = "B";
      else if (score >= 50) grade = "C";
      else grade = "F";
      document.getElementById("gradeOutput").textContent = "Grade: " + grade;
    }

    // Task 2
    function login() {
      const username = document.getElementById("loginUsername").value;
      const password = document.getElementById("loginPassword").value;
      const message = (username === "admin" && password === "1234") ? 
        "Login successful" : "Login failed";
      document.getElementById("loginOutput").textContent = message;
    }

    // Task 3
    function convertToFahrenheit() {
      const celsius = Number(document.getElementById("celsiusInput").value);
      const fahrenheit = (celsius * 9 / 5) + 32;
      document.getElementById("fahrenheitOutput").textContent = 
        `${celsius}°C = ${fahrenheit.toFixed(2)}°F`;
    }

    // Task 4
    function canVote() {
      const age = Number(document.getElementById("ageInput").value);
      const message = (age >= 18) ? "You are eligible to vote." : "You are NOT eligible to vote.";
      document.getElementById("voteOutput").textContent = message;
    }

    // Task 5
    function temperatureStatus() {
      const temp = Number(document.getElementById("tempInput").value);
      let status = "";
      if (temp < 0) status = "Freezing";
      else if (temp <= 15) status = "Cold";
      else if (temp <= 25) status = "Cool";
      else status = "Warm";
      document.getElementById("tempStatusOutput").textContent = "Status: " + status;
    }
  