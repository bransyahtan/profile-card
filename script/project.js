const contentData = [];

let detailTahun;
let detailBulan;
let detailHari;

function selisihTanggal(start, end) {
    let dateStart = new Date(start);
    let endStart = new Date(end);
    let selisih = endStart - dateStart;
    let jumlahHari = selisih / (1000 * 60 * 60 * 24);
    let berapaBulan = jumlahHari / 29;
    let jumlahBulan = Math.floor(berapaBulan);
    let sisaHari = jumlahHari % 29;
    detailBulan = jumlahBulan;
    detailHari = sisaHari;
}

function addProject(event) {
  event.preventDefault();

  let projectName = document.getElementById("input-project-name").value;
  let startProject = document.getElementById("input-start-date").value;
  let endProject = document.getElementById("input-end-date").value;
  let description = document.getElementById("input-description").value;

  let android = document.getElementById("android-checkbox");
  let reactJs = document.getElementById("react-checkbox");
  let wired = document.getElementById("wired-checkbox");
  let microchip = document.getElementById("microchip-checkbox");

  let ternaryAndroid = android.checked ? android.value : null;
  let ternaryReactJs = reactJs.checked ? reactJs.value : null;
  let ternaryWired = wired.checked ? wired.value : null;
  let ternaryMicrochip = microchip.checked ? microchip.value : null;

  let image = document.getElementById("input-blog-image").files;

  selisihTanggal(startProject, endProject);

  if (projectName === "") {
    alert("Harap Mengisi Nama Project");
    return;
  } else if (startProject === "" || endProject === "") {
    alert("Harap Mengisi Tanggal Mulai Dan Berakhir Project Anda");
    return;
  } else if (detailTahun < 0 || detailBulan < 0 || detailHari < 0) {
    alert("tanggal mulai tidak boleh lebih dari tanggal selesai");
    return;
  } else if (description === "") {
    alert("Harap mengisi Detail Deskripsi Project Anda");
    return;
  } else if (image.length === 0) {
    alert("Upload Gambar Project Anda");
    return;
  }

  image = URL.createObjectURL(image[0]);
  let dataProject = {
    project: projectName,
    bulan: detailBulan,
    hari: detailHari,
    description: description,
    tech: [ternaryAndroid, ternaryReactJs, ternaryWired, ternaryMicrochip],
    image: image,
  };

  contentData.push(dataProject);
  renderBlog();
}

function renderBlog() {
  document.getElementById("content").innerHTML = "";

  contentData.forEach(function (value, index, arr) {
    document.getElementById("content").innerHTML += `
    <div class="col-project">
      <div class="container">
        <a href="detail-blog.html">
          <div class="img-control">
            <img src="${value.image}" alt="" id="make-link-to" />
          </div>
          <h4 style="color: black">${value.project}</h4>
          <p style="font-style: normal; color: #868686; margin-top: -12px">
          durasi : ${
            value.bulan === 0
              ? value.hari + ` hari`
              : value.bulan + ` bulan ` + value.hari + ` hari`
          }
          </p>
          <p class="description" style="text-align: justify">
            ${value.description}
          </p>
        </a>
        ${value.tech[0] === null ? "" : `<i class="fa-brands fa-android"></i>`}
        ${value.tech[1] === null ? "" : `<i class="fa-brands fab fa-react"></i>`}
        ${value.tech[2] === null ? "" : `<i class="fa-solid fa-network-wired"></i>`}
        ${value.tech[3] === null ? "" : `<i class="fa-solid fa-microchip"></i>`}
        <div class="button">
          <button class="button-edit">Edit</button>
          <button class="button-delete">Delete</button>
        </div>
      </div>
    </div>`;
  });

  let toLink = document.getElementById("make-link-to");

  toLink.addEventListener("click", function () {
    window.location.href = "detail-blog.html";
  });
}
