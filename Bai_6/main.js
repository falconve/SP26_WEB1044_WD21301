// Hàm dùng để tái sử dụng lại 1 đoạn code nhiều lần
// CÚ PHÁP: let tên_hàm = () => {}

// 1. Hàm có tham số
// thamSo1 => coi là tham số
let hamCoThamSo = (thamSo1, thamSo2) => {
  console.log(`Tham số 1: ${thamSo1} & ${thamSo2}`);
};

hamCoThamSo(123, 456); // => số 123 được coi là đối số
// 2. Hàm không có tham số
let hamKhongCoThamSo = () => {
  let a = 1;
  let b = 2;
  let kq = a + b;
  //console.log(a + b);
};
hamKhongCoThamSo(); // KQ = 3
//let ketQuaHamKhongThamSo = hamKhongCoThamSo();
//3. Hàm có trả về: phải có từ khoá return
let tinhHieu = (soThu1, soThu2) => {
  return soThu2 - soThu1;
};
// KQ = -2
let ketQuaTinhHieu = tinhHieu(7, 5); // -2

// Sử dụng kết quả của 2 hàm trên thực hiện phép nhân 2;
//console.log(ketQuaHamKhongThamSo * 2); // 6
console.log(ketQuaTinhHieu * 2); // -4

// 4. Hàm không trả về có tham số
let hamKhongTraVeCoThamSo = (chieuDai, chieuRong) => {
  let dienTichHCN = chieuDai * chieuRong;
};

hamKhongTraVeCoThamSo(1, 2);

// Hàm có tham số mặc định: default parameter
let xinChao = (hoTen = `người dùng`) => {
  console.log(`xin chào ${hoTen}`);
};

xinChao();

// rest parameter (...) trong hàm
// lưu ý: rest parameter luôn luôn phải là tham số cuối cùng
// trong hàm
let tamBiet = (age, ...hoTen) => {
  console.log(age);
  console.log(`tạm biệt ${hoTen}`);
};

tamBiet(20, `Hùng`, `Tuấn`, `An`, `Nghĩa`, `Hưng`, `Vũ`);

// Bài 1: Viết hàm nhập vào điểm toán, anh, lý
// sau đó thực hiện tính điểm trung bình

// Bài 2: sủ dụng lại kể quả điểm trung bình của bài 1
// Thực hiện xếp loại sinh viên. Nếu điểm TB > 8 => giỏi
// điểm TB > 7 => khá
// điểm TB > 6 => trung bình
// còn lại yếu
