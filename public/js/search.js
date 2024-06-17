const search = $("#search");

const formHandler = async (event) => {
    event.preventDefault();

    const checkIn = $("#startDate").val();
    const checkOut = $("#endDate").val();
    
    fetch("/api/guest")
        .then(function (response) {
            return response.json();
        } )
        .then(async function(data) {
            const guestId = data.id;

            if (guestId, checkIn && checkOut) {
                // Send a POST request to the API endpoint
                const response = await fetch('/api/res', {
                    method: 'POST',
                    body: JSON.stringify({ guestId, checkIn, checkOut }),
                    headers: { 'Content-Type': 'application/json' },
            });
        
        }
        })

    document.location.replace('/booking');
}

search.on("click", formHandler);