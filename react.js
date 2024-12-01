const bookingForm = document.getElementById('booking-form');
const appointmentsList = document.getElementById('appointments-list');

let appointments = [];

bookingForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const patientName = document.getElementById('patient-name').value;
    const doctor = document.getElementById('doctor-select').value;
    const appointmentDate = document.getElementById('appointment-date').value;
    const appointmentTime = document.getElementById('appointment-time').value;

    if (!patientName || !doctor || !appointmentDate || !appointmentTime) {
        alert('Please fill in all fields.');
        return;
    }

    const newAppointment = {
        patientName,
        doctor,
        appointmentDate,
        appointmentTime
    };

    appointments.push(newAppointment);
    displayAppointments();

    bookingForm.reset();
});

function displayAppointments() {
    appointmentsList.innerHTML = '';

    appointments.forEach((appointment) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
      <div class="appointment-info">
        <strong>${appointment.patientName}</strong> has an appointment with <strong>${appointment.doctor}</strong>
      </div>
      <div class="appointment-time">
        Date: ${appointment.appointmentDate} | Time: ${appointment.appointmentTime}
      </div>
    `;
        appointmentsList.appendChild(listItem);
    });
}
