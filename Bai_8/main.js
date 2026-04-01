// Truy xuất (điều khiển) các thẻ HTML

// Điều khiển 1 thẻ HTML
// CÚ PHÁP: document.querySelector(`tên thẻ, tên class, tên id`);

// LƯU Ý:
// - Nên đặt truy xuất vào 1 biến
// - Khi thực hiện việc truy xuất mà trả về giá trị null tức là
// không tìm thấy thẻ, class , id

// Ví dụ: Truy xuất thẻ h1

let theH1 = document.querySelector(`h1`); // tên thẻ
let theH2 = document.querySelector(`.the-h2`); // class
let theH3 = document.querySelector(`#the-h3`); // id
// để hiển thị việc truy xuất ở console.log

console.log(theH1);
console.log(theH2);
console.log(theH3);

// Phải sử dụng if .. else để kiểm tra sự tồn tại
// của 1 thẻ
if (theH1) {
  theH1.style.color = `red`;
}

if (theH2) {
  theH2.style.color = `pink`;
}

// Điều khiển nhiều thẻ HTML
// CÚ PHÁP: sử dụng document.querySelectorAll(`tên thẻ, tên class, tên id`)

// LƯU Ý:
// - kết quả trả về sẽ là 1 node list (gần giống mảng)
// - Vẫn sử dụng đc vòng lặp và thứ tự phần tử
let danhSachTheP = document.querySelectorAll(`p`);

if (danhSachTheP) {
  console.log(danhSachTheP);

  // Thay đổi toàn bộ màu sắc của thẻ p thành màu green
  for (let theP of danhSachTheP) {
    theP.style.color = `green`;
  }
}

// Lấy ra nội dung của 1 thẻ HTML
// innerText và innerHTML

// innerText: lấy ra tất cả nội dung bên trong thẻ HTML
let noiDungTheH1 = theH1.innerText;
console.log(noiDungTheH1);

// innerHTML: lấy ra tất cả nội dung kèm với tên thẻ HTML
let noiDungTheH2 = theH2.innerHTML;
console.log(noiDungTheH2);

// Bài tập 1:
// Tạo 3 thẻ p
// với nội dung tuỳ ý. Sử dụng querySelectorAll và innerText để lấy ra nội dung
// của các thẻ p này
