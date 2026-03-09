// console.log dùng để hiển thị dữ liệu ra màn hình
console.log(`Xin chào....`);

// Khai báo biến
// CÚ PHÁP: let <tên biến> = giá trị;
// VD: khai báo 1 biến để lưu lại tên của mình
let hoTen = `Tuấn Anh`; // Kiểu chuỗi
console.log(hoTen);

// Khai báo 1 biến tuoi lưu lại tuổi của mình
let tuoi = 28; // Kiểu số (kiểu số nguyên)
let diem = 7.5; // Kiểu số (kiểu số thực)
console.log(tuoi);
console.log(diem);

// Cách 2
let xinChao;

xinChao = `Hello`;

// Bài tập 1:
// Khai báo 2 biến so1, so2
// Sau đó gán giá trị là 2 số nguyên cho 2 biến vừa tạo
let so1 = 10; // số
let so2 = `20`; // chuỗi

// Khai báo biến phepCong. Biến này dùng để lưu lại kết quả
// phép tính cộng của 2 biến so1 và so2
let ketQua = so1 / so2; // số + chuỗi
// Dự đoán
// lần 1: 1020
// lần 2: lỗi
// lần 3: -10

// Dùng console.log để hiển thị ra màn hình
console.log(ketQua);
// LƯU Ý:
// KHI THỰC HIỆN PHÉP CỘNG GIỮA CHUỖI VÀ SỐ
// THÌ KẾT QUẢ SẼ LÀ CHUỖI

// KHI THỰC HIỆN CÁC PHÉP TÍNH CÒN LẠI GIỮA CHUỖI VÀ SỐ
// THÌ KẾT QUẢ SẼ PHỤ THUỘC VÀO JS. CỤ THỂ JS SẼ TÌM CÁCH
// ĐỂ ÉP KIỂU CỦA CHUỖI SANG SỐ
// NẾU KHÔNG ÉP ĐƯỢC KIỂU THÌ KẾT QUẢ SẼ LÀ NaN
