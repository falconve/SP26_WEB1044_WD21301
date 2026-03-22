// 1. Destructuring
// Cú pháp dùng để lấy giá trị từ array hoặc object và gán vào biến

let mangSoNguyen = [10, 20, 30, 40, 50, 60, 70];

// Lấy phần tử và gán vào biến
// Cách cũ
let phanTu1 = mangSoNguyen[0];
let phanTu2 = mangSoNguyen[1];
let phanTu3 = mangSoNguyen[2];

// console.log(phanTu1);
// console.log(phanTu2);
// console.log(phanTu3);

// Cách mới
let [a, b, c] = mangSoNguyen;

console.log(a);

// Bỏ qua phần tử, chỉ lấy ra phần 10, 30, 60
let [x, , y, , , z] = mangSoNguyen;
console.log(x, y, z); // dùng dấu phẩy để bỏ qua phần tử

let myInfo = {
  hoTen: `Tuấn Anh`,
  sdt: `0901111222`,
  diaChi: `Hải Phòng`,
  tuoi: 28,
};

// Cách cũ
let hoTenCuaToi = myInfo[`hoTen`];
let tuoiCuaToi = myInfo[`tuoi`];

// console.log(hoTenCuaToi);

// Cách mới
let { hoTen, sdt } = myInfo;

console.log(hoTen);
console.log(sdt);

// => Dùng để bóc tách dữ liệu từ array hoặc object

// 2. Spread (...)
// Spread dùng để copy (sao chép) các phần tử của array hoặc object

let danhSachSv1 = [`Tuấn Anh`, `Khánh Lâm`];
let danhSachSv2 = [`Hoàng Thắng`, ...danhSachSv1, `Xuân Huy`];
// Mục tiêu [`Tuấn Anh`, `Khánh Lâm`, `Hoàng Thắng`, `Xuân Huy`] mà không tạo ra 1 biến mới

// Cách cũ sử dụng phương thức .concat
//let danhSachSV = danhSachSv1.concat(danhSachSv2);
//console.log(danhSachSV);

console.log(danhSachSv2);

let user = {
  name: `Hùng`,
};

let newUser = {
  maNv: `PP00001`,
  ...user,
};

console.log(newUser);

// => Spread (...) không quan tâm vị trí đầu hay cuối, nó đặt đúng vào trị mà bạn sẽ đặt nó

// 3. Toán tử rest (...)
// Rest là toán tử dùng để gom các phần tử còn lại vào 1 biến

let danhSachDiem = [8, 9.5, 10, 2, 5];

let [diemViTri1, diemViTri2, diemViTri3, ...rest] = danhSachDiem;

console.log(rest);

let book = {
  id: 1,
  tenSach: `Sách toán`,
  soLuong: 20,
};

let { id, tenSach, ...phanConLai } = book;

console.log(phanConLai);

// LƯU Ý: khi dùng toán tử rest, thì biến đó chưa đc tạo ra trước đó và gán giá trị, và luôn phải
// nằm ở cuối của mảng hoặc object
// - Trước rest thì phải là 1 biến hoặc 1 key

// Bài 1: 
let product = {
    id: 1,
    tenSP: `giày nike`,
    chatLieu: `vải cao cấp`,
    soLuong: 20,
    giaTien: 200000
}

// Yêu cầu lấy thông tin tenSP, soLuong, giaTien

// Bài 2: 
let thanhPho = [`Hải Phòng`, `Hà Nội`, `Hưng Yên`, `Hà Nam`, `Bắc Ninh`];

// Lấy ra 3 phần tử Hưng Yên, Hà Nam, Bắc Ninh

// Bài 3: 
let [a, ...rest, b] = [1, 2, 3 ,4]

// Đoạn code trên đúng hay sai?
// Nếu sai thì sửa lại thế nào ?

// Bài 4: Cho danh sách sau:

let users = [
    {
        id: 1, 
        name: `An`,
        age: 20
    },
    {
        id: 2, 
        name: `Bình`,
        age: 22
    },
]

// Duyệt mảng và dùng phương thức phù hợp để in ra 
// An - 20
// Bình - 22