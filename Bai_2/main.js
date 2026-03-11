// toán tử: +, -, *, /, ++, --, /=, *=, +=, -=
// toán so sánh: >, <, >=, <=, &&, ||
// cấu trúc điều kiện: if .. else if .. else, switch .. case
// cấu trúc vòng lặp: for, do .. while, while
// hộp thoại thông báo: alert, hộp thoại cho phép nhập: prompt

// Hiển thị nội dung của 1 biến ra màn hình: console.log
console.log(`Xin chào...`);

// Hiển thị nội dung theo alert
//alert(123);

// Hộp thoại cho phép nhập nội dung
// gần giống với thẻ input của html
// CÚ PHÁP: prompt(`tên hoặc nội dung của prompt`)
//let hoTen = prompt(`Nhập tên: `);

// Bài tập 1: Sử dụng prompt để cho người dùng nhập vào tên
// Sau đó hiển thị tên của người dùng bằng alert
//alert(hoTen);
//console.log(hoTen);

// Các phép toán tử:
let soNguyen = `abc`;
// Để ép kiểu sang số thì dùng dấu + ở đầu tên biến hoặc chuỗi là
// số cần ép kiểu
console.log(+soNguyen);

let diaChi = `Ngô Gia Tự`;
let thanhPho = `Hải Phòng`;
// Cách cũ
//console.log(diaChi + `, ` + thanhPho + " " + "thuộc Việt Nam"); // => kết quả mong muốn: Ngô gia tự, Hải Phòng
// Cách mới: template string: ``
// khi sử dụng template string với biến thì cần ${tên biến}
console.log(`${diaChi}, ${thanhPho} thuộc Việt Nam`);

// %: chia lấy dư => kết quả là phần dư
let soThu1 = 1;
// Cách chậm
let ketQua = soThu1 + 1;
// Cách vừa vừa
soThu1 += 1;
// Cách nhanh
soThu1++;
// console.log(`Kết quả của phép tính là: ${ketQua}`);
console.log(soThu1);

// Các phép so sánh: &&: phép so sánh và,  ||: phép so sánh hoặc
let bieuThuc1 = true;
let bieuThuc2 = true;

// Toán tử && chỉ trả về true khi cả 2 điều kiện cùng true
// Còn lại là false
//console.log(soNguyenA && soNguyenB); //=> true

// Toán tử || chỉ trả về false khi cả 2 điều kiện cùng false
// Còn lại là true
let bieuThuc3 = false;
let bieuThuc4 = false;
//console.log(bieuThuc3 || bieuThuc4); // => false
// Bảng falsy và truthy
// Tất cả các giá trị là truthy ngoại trừ những giá trị sau đây gọi
// là falsy: 0, -0, NaN, null, undefined, false, document.all, ""

let bieuThuc5 = true;
let zeroNumber = 0;

if (bieuThuc5 || zeroNumber) {
  console.log(`điều kiện đúng`);
} else {
  console.log(`điều kiện sai`);
}

// Switch .. case
let thang = 1;
// Ví dụ: Hiển thị mùa theo tháng
switch (thang) {
  case (1, 2, 3, 4):
    console.log(`Mùa này là: mùa xuân`);
    break;
  case (5, 6, 7):
    console.log(`Mùa này là mùa hạ`);
    break;
  case (8, 9, 10):
    console.log(`Mùa thu`);
    break;
  case (11, 12):
    console.log(`Mùa đông`);
    break;
  default:
    console.log(`Nhập sai tháng`);
    break;
}

// Vòng lặp
// In ra từ 1 .. 10
for (let index = 1; index < 11; index++) {
  console.log(index);
}

// In từ 10 .. 1
for (let index = 10; index > 0; index--) {
  console.log(index);
}

// Hàm dùng để tái sử dụng 1 đoạn code nhiều lần
let soNguyenC = 1;
let soNguyenD = 2;
let ketQua2So = soNguyenC + soNguyenD;
console.log(ketQua2So);
// Đưa đoạn code tính tổng vào trong hàm
// CÚ PHÁP: let <tên hàm> = () => {logic của hàm}
// CHẠY HÀM: <tên hàm>();

// Khai báo hàm
let tinhHieu = 1;
let tinhTong = () => {
  console.log(`Đây là hàm`);
};

// Chạy hàm
tinhTong();

// Bài tập 2:
// Khai báo hàm hiển thị tên, mã sinh viên, lớp
// Hiển thị sử dụng alert
// đặt tên hàm là hienThiThongTin

let hienThiThongTin = () => {
  alert(`
    Họ tên: Tuấn Anh
    MSSV: PP0001;
    Lớp: WD21301
    `);
};
hienThiThongTin();

// Bài tập 3:
// Cho người dùng nhập vào điểm toán, điểm văn, điểm anh
// Sau đó khai báo 1 hàm tinhDiemTBCVaXepLoai: hàm này sẽ sẽ thực hiện
// tính điểm TBC cho 3 môn người dùng vừa nhập vào
// Sau khi tính điểm xong thì xếp loại theo điều kiện dưới đây
// Nếu điểmTBC >=8 và điểm Toán >=9 => xếp loại giỏi
// Nếu điểmTBC >=7 và điểm Toán >=8 => xếp loại khá
// Nếu điểmTBC >=6 và điểm Toán >=7 => xếp loại trung bình
// Còn lại xếp loại kém
// Hiển thị kết quả xếp loại ở console.log
