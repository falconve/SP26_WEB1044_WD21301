// // Ví dụ tạo 1 ứng dụng quản lý thông tin sinh viên
// // Các thông tin quản lý gồm có: msv, họ tên, địa chỉ, điểm tb

// // Hướng 1: sử dụng object
// let student = {
//   msv: `PP0001`,
//   hoTen: `Tuấn Anh`,
//   diaChi: `Hải Phòng`,
//   diemTb: 8.5,
// };

// // Bài toán nếu có 10 sinh viên
// //let student1 = {...}
// //let student2 = {...}
// // let dsSV = [
// //   {
// //     msv: `PP0001`,
// //     hoTen: `Tuấn Anh`,
// //     diaChi: `Hải Phòng`,
// //     diemTb: 8.5,
// //   },
// //   {
// //     msv: `PP0001`,
// //     hoTen: `Tuấn Anh`,
// //     diaChi: `Hải Phòng`,
// //     diemTb: 8.5,
// //   },
// // ];

// // Khái niệm OOP (Lập trình hướng đối tượng)
// // Dùng để mô tả các sự vật, sự việc, hoạt động, thông tin có thật
// // ở ngoài đời vào lập trình

// // class được coi là 1 khuôn mẫu
// // các đối tượng tạo ra từ class coi như là 1 bản sao của khuôn mẫu
// // Ví dụ
// // CÚ PHÁP: khởi tạo class
// // class tên_class {}

// // Cách đặt tên class: viết hoá các chữ cái đầu tiên của các từ
// class Student {
//   // Trong class thông thường sẽ gồm 2 phần:
//   // 1. Thuộc tính (biến): dùng để mô tả về đối tượng
//   msv;
//   hoTen;
//   diaChi;
//   diemTB;

//   // Hàm tạo (constructor)
//   constructor(msv, hoTen, diaChi, diemTB) {
//     this.msv = msv;
//     this.hoTen = hoTen;
//     this.diaChi = diaChi;
//     this.diemTB = diemTB;
//   }

//   // 2. Phương thức (hàm): là hành vi mà đối tượng đó thực hiện
//   hienThiThongTin() {
//     return `${this.msv} - ${this.hoTen} - ${this.diaChi} - ${this.diemTB}`;
//   }
// }

// // Khởi tạo đối tượng (object) từ class (khuôn mẫu)
// let student1 = new Student(`PP00002`, `Khánh Lâm`, `Hà Nội`, 9.6);
// // student1 => tên đối tượng (giống như tạo 1 biến)
// // new Student() => khởi tạo 1 đối tượng mới với các thông tin đc truyền
// // vào như đối số của hàm
// console.log(student1);

// let student2 = new Student(`PP00003`, `Hoàng Thắng`, `Quảng Ninh`, 3.0);
// console.log(student2);

// let dsSinhVien = [];

// // Thêm các sinh viên vừa tạo vào trong mảng dsSinhVien
// // bằng phương thức push
// dsSinhVien.push(student1, student2);

// console.log(dsSinhVien);

// // Tạo mới 1 class mô tả về sản phẩm
// // gồm có các thông tin sau: id, tên sản phẩm, danh mục, giá tiền
// class SanPham {
//   id;
//   tenSanPham;
//   danhMuc;
//   giaTien;

//   constructor(id, tenSanPham, danhMuc, giaTien) {
//     this.id = id;
//     this.tenSanPham = tenSanPham;
//     this.danhMuc = danhMuc;
//     this.giaTien = giaTien;
//   }
// }

// let sanPham1 = new SanPham(1, `Ghế`, `Đồ nội thất`, 100000);
// sanPham1.tenSanPham = `Bàn`;
// // Cách này chưa đúng
// // truy cập thuộc tính từ bên ngoài class SanPham
// console.log(sanPham1);

// // 1. Tính đóng gói
// // Bảo vệ các thuộc tính của class, nhằm mục đích không cho truy cập từ
// // bên ngoài class

// // Cú pháp: #tên thuộc tính

// class XeMay {
//   #mauSac;
//   #hangXe;
//   #namSanXuat;

//   // getter & setter
//   // getter: để lấy giá trị của thuộc tính (hàm)
//   get hangXe() {
//     return this.#hangXe;
//   }

//   // setter: để cập nhật lại giá trị cho thuộc tính (hàm)

//   // CÁCH ĐẶT TÊN CHO SETTER & GETTER: nên đặt trùng tên với tên của thuộc tính
//   set hangXe(value) {
//     this.#hangXe = value;
//   }

//   constructor(mauSac, hangXe, namSanXuat) {
//     this.#mauSac = mauSac;
//     this.#hangXe = hangXe;
//     this.#namSanXuat = namSanXuat;
//   }
// }

// let xeMay1 = new XeMay(`đen`, `Honda`, 2025);
// //xeMay1.mauSac = `trắng`; // cập nhật lại giá trị của key mauSac (cập nhật bên ngoài)
// //xeMay1.#hangXe = `yamaha`; // lỗi không cho phép cập nhật giá trị của thuộc
// // tính bên ngoài class XeMay

// // Sử dụng setter để cập nhật lại hangXe
// xeMay1.hangXe = `Yamaha`;

// console.log(xeMay1.hangXe); // sử dụng getter để hiển thị hãng xe

// Khai báo 1 class HocSinh
// gồm những thuộc tính: id, hoTen, gioiTinh, diaChi, diemTB

// Kiểm tra diemTB khi nhập vào phải không âm và nhỏ hơn 10

// Đảm bảo tính đóng gói
// Tạo 1 đối tượng từ class HocSinh. Các thông tin phải được nhập vào
// thông qua prompt

// Khai báo class HocSinh
class HocSinh {
  #id;
  #hoTen;
  #gioiTinh;
  #diaChi;
  #diemTB;

  constructor(id, hoTen, gioiTinh, diaChi, diemTB) {
    this.#id = id;
    this.#hoTen = hoTen;
    this.#gioiTinh = gioiTinh;
    this.#diaChi = diaChi;
    this.#diemTB = diemTB;
  }

  get id() {
    return this.#id;
  }

  set id(value) {
    this.#id = value;
  }

  get hoTen() {
    return this.#hoTen;
  }

  set hoTen(value) {
    this.#hoTen = value;
  }

  get gioiTinh() {
    return this.#gioiTinh;
  }

  set gioiTinh(value) {
    this.#gioiTinh = value;
  }

  get diaChi() {
    return this.#diaChi;
  }

  set diaChi(value) {
    this.#diaChi = value;
  }

  get diemTB() {
    return this.#diemTB;
  }

  set diemTB(value) {
    if (value >= 0 && value <= 10) {
      this.#diemTB = value;
    } else {
      console.log(`Điểm không hợp lệ`);
      return;
    }
  }
}

let id = prompt(`Nhập id: `);
let hoTen = prompt(`Nhập họ tên: `);
let gioiTinh = prompt(`Nhập giới tính: `);
let diaChi = prompt(`Nhập địa chỉ: `);
let diemTB = prompt(`Nhập điểm TB: `);

// Khởi tạo đối tượng học sinh từ class HocSinh
let hocSinh1 = new HocSinh();

hocSinh1.id = id;
hocSinh1.hoTen = hoTen;
hocSinh1.gioiTinh = gioiTinh;
hocSinh1.diaChi = diaChi;
hocSinh1.diemTB = diemTB;

let hienThiThongTin = () => {
  return `
    Id: ${hocSinh1.id}
    Họ tên: ${hocSinh1.hoTen}
    Giới Tính: ${hocSinh1.gioiTinh}
    Địa chỉ: ${hocSinh1.diaChi}
    Điểm TB: ${hocSinh1.diemTB}
  `;
};

console.log(hienThiThongTin());
