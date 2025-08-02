const doctors = [
  {
    id: 1,
    name: "Dr. Alluri Raja Gopala Raju",
    specialization: "Cardiologist",
    image:
      "https://www.vaidam.com/sites/default/files/dr.-rajagopala-raju-1.png",
    available: true,
    experience: "58 years",
    education: "MBBS, MD, DM, FICA",
    location: "Hyderabad",
    hospital: "CARE Hospitals, Banjara Hills",
  },
  {
    id: 2,
    name: "Dr. Navya Chowdary",
    specialization: "Dermatologist",
    image:
      "https://sashaclinics.com/wp-content/uploads/2022/09/Dr_NavyaSha-1.png",
    available: false,
    experience: "15 years",
    education: "MBBS, MD - Dermatology , Venereology & Leprosy",
    location: "Hyderabad",
    hospital: "Luxe Dermatology and Cosmetic Surgery Centre",
  },
  {
    id: 3,
    name: "Dr. V Bramha Prasad",
    specialization: "Neurologist",
    image:
      "https://cdn.apollohospitals.com/hyderabad/2024/06/Dr-V-Bramha-Prasad-Neurosurgeon-1730178603.jpg",
    available: true,
    experience: "22 years",
    education: "MBBS, MCh - Neuro Surgery",
    location: "Hyderabad",
    hospital: "Apollo Hospitals, Secunderabad",
  },
  {
    id: 4,
    name: "Dr. P Madan Mohan Rao",
    specialization: "Pediatrician",
    image:
      "https://assets.lybrate.com/f_auto,c_limit,w_384,q_auto/img/documents/doctor/dp/34cac6360630594e2f0c86b6eb4e8616/Pediatrics-PMadanMohanRao-f42cd1",
    available: true,
    experience: "40 years",
    education: "MBBS, Diploma in Child Health (DCH)",
    location: "Hyderabad",
    hospital: "Hope Children's Hospital, Basheerbagh",
  },
  {
    id: 5,
    name: "Dr. A. V. Gurava Reddy",
    specialization: "Orthopedic",
    image:
      "https://medifyhome.com/wp-content/uploads/2022/08/dr.-a.-v.-gurava-reddy.jpg",
    available: false,
    experience: "41 years",
    education:
      "MBBS, DNB - Orthopedics/Orthopedic Surgery, M.Ch - Orthopaedics, FRCS - Trauma & Orthopedic Surgery",
    location: "Hyderabad",
    hospital: "Sunshine Hospitals, Gachibowli",
  },
];

const doctorListEl = document.getElementById("doctorList");
const doctorDetailsEl = document.getElementById("doctorDetails");
const bookingFormEl = document.getElementById("bookingForm");

function renderDoctors(list) {
  doctorListEl.innerHTML = "";
  list.forEach((doc) => {
    const div = document.createElement("div");
    div.className = "doctor-card";
    div.innerHTML = `
          <img src="${doc.image}" alt="${doc.name}" />
          <h4>${doc.name}</h4>
          <p>${doc.specialization}</p>
          <p>Status: <strong style="color:${doc.available ? "green" : "red"}">${
      doc.available ? "Available" : "Unavailable"
    }</strong></p>
        `;
    div.onclick = () => showDoctorProfile(doc);
    doctorListEl.appendChild(div);
  });
}

function filterDoctors() {
  const value = document.getElementById("searchInput").value.toLowerCase();
  const filtered = doctors.filter(
    (doc) =>
      doc.name.toLowerCase().includes(value) ||
      doc.specialization.toLowerCase().includes(value)
  );
  renderDoctors(filtered);
}

function showDoctorProfile(doc) {
  doctorDetailsEl.style.display = "block";
  bookingFormEl.style.display = "none";
  doctorDetailsEl.innerHTML = `
        <h2>${doc.name}</h2>
        <p>Specialization: ${doc.specialization}</p>
        <p>Status: <strong style="color:${doc.available ? "green" : "red"}">${
    doc.available ? "Available" : "Unavailable"
  }</strong></p>
        <button class="btn" ${
          doc.available ? "onclick='showBookingForm()'" : "disabled"
        }>Book Appointment</button>
      `;
}

function showBookingForm() {
  bookingFormEl.style.display = "block";
}

function submitAppointment() {
  const name = document.getElementById("patientName").value;
  const email = document.getElementById("patientEmail").value;
  const time = document.getElementById("appointmentTime").value;

  if (!name || !email || !time) {
    alert("Please fill all fields");
    return;
  }
  alert(
    `Appointment booked successfully for ${name} on ${new Date(
      time
    ).toLocaleString()}`
  );
  bookingFormEl.style.display = "none";
}

renderDoctors(doctors);
