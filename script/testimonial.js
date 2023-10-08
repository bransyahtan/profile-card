const testimonialData = [
  {
    author: "Sultan Bransyah",
    quote: `Terima kasih kepada tim pengembang aplikasi ini! Antarmuka yang intuitif, 
            kinerja cepat, dan fitur yang luar 
            biasa membuat hidup saya lebih mudah`,
    image: "./assets/images/profilPhoto.jpg",
    rating: 5,
  },
  {
    author: "Kucing Kuning",
    quote: `Aplikasi ini sangat buruk, penuh dengan bug, sulit digunakan, 
            dan membuat pengalaman pengguna sangat frustasi. Saya kecewa total.`,
    image: "./assets/images/cat1.jpg",
    rating: 1,
  },
  {
    author: "Kucing Abu",
    quote: `Terima kasih kepada tim pengembang aplikasi ini! Antarmuka yang intuitif, 
            kinerja cepat, dan fitur yang luar 
            biasa membuat hidup saya lebih mudah`,
    image: "./assets/images/cat2.jpg",
    rating: 4,
  },
  {
    author: "Kucing Kecil",
    quote: `Aplikasi ini sangat buruk, penuh dengan bug, sulit digunakan, 
    dan membuat pengalaman pengguna sangat frustasi. Saya kecewa total.`,
    image: "./assets/images/cat3.jpg",
    rating: 2,
  },
  {
    author: "Kucing Teriak",
    quote: `Aplikasi ini sangat buruk, penuh dengan bug, sulit digunakan, 
            dan membuat pengalaman pengguna sangat frustasi. Saya kecewa total.`,
    image: "./assets/images/cat4.jpg",
    rating: 2,
  },
  {
    author: "Kucing Jilat",
    quote: `Terima kasih kepada tim pengembang aplikasi ini! Antarmuka yang intuitif, 
            kinerja cepat, dan fitur yang luar 
            biasa membuat hidup saya lebih mudah`,
    image: "./assets/images/cat5.jpg",
    rating: 3,
  },
  {
    author: "Kucing Menatap Masa Depan",
    quote: `Terima kasih kepada tim pengembang aplikasi ini! Antarmuka yang intuitif, 
            kinerja cepat, dan fitur yang luar 
            biasa membuat hidup saya lebih mudah`,
    image: "./assets/images/cat6.jpg",
    rating: 4,
  },
];

function allTestimonial() {
  let testimonialHTML = "";

  testimonialData.forEach(function (item) {
    testimonialHTML += `
                <div class="card-testi">
                            <img class="profile-testimonial" src="${item.image}"
                            alt="profile">
                            <div class="quote">
                                <p>${item.quote}</p>
                            </div>
                            <div class="name-rating">
                                <p class="name">${item.author}</p>
                                <p class="star">${item.rating} <i class="fa-solid fa-star"></i></p>
                            </div>
                        </div> 

          `;
  });

  document.getElementById("testimonials").innerHTML = testimonialHTML;
}

allTestimonial();

// filtered testimonial
function filterTestimonial(rating) {
  let testimonialHTML = "";

  const testimonialFiltered = testimonialData.filter(function (item) {
    return item.rating === rating;
  });

  if (testimonialFiltered.length === 0) {
    testimonialHTML += `<h1> Data not found! </h1>`;
  } else {
    testimonialFiltered.forEach(function (item) {
      testimonialHTML += `
                    <div class="card-testi">
                    <img class="profile-testimonial" src="${item.image}"
                    alt="profile">
                    <div class="quote">
                        <p>${item.quote}</p>
                    </div>
                    <div class="name-rating">
                    <p class="name">${item.author}</p>
                    <p class="star">${item.rating} <i class="fa-solid fa-star"></i></p>
                    </div>
                </div> 
          `;
    });
  }

  document.getElementById("testimonials").innerHTML = testimonialHTML;
}
