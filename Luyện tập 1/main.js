// Sử dụng querySelector để chọn và các ô input và các thông báo lỗi
let hoTen = document.querySelector(`#ho-ten`);
let email = document.querySelector(`#email`);
let tenDangNhap = document.querySelector(`#ten-dang-nhap`);
let matKhau = document.querySelector(`#mat-khau`);
let nhapLaiMatKhau = document.querySelector(`#nhap-lai-mat-khau`);

let loiHoTen = document.querySelector(`#loi-ho-ten`);
let loiEmail = document.querySelector(`#loi-email`);
let loiTenDangNhap = document.querySelector(`#loi-ten-dang-nhap`);
let loiMatKhau = document.querySelector(`#loi-mat-khau`);
let loiNhapLaiMatKhau = document.querySelector(`#loi-nhap-lai-mat-khau`);
let thongBaoDangKy = document.querySelector(`#thong-bao-dang-ky`);

//
let dangKy = () => {
  let trangThai = false;

  if (hoTen.value == ``) {
    loiHoTen.textContent = `Họ tên không được để trống`;
    // sử dụng classList.add(`tên class`) để thêm tên class vào 1
    // thẻ HTML
    hoTen.classList.add(`input-error`);
    trangThai = true;
  } else if (hoTen.value.length < 2) {
    loiHoTen.textContent = `Họ tên phải lớn hơn 2 ký tự`;
    trangThai = true;
  }

  if (email.value == ``) {
    loiEmail.textContent = `Email không được để trống`;
    email.classList.add(`input-error`);
    trangThai = true;
  }

  if (tenDangNhap.value == ``) {
    loiTenDangNhap.textContent = `Tên đăng nhập không được để trống`;
    tenDangNhap.classList.add(`input-error`);
    trangThai = true;
  } else if (tenDangNhap.value.length < 5) {
    loiTenDangNhap.textContent = `Tên đăng nhập phải lớn hơn 5 ký tự`;
  }

  if (matKhau.value == ``) {
    loiMatKhau.textContent = `Mật khẩu không được để trống`;
    matKhau.classList.add(`input-error`);
    trangThai = true;
  }

  if (nhapLaiMatKhau.value == ``) {
    loiNhapLaiMatKhau.textContent = `Nhập lại mật khẩu không được để trống`;
    nhapLaiMatKhau.classList.add(`input-error`);
    trangThai = true;
  } else if (matKhau.value !== nhapLaiMatKhau.value) {
    loiNhapLaiMatKhau.textContent = `Mật khẩu không khớp`;
  }

  if (!trangThai) {
    thongBaoDangKy.textContent = `Đăng ký thành công`;
    xoaLoi();
  }
};

// Hàm này sẽ dc sử dụng khi mà người dùng đã điền đầy đủ
// các thông tin ở ô input
let xoaLoi = () => {
  loiHoTen.textContent = ``;
  loiEmail.textContent = ``;
  loiTenDangNhap.textContent = ``;
  loiMatKhau.textContent = ``;
  loiNhapLaiMatKhau.textContent = ``;

  // Sử dụng classList.remove để xoá class của 1 thẻ HTML
  hoTen.classList.remove(`input-error`);
  email.classList.remove(`input-error`);
  tenDangNhap.classList.remove(`input-error`);
  matKhau.classList.remove(`input-error`);
  nhapLaiMatKhau.classList.remove(`input-error`);

  // Xoá hết dữ liệu ở ô input
  hoTen.value = ``;
  email.value = ``;
  tenDangNhap.value = ``;
  matKhau.value = ``;
  nhapLaiMatKhau.value = ``;
};
