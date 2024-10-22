document.getElementById("ageForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    const dobInput = document.getElementById("dob").value;
    if (!dobInput) {
        document.getElementById("result").textContent = "Please enter a valid date of birth.";
        return;
    }

    const dob = new Date(dobInput); //compare btn date of birth & todaydate
    const today = new Date();

    let age = today.getFullYear() - dob.getFullYear();
    const monthDifference = today.getMonth() - dob.getMonth();

    // Adjust age if the birthday hasn't occurred this year yet
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < dob.getDate())) {
        age--;
    }

    document.getElementById("result").textContent = `You are ${age} years old.`;
});
