// Người dung nhập thông tin vào các ô input
// => bấm thêm mới => dữ liệu hiển thị dưới bảng

// Khai báo 1 mảng để chứa dữ liệu
let danhSachNguoiDung = [];

let themMoi = () => {
  let hoTen = document.querySelector(`#ho-ten`).value;
  let namSinh = document.querySelector(`#nam-sinh`).value;
  let diaChi = document.querySelector(`#dia-chi`).value;

  // Kiểm tra xem có lấy được giá trị từ các ô input không
  if (hoTen && namSinh && diaChi) {
    // Tạo object để tổng hợp lại các thông tin lấy được từ
    // input
    let thongTinNguoiDung = {
      hoTen,
      diaChi,
      namSinh,
    };

    // Sử dụng phương thức .push để thêm mới 1 phần tử vào trong mảng
    danhSachNguoiDung.push(thongTinNguoiDung);
    console.log(danhSachNguoiDung);

    // Gọi hàm hiển thị
    hienThiThongTin();
  }
};

let hienThiThongTin = () => {
  // Chọn vào thẻ tbody
  let bangThongTin = document.querySelector(`#bang-thong-tin`);
  // Biến dùng để tổng hợp phần giao diện HTML
  let duLieu = ``;

  for (let i = 0; i < danhSachNguoiDung.length; i++) {
    // Dùng toán tử += để nối tiếp giá trị của biến
    duLieu += `
    <tr>
        <td>${danhSachNguoiDung[i].hoTen}</td>
        <td>${danhSachNguoiDung[i].namSinh}</td>
        <td>${danhSachNguoiDung[i].diaChi}</td>
    </tr>
  `;
  }

  //console.log(duLieu);

  if (bangThongTin) {
    bangThongTin.innerHTML = duLieu;
  }
};
