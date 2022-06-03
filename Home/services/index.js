function Services() {
  this.getListPersonApi = function () {
    return axios({
      url: "https://6290b9f7665ea71fe13967e3.mockapi.io/NguoiDung",
      mothod: "GET",
    });
  };
}
