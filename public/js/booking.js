const bookBtn = $("#book");

// get request to get data from api url
async function getData(url) {
    try {
        const response = await fetch(url,
            {method: "GET"}
        )
    
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        
        return data;
    } catch (err) {console.log(err)};
}

// post request to send data to reservation api
async function postRes(guestId) {

    // retrieve check-in and check-out values from local storage
    const checkIn = localStorage.getItem("checkIn");
    const checkOut = localStorage.getItem("checkOut");
    
    const response = await fetch("/api/res", {
    method: 'POST',
    body: JSON.stringify({ guestId, checkIn, checkOut }),
    headers: { 'Content-Type': 'application/json' },
    })

    return;
}

// post request to send data to reserved rooms api
async function postResRoom(reservationId, roomTypeId, quantity) {
    // if quantity is not equal to the Select Qty option, do fetch request
    if (quantity !== "Select Qty") {
        await fetch('/api/resRoom', {
            method: 'POST',
            body: JSON.stringify({ reservationId: reservationId, roomTypeId: roomTypeId, quantity: quantity }),
            headers: { 'Content-Type': 'application/json' },
        })
    }
}

// retrieve guest id, create reservation, retrieve reservation id, create reserved rooms, and redirect to confirmation page
const bookingFormHandler = async (event) => {
    event.preventDefault();

    // get guest id from api
    const guestData = await getData("/api/guest");
    const guestId = guestData.id;

    // create reservation through api
    postRes(guestId);

    // get reservation id from api
    const allRes = await getData("/api/res");
    const resId = allRes[allRes.length - 1].id;

    // for loop to cycle through all the different room quantities and create reserved rooms for reservation
    for (let i=1; i<=6; i++) {
        const cardQty = $(`#${i}`).val();

        // create reserved room for reservation
        if (cardQty !== "Select Qty" || !cardQty) {
            const reservedRoom = await postResRoom(resId, i, Number(cardQty));
        }
    }

    // redirect to confirmation page
    document.location.replace('/confirmation');
}

bookBtn.on("click", bookingFormHandler);