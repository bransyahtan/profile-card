const testimonial = new Promise((resolve, reject) => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "/src/script/testimonial.json", true);
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
       <div class="col-md-3 mb-4">
            <div class="card shadow" style="width: 23rem">
              <img
                src="${item.image}"
                class="card-img-top"
                alt="Profile"
              />
              <div class="card-body">
                <div class="quote"></div>
                <p style="text-align: justify">${item.quote}</p>
                <div class="name-rating">
                  <p class="name text-end fw-bold">${item.author}</p>
                  <p class="star  text-end fw-bold">${item.rating}<i class="fa-solid fa-star"> </i></p>
                </div>
              </div>
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
        <div class="col-md-3 mb-4">
            <div class="card shadow" style="width: 23rem">
              <img
                src="${item.image}"
                class="card-img-top"
                alt="Profile"
              />
              <div class="card-body">
                <div class="quote"></div>
                <p style="text-align: justify">${item.quote}</p>
                <div class="name-rating">
                  <p class="name text-end fw-bold">${item.author}</p>
                  <p class="star  text-end fw-bold">${item.rating}<i class="fa-solid fa-star"> </i></p>
                </div>
              </div>
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
