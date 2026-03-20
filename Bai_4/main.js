// Khai báo 1 mảng để lưu lại thông tin
// cấu hình của 1 chiếc laptop
// VD: chip, ram, bộ nhớ, màn hình

let laptop = [`intel`, `16 gb`, `256 gb`, `13 inch`];
//console.log(laptop[0]);

// Object: đối tượng
// Dùng để mô tả các sự vật, sự việc ở ngoài đường vào trong lập trình
// Object sẽ mô tả một đối tượng chi tiết hơn Mảng

let thongTinLaptop = {
  chip: `intel`,
  ram: `16 gb`,
  ssd: `256gb`,
  manHinh: `13 inch`,
};

// Khai báo 1 biến để lưu lại thông tin của sinh viên gồm: msv & họ tên
let sv1 = [`PP00001`, `Tuấn Anh`];

let thongTinSv1 = {
  msv: `PP00001`,
  hoTen: `Tuan Anh`,
  tuoi: 10,
  soThich1: [`đi chơi`, `xem phim`, `đá bóng`],
};

// CÚ PHÁP: khai báo object
// let tên object = {
//      key1: value1,
//      key2: value2
// }
// key là thuộc tính để mô tả về đối tượng
// value là giá trị của thuộc tính đó
// value có thể là: chuỗi, mảng, số, ...

// Khai báo 1 object mô tả về 1 chiếc xe máy
// gồm: hãng, dung tích, màu sắc, biển số xe
let xeMay = {
  hang: `honda`,
  dungTich: `125 cc`,
  mauSac: `trắng`,
  bienSoXe: `15a999.99`,
};
// CÚ PHÁP: lấy giá trị của 1 key
// tên object.tên key
// console.log(xeMay.hang); // C1
// console.log(xeMay[`dungTich`]); // C2

// Duyệt và in tất cả value của object
console.log(`Object cũ: `);
// for (let key in xeMay) {
//   console.log(xeMay[key]);
// }

// Thêm key vào trong object
// CÚ PHÁP: tên object . tên key = value
xeMay.gia = 10000;
console.log(`Object mới: `);
// for (let key in xeMay) {
//   console.log(xeMay[key]);
// }

// Cập nhật lại value cho 1 key đã tồn tại
xeMay.hang = `Yamaha`;
console.log(`Object sau cập nhật: `);
// for (let key in xeMay) {
//   console.log(xeMay[key]);
// }

// Lấy ra tên của tất cả key có trong object
// CÚ PHÁP: Object.keys(tên object cần lấy)
// kết quả: trả về 1 mảng các key
// console.log(Object.keys(xeMay)); // hang, gia, mauSac, dungTich, bienSoXe

// Lấy ra tên của tất cả value có trong object
// CÚ PHÁP: Object.values(tên object cần lấy)
// kết quả: trả về 1 mảng các value
// console.log(Object.values(xeMay));

// Kiểm tra sự tồn tại của key trong object
// CÚ PHÁP: tên object.hasOwnProperty(`tên key cần kiểm tra`)
// Kết quả là
// true => tìm thấy
// false => không tìm thấy

// console.log(xeMay.hasOwnProperty(`bienSoXe1`));

// Khai báo thông tin 3 bạn sinh viên gồm: mã sinh viên, họ tên, điểm
// Lưu trữ vào 1 biến
let thongTinSv2 = {
  msv: `2`,
  hoTen: `Khánh Lâm`,
  tuoi: 15,
  soThich1: [`đi chơi`, `xem phim`, `đá bóng`],
};

let thongTinSv3 = {
  msv: `3`,
  hoTen: `Hoàng Thắng`,
  tuoi: 18,
  soThich1: [`đi chơi`, `xem phim`, `đá bóng`],
};

let danhSachSV = []; // mảng rỗng
console.log(danhSachSV);

// sử dụng phương thức .push để thêm các obj vào trong mảng
danhSachSV.push(thongTinSv1);
danhSachSV.push(thongTinSv2);
danhSachSV.push(thongTinSv3);

console.log(danhSachSV);
