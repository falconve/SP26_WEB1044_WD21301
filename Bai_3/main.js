// Mảng (Array):
// - Mảng dùng để lưu trữ nhiều giá trị trong 1 biến. Và các
// phần tử ngăn cách nhau bởi dấu phẩy
// LƯU Ý:  JS KHÔNG PHÂN BIỆT KIỂU DỮ LIỆU KHI LƯU TRONG MẢNG
// CÚ PHÁP: let <tên biến> = []
let sinhVien1 = `Tuấn Anh`;
let sinhVien2 = `Hoàng Thắng`;
let sinhVien3 = `Khánh Lâm`;
// Khai báo mảng sinh viên
let danhSachSinhVien = [`Tuấn Anh`, `Hoàng Thắng`, `Khánh Lâm`];

// Khai báo mảng chưa tên sinh viên và tuổi
let danhSachSVTuoi = [`Tuấn Anh`, 30, `Hoàng Thắng`, 33, `Khánh Lâm`, 20];

// console.log(`Danh sách SV: ${danhSachSinhVien}`);
// console.log(`Danh sách SV kèm tuổi: ${danhSachSVTuoi}`);

// Vị trí của phần tử đầu tiên trong mảng là số 0

// Truy xuất vào phần tử trong mảng
// CÚ PHÁP: <tên mảng>[vị trí của phần tử]

//console.log(danhSachSinhVien[0]);

// Sử dụng vòng lặp for để hiển thị
// sử dụng .length để lấy ra số lượng phần tử của mảng
// for (let index = 0; index < danhSachSinhVien.length; index++) {
//   console.log(danhSachSinhVien[index], index);
// }

// for .. of
// LƯU Ý: khi sử dụng for .. of không thể lấy ra được vị trí của
// phần tử

for (let sinhVien of danhSachSVTuoi) {
  console.log(sinhVien);
}

// khai báo biến với const: không bị thay đổi giá trị của biến
// trong suốt quá trình chương trình được cháy
// khai báo biến với let: cập nhật lại được giá trị của biến

// const giaTriKhongThayDoi = 1;

// giaTriKhongThayDoi = 2;

// console.log(giaTriKhongThayDoi);

// Phương thức của mảng
// CÚ PHÁP dùng phương thức với mảng: <tên mảng>.<tên phương thức>
let danhSachHoaQua = [`🍎`, `🍒`, `🥑`];
console.log(danhSachHoaQua);
// Phương thức thêm phần tử mới vào mảng: push
// thêm phần tử vào cuối mảng
danhSachHoaQua.push(`🥕`);
console.log(danhSachHoaQua);

// Tìm vị trí của phần tử trong mảng: indexOf
// Cú pháp: indexOf(tên phần tử) => kết quả là vị trí
// LƯU Ý: nên khai báo biển khi sử dụng indexOf để lưu lại vị trí
// tìm dc
// - Nếu indexOf không tìm thấy phần tử trong mảng sẽ trả về -1
// let viTriTao = danhSachHoaQua.indexOf(`123`);
// console.log(viTriTao);

// Phương thức thêm phần tử vào vị trí bất kì trong mảng
// CÚ PHÁP: splice(vị trí bắt đầu, xoá phần tử, phần tử cần thêm);
// Thêm phần tử vào đầu mảng
danhSachHoaQua.splice(0, 1);
console.log(danhSachHoaQua);

// Bài tập 1:
// Khai báo mảng gồm 5 phần tử là tên các tỉnh thành phố ở Việt nam
let tinhThanhPho = [];

// Sử dụng phương thức phù hợp để thực hiện các yêu cầu sau:
// 1. Thêm vào cuối mảng 1 phần tử
// 2. Hiển thị phần tử cuối mảng (gợi ý sử dụng .length)
// 3. Xoá phần tử thứ 3
// 4. Sửa phần tử ở vị trí số 4 thành tỉnh Lào Cai
