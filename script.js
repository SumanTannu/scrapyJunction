//search bar
let searchForm = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick=()=>
{
    searchForm.classList.toggle('active');
}
//login form

let loginForm = document.querySelector('.login-form');
document.querySelector('#login-btn').onclick=()=>
{
    loginForm.classList.toggle('active');
}
//product slider
//sell section
document.getElementById("scheduleBtn").addEventListener("click", function() {
    document.getElementById("pickupForm").classList.add("hidden");
    document.getElementById("additionalDetailsForm").classList.remove("hidden");
});
document.getElementById("scheduleBtn").addEventListener("click", function() {
    document.getElementById("pickupForm").classList.remove("hidden");
    document.getElementById("checkPickupsForm").classList.add("hidden");
});


//sell section
document.getElementById("checkBtn").addEventListener("click", function() {
    document.getElementById("additionalDetailsForm").classList.add("hidden");
    document.getElementById("pickupForm").classList.add("hidden");
    document.getElementById("pickupInformation").classList.toggle("hidden"); // Toggle visibility
});