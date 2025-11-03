// salary_calculator.js

function calculateSalary() {
    // 1. Get input values from HTML text boxes
    var hourlyRateValue = document.getElementById("hourly_wage").value;
    var hoursPerWeekValue = document.getElementById("hours_per_week").value;
    
    // 2. Parse the input values to ensure they are treated as numbers (using parseFloat) [cite: 104]
    var hourlyRate = parseFloat(hourlyRateValue);
    var hoursPerWeek = parseFloat(hoursPerWeekValue);
    
    // Check for invalid inputs
    if (isNaN(hourlyRate) || isNaN(hoursPerWeek) || hourlyRate < 0 || hoursPerWeek < 0) {
        document.getElementById("salary_output").innerHTML = "Please enter valid, non-negative numbers for hourly rate and hours per week.";
        return;
    }

    // 3. Calculate the annual salary (Hourly Rate * Hours Per Week * 52 Weeks) [cite: 113]
    var annualSalary = hourlyRate * hoursPerWeek * 52;

    // 4. Format the output string
    var outputMessage = "The estimated annual salary is: $" + annualSalary.toFixed(2).toLocaleString();

    // 5. Output the result to the designated paragraph element [cite: 116, 117]
    document.getElementById("salary_output").innerHTML = outputMessage;
}