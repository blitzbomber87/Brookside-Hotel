const searchBtn = $("#search");

// save check-in and check-out dates in local storage and redirect to booking
const formHandler = async (event) => {
    event.preventDefault();

    // set the check in and check out dates from user input
    const checkIn = $("#startDate").val();
    const checkOut = $("#endDate").val();

    // save variables to local storage to be accessed during booking page
    localStorage.setItem("checkIn", checkIn);
    localStorage.setItem("checkOut", checkOut);

    // redirect to booking page
    document.location.replace('/booking');
}

searchBtn.on("click", formHandler);