const testimonial = new Promise((resolve, reject) => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api.npoint.io/84096740cdd9ba5c0784", true);
  xhr.onload = function () {
    if (xhr.status == 200) {
      resolve(JSON.parse(xhr.response));
    } else {
      reject("Error Loading Data");
    }
  };

  xhr.onerror = function () {
    reject("Network error");
  };

  xhr.send();
});

async function allTestimonial() {
  try {
    const response = await testimonial;
    let testimonialForHtml = "";

    response.forEach((item) => {
      testimonialForHtml += `
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

    document.getElementById("testimonials").innerHTML = testimonialForHtml;
  } catch (err) {
    console.log(err);
  }
}
allTestimonial();

async function filterTestimonial(rating) {
  try {
    const response = await testimonial;
    let testimonialForHtml = "";

    const dataFiltered = response.filter((data) => data.rating === rating);
    if (dataFiltered.length === 0) {
      testimonialForHtml = `<h3>Data not found !</h3>`;
    } else {
      dataFiltered.forEach((item) => {
        testimonialForHtml += `
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

    document.getElementById("testimonials").innerHTML = testimonialForHtml;
  } catch (err) {
    console.log(err);
  }
}
