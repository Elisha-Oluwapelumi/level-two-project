const apiKey = 'V1:rcbi3ojghsa1sg00:DEVCENTER:EXT';
const apiSecret = 'JE2pJi5u';

async function getAccessToken() {
  try {
    const response = await fetch('https://api-crt.cert.havail.sabre.com/v2/auth/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Basic ${btoa(`${apiKey}:${apiSecret}`)}`
      },
      body: 'grant_type=client_credentials'
    });

    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.status}`);
    }

    const data = await response.json();
    return data.access_token;
  } catch (error) {
    console.error('Error fetching access token:', error);
    alert('Failed to retrieve access token. Please try again later.');
  }
}

async function searchFlights() {
  const origin = document.getElementById('origin').value;
  const destination = document.getElementById('destination').value;
  const date = document.getElementById('date').value;

  if (!origin || !destination || !date) {
    alert('Please fill in all fields.');
    return;
  }

  try {
    const accessToken = await getAccessToken();

    const response = await fetch(`https://api-crt.cert.havail.sabre.com/v4/shop/flights?origin=${origin}&destination=${destination}&departureDate=${date}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.status}`);
    }

    const data = await response.json();
    displayFlights(data);
  } catch (error) {
    console.error('Error fetching and displaying flights:', error);
    alert('Failed to fetch flight data. Please try again later.');
  }
}

function displayFlights(flights) {
  const resultsList = document.getElementById('flight-results');
  resultsList.innerHTML = '';

  if (!flights || flights.length === 0) {
    resultsList.innerHTML = '<li>No flights found.</li>';
    return;
  }

  flights.forEach(flight => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      <strong>Price:</strong> $${flight.price.total}<br>
      <strong>Airline:</strong> ${flight.validatingCarrier}<br>
      <strong>Departure Date:</strong> ${flight.departureDateTime}<br>
      <strong>Arrival Date:</strong> ${flight.arrivalDateTime}<br>
    `;
    resultsList.appendChild(listItem);
  });
}
let url = 'https://opensky-network.org/api/states/all?lamin=45.8389&lomin=5.9965&lamax=47.8229&lomax=10.5226';
fetch(url)
  .then(response => response.json())
  .then(data => console.log(data)); 
  