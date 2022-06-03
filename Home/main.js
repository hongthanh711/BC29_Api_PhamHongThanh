window.onscroll = function () {
  if (window.scrollY > 100) {
    document.querySelector("header").classList.add("header-fixed");
    document.getElementById("brand").style.display = "none";
  } else {
    document.querySelector("header").classList.remove("header-fixed");
    document.getElementById("brand").style.display = "block";
  }
};

var services = new Services();

function getEle(id) {
  document.getElementById(id);
}

//GetList
function getListPerson() {
  services
    .getListPersonApi()
    .then(function (result) {
      renderListPerson(result.data);
    })
    .catch(function (error) {
      console.log(error);
    });
}

getListPerson();

function renderListPerson(data) {
  var content = "";
  data.forEach(function (person) {
    content += `
    <div class="col-3" style="width:400px">
                    <div class="card">
                        <img class="card-img-top" src="./images/${person.hinhAnh}" alt="Card image">
                        <div class="card-body">
                            <p class="card-info">${person.ngonNgu}</p>
                            <h4 class="card-title">${person.hoTen}</h4>
                            <p class="card-text">${person.moTa}</p>
                        </div>
                    </div>
                </div>
    `;
  });

  getEle("team-content").innerHTML = content;
}
