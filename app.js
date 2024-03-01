// app.js
document.getElementById('flightSearchForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting traditionally

    
    const jsonData = {
        flights: [
            require ('./data/LHR_CDG_ADT1_TYPE_1.json'),
            // Add more flight objects as needed
        ]
    };

    // Process and display the JSON data
    displayFlightResults(jsonData);
});

function displayFlightResults(data) {
    const flights = data.flights;
    const resultsContainer = document.getElementById('flightResults');

    // Clear previous results
    resultsContainer.innerHTML = '';

    flights.forEach(flight => {
        const flightDetails = `
            <div class="bg-white p-4 mb-4 rounded shadow-md">
                <p class="text-lg font-semibold">${flight.flightOffer}</p>
                <p>Departure Airport: ${flight.departure}</p>
                <p>Destination Airport: ${flight.arrival}</p>
                <p>Departure Time: ${new Date(flight.marketingCarrier).toLocaleString()}</p>
                <p>Arrival Time: ${new Date(flight.at).toLocaleString()}</p>
            </div>
        `;

        resultsContainer.innerHTML += flightDetails;
    });
}