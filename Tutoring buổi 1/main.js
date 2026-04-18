// Khai báo biến & kiểu dữ liệu
// CÚ PHÁP: let + tên biến
let hoTen = `Tuấn Anh`; // Chuỗi thì bỏ vào dấu ``
let tuoi = 28; // số nguyên
let diem = 7.5; // số thập phân
let mangSoNguyen = [1, 2, 3, 4]; // Mảng các số
let dsTen = [`Tuấn Anh`, `Khánh Lâm`];
let trangThai = true; // boolean: true hoặc false
let thongTinLopHoc = {
  tenLop: `WD21301`,
  phongHoc: `C207`,
  soLuongSV: 20,
}; // object

let dsCacLop = [
  {
    TenLop: `WD21301`,
    phongHoc: `C207`,
    soLuongSV: 20,
  },
  {
    TenLop: `SD21301`,
    phongHoc: `C206`,
    soLuongSV: 25,
  },
];

// Vòng lặp
// for, for .. in (Object), for .. of, forEach
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

for (let phanTuSoNguyen of mangSoNguyen) {
  phanTuSoNguyen * 2;
  console.log(phanTuSoNguyen);
}

// Các phương thức của mảng
// push => thêm phần tử vào cuối của mảng
// splice => thêm, sửa xoá các phần tử trong mảng
let thanhPho = [`Hà Nội`, `Hải Phòng`, `Hưng Yên`];

// => thêm phần tử vào mảng
thanhPho.push(`Quảng Ninh`);
console.log(thanhPho);

// => thêm vào bất cứ vị trí nào
thanhPho.splice(1, 0, "Thanh Hoá");
console.log(thanhPho);

// xoá phần tử
thanhPho.splice(2, 1);
console.log(thanhPho);

// sửa (cập nhật)
thanhPho.splice(2, 1, "Cà Mau");
console.log(thanhPho);

// lấy độ dài của mảng => .length
// lấy ra 1 phần tử => tên mảng[vị trí phần tử]
console.log(thanhPho[1]);

// Object
let thongTinSV = {
  hoTen: `Tuấn Anh`,
  msv: `PP00001`,
};

console.log(thongTinSV.msv);

// thêm 1 key vào object
thongTinSV.lopHoc = `WD21301`;

// cập nhật lại value cho 1 key của object
thongTinSV.hoTen = `Khánh Lâm`;
console.log(thongTinSV);

// document.querySelector => chọn thẻ trong html
let theH1 = document.querySelector(`#the-h1`);

if (theH1) {
  // Lấy nội dung thẻ h1
  console.log(theH1.textContent);
  // Cập nhật lại nội dung cho thẻ HTML
  theH1.textContent = `Tạm biệt`;

  // Khi nào dùng .textContent => sử dụng với mọi thẻ
}
let hoTenInput = document.querySelector(`#ho-ten`);
// Khi nào dùng .value => chỉ sử dụng với thẻ input
if (hoTenInput) {
  // Lấy giá trị của thẻ input
  console.log(hoTenInput.value);

  hoTenInput.value = `đây là input để nhập họ tên`;
}

let hop = document.querySelector(`.hop`);

if (hop) {
  // Tạo thẻ p
  let theP = document.createElement(`p`);

  // Thêm nội dung cho thẻ p
  theP.textContent = `Đây là thẻ p`;

  // Đưa vào thẻ div có class hop và
  // hiển thị lên giao diện

  // LƯU Ý
  // - Nếu muốn thêm thẻ vào thẻ body thì sử dụng
  // document.body.appendChild(tên biến)

  // - Nếu muốn thêm thẻ vào một bên trong 1 thẻ
  // HTML bất kì thì
  // tên biến.appendChild(tên biến);
  hop.appendChild(theP);
}

// thêm class vào thẻ HTML
// .classList.add(`tên class`);
let theH1Hp = document.querySelector(`#the-h1-hp`);

if (theH1Hp) {
  theH1Hp.classList.add(`noi-bat`);
}

if (theH1) {
  theH1.classList.remove(`noi-bat`);
}

// thêm phần nội dung vào HTML
// .innerHTML
let giaoDien = `
<img src="https://placehold.co/600x400" />
`;

if (hop) {
  hop.innerHTML = giaoDien;
}

// thêm thuộc tính vào thẻ HTML
// .setAttribute(`tên thuộc tính`, `giá trị thuộc tính`)
let link = document.querySelector(`#link`);

if (link) {
  link.setAttribute(`href`, `https://facebook.com`);
  link.setAttribute(`target`, `_blank`);
  link.setAttribute(`class`, `noi-bat`);
}

// TỔNG KẾT
// 1. Khai báo biến & kiểu dữ liệu
// 2. Các phương thức của mảng & object
// 3. Vòng lặp của mảng & object
// 4. làm việc với DOM
// - document.querySelector
// - textContent, value
// - createELement, appendChild
// - classList.add, classList.remove
// - setAttribute
// - Sự kiện: click, onmouseouver, onmouseout
// LƯU Ý với sự kiện: là phải có hàm
// 1. hàm do JS tạo ra
// 2. hàm tự tạo
