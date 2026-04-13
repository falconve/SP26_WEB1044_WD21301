// Sự kiện (Event) trong JS
// Sự kiện ấn chuột: onclick
// Sự kiện di chuột vào 1 thẻ HTML: onmouseover
// Sự kiện di chuột ra bên ngoài 1 thẻ HTML: onmouseout

let tinhTong = () => {
  // Lấy giá trị từ ô input số thứ 1
  let soThu1 = document.querySelector(`.so-thu-1`);
  // Lấy giá trị từ ô input số thứ 2
  let soThu2 = document.querySelector(`.so-thu-2`);

  if (soThu1 && soThu2) {
    // Sử dụng .value để lấy giá trị từ ô input
    let tong2So = +soThu1.value + +soThu2.value;

    //alert(tong2So);

    // BÀI TẬP 1: Hiển thị kết quả của phép tính ở thẻ p
    // GỢI Ý: lựa chọn 1 trong 2 cách
    // 1. sử dụng JS để tạo thẻ p
    // 2. tạo thẻ p ở ngoài html
    // LUỒNG: Tạo thẻ p ngoài HTML => Dùng JS chọn vào thẻ p
    // => đưa kết quả vào thẻ p
    let ketQuaPhepCong = document.querySelector(`.ket-qua-phep-cong11111`);

    if (ketQuaPhepCong) {
      ketQuaPhepCong.innerText = tong2So;
    }
  }
};

let kiemTraMatKhau = () => {
  let matKhau = document.querySelector(`.password`);
  let nhapLaiMatKhau = document.querySelector(`.re-password`);
  let thongBao = document.querySelector(`.thong-bao`);

  if (matKhau && nhapLaiMatKhau) {
    if (matKhau.value !== nhapLaiMatKhau.value) {
      //alert(`Mật khẩu không đúng`);
      thongBao.style.display = `block`;
    } else {
      thongBao.style.display = `none`;
    }
  }
};

let dangKy = () => {
  alert(`OK`);
};

// Bài tập 2:
// Sử dụng JS để lấy thông tin ở các ô input
// sau đó hiển thị ở thẻ h3

// Bài tập 3:
// Ấn chuột vào nút để tạo ra 1 thẻ thẻ div
// có kích thước 250px x 250px
// có đường viền kiểu solid
// màu nền pink
