// Tạo thẻ
// CÚ PHÁP: createElement(tên thẻ)
let theH1 = document.createElement("h1");

// Thêm nội dung cho thẻ h1 bằng cách sử dụng innerText
theH1.innerText = `Xin chào`;

//console.log(theH1);

// Thêm thẻ h1 vào body
// CÚ PHÁP: .appendChild(thẻ cần thêm)
// LƯU Ý: sẽ thêm vào sau các thẻ HTML đã được tạo sẵn ở file html

document.body.appendChild(theH1);

// Bài tập 1: Tạo mới thẻ p và thêm nội dung cho thẻ p là
// "Hôm nay là thứ 2"
// Sau đó thêm thẻ p vào bên trong thẻ div có class là box

let theP = document.createElement(`p`);

theP.innerText = `Hôm nay là thứ 2`;

// GỢI Ý: sử dụng document.querySelector để chọn vào thẻ div
let theDiv = document.querySelector(`.box`);
if (theDiv) {
  theDiv.appendChild(theP);
}

// Tạo mới thẻ img và thêm vào body
let theImg = document.createElement(`img`);

// console.log(theImg);

// Thêm thuộc tính vào 1 thẻ HTML
// Thuộc tính: src, href, class, id
// <img src="" />

// .setAttribute(`tên thuộc tính`, `giá trị của thuộc tính`)
theImg.setAttribute(`src`, `https://placehold.co/600x400`);

document.body.appendChild(theImg);

// Bài tập 2: tạo 1 thẻ a, sau đó thêm vào body
// href là https://google.com
let theA = document.createElement(`a`);

theA.innerText = `Click vào đây để xem điều khoản`;

theA.setAttribute(`href`, `https://google.com`);
theA.setAttribute(`target`, `_blank`);
theA.setAttribute(`id`, `id-cua-the-a`);

document.body.appendChild(theA);

// CSS cho 1 thẻ bằng JS
// CÚ PHÁP: tên thẻ.style.tên thuộc tính CSS
// CÔNG THỨC:
// CSS: color => JS: color
// CSS: background-color => JS: backgroundColor
// Nếu tên thuộc tính CSS có 2 từ trở lên thì sẽ loại bỏ
// dấu gạch ngang và viết hoa chữ cái đầu tiên của từ thứ 2
// CSS: padding-top => JS: paddingTop

theDiv.style.backgroundColor = `red`;

// Xoá thẻ dùng .remove
// CÚ PHÁP: tên thẻ.remove()
//theA.remove();

// Xoá thuộc tính
// CÚ PHÁP: .removeAttribute(tên thuộc tính)
theA.removeAttribute(`href`);

// Bài tập 3:
// Tạo 1 thẻ div có class cai-hop (sử dụng JS để tạo và thêm class)
// Thêm đường viền với độ dày là 5px màu vàng
// Thêm thuộc tính CSS width, height với giá trị là 350px
// Thêm thuộc tính CSS padding với giá trị 10px

// Tạo 1 thẻ img sau đó thêm hình ảnh
// link ảnh: https://placehold.co/350x350

// Đặt thẻ img vào bên trong thẻ div có class cai-hop
