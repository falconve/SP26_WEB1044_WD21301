// Ví dụ tạo 1 ứng dụng quản lý thông tin sinh viên
// Các thông tin quản lý gồm có: msv, họ tên, địa chỉ, điểm tb

// Hướng 1: sử dụng object
let student = {
  msv: `PP0001`,
  hoTen: `Tuấn Anh`,
  diaChi: `Hải Phòng`,
  diemTb: 8.5,
};

// Bài toán nếu có 10 sinh viên
//let student1 = {...}
//let student2 = {...}
// let dsSV = [
//   {
//     msv: `PP0001`,
//     hoTen: `Tuấn Anh`,
//     diaChi: `Hải Phòng`,
//     diemTb: 8.5,
//   },
//   {
//     msv: `PP0001`,
//     hoTen: `Tuấn Anh`,
//     diaChi: `Hải Phòng`,
//     diemTb: 8.5,
//   },
// ];

// Khái niệm OOP (Lập trình hướng đối tượng)
// Dùng để mô tả các sự vật, sự việc, hoạt động, thông tin có thật
// ở ngoài đời vào lập trình

// class được coi là 1 khuôn mẫu
// các đối tượng tạo ra từ class coi như là 1 bản sao của khuôn mẫu
// Ví dụ
// CÚ PHÁP: khởi tạo class
// class tên_class {}

// Cách đặt tên class: viết hoá các chữ cái đầu tiên của các từ
class Student {
  // Trong class thông thường sẽ gồm 2 phần:
  // 1. Thuộc tính (biến): dùng để mô tả về đối tượng
  msv;
  hoTen;
  diaChi;
  diemTB;

  // Hàm tạo (constructor)
  constructor(msv, hoTen, diaChi, diemTB) {
    this.msv = msv;
    this.hoTen = hoTen;
    this.diaChi = diaChi;
    this.diemTB = diemTB;
  }

  // 2. Phương thức (hàm): là hành vi mà đối tượng đó thực hiện
  hienThiThongTin() {
    return `${this.msv} - ${this.hoTen} - ${this.diaChi} - ${this.diemTB}`;
  }
}

// Khởi tạo đối tượng (object) từ class (khuôn mẫu)
let student1 = new Student(`PP00002`, `Khánh Lâm`, `Hà Nội`, 9.6);
// student1 => tên đối tượng (giống như tạo 1 biến)
// new Student() => khởi tạo 1 đối tượng mới với các thông tin đc truyền
// vào như đối số của hàm
console.log(student1);

let student2 = new Student(`PP00003`, `Hoàng Thắng`, `Quảng Ninh`, 3.0);
console.log(student2);

let dsSinhVien = [];

// Thêm các sinh viên vừa tạo vào trong mảng dsSinhVien
// bằng phương thức push
dsSinhVien.push(student1, student2);

console.log(dsSinhVien);

// Tạo mới 1 class mô tả về sản phẩm
// gồm có các thông tin sau: id, tên sản phẩm, danh mục, giá tiền
class SanPham {
  id;
  tenSanPham;
  danhMuc;
  giaTien;

  constructor(id, tenSanPham, danhMuc, giaTien) {
    this.id = id;
    this.tenSanPham = tenSanPham;
    this.danhMuc = danhMuc;
    this.giaTien = giaTien;
  }
}

let sanPham1 = new SanPham(1, `Ghế`, `Đồ nội thất`, 100000);
sanPham1.tenSanPham = `Bàn`; // Cách này chưa đúng
console.log(sanPham1);
