// In your script.js file
const doctors = [{
        id: 1,
        name: "Dr. Sarah Johnson",
        specialization: "Interventional Cardiologist",
        experience: "15 years",
        education: "MD, Cardiology (Harvard Medical School)",
        availability: "Available Now",
        consultationFee: "$200",
        bio: "Board-certified cardiologist specializing in minimally invasive procedures. Awarded 'Best Cardiologist' by AMA in 2023.",
        image: "https://www.news-medical.net/images/Article_Images/ImageForArticle_21444_17237252394561665.jpg"
    },
    {
        id: 2,
        name: "Dr. Michael Chen",
        specialization: "Child Neurologist",
        experience: "12 years",
        education: "MD, Pediatric Neurology (Johns Hopkins)",
        availability: "Available Now",
        consultationFee: "$180",
        bio: "Specializes in pediatric epilepsy and neurodevelopmental disorders. Published over 50 research papers in neurology.",
        image: "https://www.medicarespots.com/wp-content/uploads/2020/04/1527143231Niranjan1.jpg"
    },
    {
        id: 3,
        name: "Dr. Emily Rodriguez",
        specialization: "Orthopedic Surgeon",
        experience: "18 years",
        education: "MD, Orthopedics (Mayo Clinic)",
        availability: "In Surgery",
        consultationFee: "$250",
        bio: "Expert in joint replacements and sports medicine. Team physician for several professional sports teams.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHvqrN0fe4_0SR2kTduZwpEav-fmyWuBqQag&s"
    },
    {
        id: 4,
        name: "Dr. James Wilson",
        specialization: "Dermatologist",
        experience: "10 years",
        education: "MD, Dermatology (Stanford University)",
        availability: "Available Now",
        consultationFee: "$175",
        bio: "Specializes in cosmetic dermatology and skin cancer prevention. Pioneer in laser treatment technologies.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUTiDltzzc8MOOzIHxwZ2YpSE47OG4cnFhTA&s"
    },
    {
        id: 5,
        name: "Dr. Robert Kim",
        specialization: "General Physician",
        experience: "20 years",
        education: "MD, Internal Medicine (Yale School of Medicine)",
        availability: "Available Now",
        consultationFee: "$150",
        bio: "Primary care specialist with focus on preventive medicine. Recognized as 'Top Doctor' by State Medical Board for 5 consecutive years.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjHT161cMjdMHAJXas6C3VaElTxl4Y4TFbCw&s"
    },
    {
        id: 6,
        name: "Dr. Angela Williams",
        specialization: "Interventional Cardiologist",
        experience: "16 years",
        education: "MD, Cardiology (Columbia University)",
        availability: "Available Now",
        consultationFee: "$210",
        bio: "Specializes in complex coronary interventions. Director of Cardiac Catheterization Lab. NIH-funded researcher.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcxz8furzKc5vmRx63Kw-aU4VqmoJ3luSbrQ&s"
    }
];

// Function to render doctors
function renderDoctors(doctorsToRender) {
    const doctorGrid = document.getElementById('doctorGrid');
    doctorGrid.innerHTML = '';

    doctorsToRender.forEach(doctor => {
        const doctorCard = document.createElement('div');
        doctorCard.className = 'doctor-card';
        doctorCard.innerHTML = `
      <div class="doctor-image">
        <img src="${doctor.image}" alt="${doctor.name}">
        <span class="availability ${doctor.availability === 'Available Now' ? 'available' : 'unavailable'}">
          ${doctor.availability}
        </span>
      </div>
      <div class="doctor-info">
        <h3>${doctor.name}</h3>
        <p class="specialization">${doctor.specialization}</p>
        <p class="experience">${doctor.experience} experience</p>
        <p class="education">${doctor.education}</p>
        <p class="fee">Consultation: ${doctor.consultationFee}</p>
        <p class="bio">${doctor.bio}</p>
        <button class="btn-book">Book Appointment</button>
        <button class="btn-profile">View Profile</button>
      </div>
    `;
        doctorGrid.appendChild(doctorCard);
    });
}

// Initial render
renderDoctors(doctors);

// Filter functionality
document.getElementById('search').addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filtered = doctors.filter(doctor =>
        doctor.name.toLowerCase().includes(searchTerm)
    );
    renderDoctors(filtered);
});

document.getElementById('specializationFilter').addEventListener('change', (e) => {
    const specialization = e.target.value;
    if (!specialization) {
        renderDoctors(doctors);
        return;
    }
    const filtered = doctors.filter(doctor =>
        doctor.specialization === specialization
    );
    renderDoctors(filtered);
});

document.getElementById('availabilityFilter').addEventListener('change', (e) => {
    const availability = e.target.value;
    if (!availability) {
        renderDoctors(doctors);
        return;
    }
    const filtered = doctors.filter(doctor =>
        doctor.availability === availability
    );
    renderDoctors(filtered);
});