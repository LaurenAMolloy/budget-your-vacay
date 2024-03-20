//Select a Paragraph & Button
var tripInfoButton = document.querySelector(".trip-info");
var dailyBudget = document.querySelector(".daily-budget");

//Write a Function to Get User Input

var tripInfo = function () {
    var totalBudget = Number(prompt("What is your total budget?"));
    var accommodation = Number(prompt("What are your accommodation costs?"));
    var numDays = Number(prompt("How many days does your trip last?"));

    calculateDailyBudget(totalBudget, accommodation, numDays);
};

//Write a Function to Calculate Your Daily Budget

var calculateDailyBudget = function(totalBudget, accommodation, numDays) {
    var daily = ((totalBudget - accommodation) / numDays).toFixed(2);

    dailyBudget.innerText = `You can spend $${daily} a day on food and fun`;
};
//Call the Function & Add a Click Event
tripInfoButton.addEventListener("click", tripInfo);


