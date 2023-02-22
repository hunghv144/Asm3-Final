"use strict";
// Xây dưng phần xác thực địa chỉ Email- -----------------------
//Tạo các biến chỏ tới các các class cần thực hiện.
const handleSubmit = document.querySelector(".btn");
const personContent = document.querySelector(".personal-info-content");
const submitMail = document.querySelector(".submit-mail");
const errorEmail = document.querySelector(".error-email");

// Sử dụng Dom EventLis
handleSubmit.onclick = function () {
  //Lấy giá trị input của Email rồi chuyển sang chữ về dạng in thường.
  const emailValue = document
    .querySelector(".input-email")
    .value.toLocaleLowerCase();
  console.log(emailValue);

  // Hàm xác thực mail------
  const checkMail =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  // Math giá trị input với hàm xác thực mail
  const check = emailValue.match(checkMail);

  //So sánh và đưa kết quả hiển thị
  if (check) {
    personContent.style.display = "block";
    submitMail.style.display = "none";
  } else {
    errorEmail.textContent = " Hãy nhập email để xác thực";
  }
};

//tạo nút Viewmore cho phàn Info------------------------

const viewMore = document.querySelectorAll(".viewMore");
const viewLess = document.querySelectorAll(".viewLess");
const controlView = document.querySelectorAll(".info");
const infoContent = document.querySelectorAll(".info-content");

// Thiết lập con trỏ chuột khi hover  qua phân info
for (let i = 0; i < controlView.length; i++)
  controlView[i].addEventListener("mouseover", function () {
    viewMore[i].style.display = "block";
  });

for (let i = 0; i < controlView.length; i++)
  controlView[i].addEventListener("mouseout", function () {
    viewMore[i].style.display = "none";
  });
// Thiết lập nút View more
for (let i = 0; i < controlView.length; i++)
  viewMore[i].addEventListener("click", function () {
    infoContent[i].style.display = "block";
    viewMore[i].style.display = "none";
    viewLess[i].style.display = "block";
    controlView[i].addEventListener("mouseover", function () {
      viewMore[i].style.display = "none";
    });
  });
// Thiết lập nút View less
for (let i = 0; i < controlView.length; i++)
  viewLess[i].addEventListener("click", function () {
    infoContent[i].style.display = "none";
    viewLess[i].style.display = "none";
    controlView[i].addEventListener("mouseover", function () {
      viewMore[i].style.display = "block";
    });
  });
