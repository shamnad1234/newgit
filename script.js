// Mobile menu
function toggleMenu() {
    const nav = document.querySelector(".nav-links");
    nav.classList.toggle("active");
}


// Taxi rates
const rates = {
    sedan: 15,
    suv: 20,
    premium: 30
};


// Booking form
document
    .getElementById("bookingForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        const pickup = document.getElementById("pickup").value;
        const drop = document.getElementById("drop").value;

        const distance = Number(
            document.getElementById("distance").value
        );

        const passengers = document.getElementById("passengers").value;

        const taxiType = document.getElementById("taxiType").value;

        const pricePerKm = rates[taxiType];

        // Base fare
        const baseFare = 50;

        // Calculate fare
        let fare = baseFare + (distance * pricePerKm);

        // Extra passenger charge
        if (passengers > 4) {
            fare += 100;
        }

        // Show result
        document.getElementById("result").style.display = "block";

        document.getElementById("fare").textContent =
            "₹" + fare.toFixed(2);

        document.getElementById("tripDetails").textContent =
            pickup + " → " + drop +
            " | " + distance + " KM" +
            " | " + passengers + " Passenger(s)";

        // Save booking data
        localStorage.setItem("taxiBooking", JSON.stringify({
            pickup: pickup,
            drop: drop,
            distance: distance,
            passengers: passengers,
            taxiType: taxiType,
            fare: fare
        }));
    });


// Confirm booking
function confirmBooking() {

    const booking = localStorage.getItem("taxiBooking");

    if (!booking) {
        alert("Please calculate your fare first.");
        return;
    }

    const data = JSON.parse(booking);

    alert(
        "🚕 Booking Confirmed!\n\n" +
        "Pickup: " + data.pickup + "\n" +
        "Destination: " + data.drop + "\n" +
        "Distance: " + data.distance + " KM\n" +
        "Fare: ₹" + data.fare.toFixed(2)
    );
}

