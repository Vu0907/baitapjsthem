// bai1
const thue60 = 0.05;
const thue120 = 0.1;
const thue210 = 0.15;
const thue384 = 0.2;
const thue624 = 0.25;
const thue960 = 0.3;
const thuerest = 0.35;

var thue_1 = 0;
var thue_2 = 0;
var thue_3 = 0;
var thue_4 = 0;
var thue_5 = 0;
var thue_6 = 0;
var thue_rest = 0;
var tongTien = 0;
function Bai1() {
  var hoten = document.getElementById("hoten").value;
  var thunhap = Number(document.getElementById("thunhap").value);
  var phuthuoc = Number(document.getElementById("phuthuoc").value);
  var thunhapchiuthue = thunhap - 4000000 - phuthuoc * 1600000;
  var tienThue = tinhTienthue(thunhapchiuthue);
  var result1 =
    "Họ tên: " +
    hoten +
    "; Tiền thuế thu nhập cá nhân: " +
    new Intl.NumberFormat("vn-VN").format(tienThue) +
    " VND";
  document.getElementById("infoTienthue").innerHTML = result1;
}

function tinhTienthue(thunhapchiuthue) {
  if (0 <= thunhapchiuthue && thunhapchiuthue <= 60000000) {
    thue_1 = tinhthue_1(thunhapchiuthue, thue60);
    tongTien = thue_1;
  } else if (60000000 < thunhapchiuthue && thunhapchiuthue <= 120000000) {
    thue_1 = tinhthue_1(60000000, thue60);
    thue_2 = tinhthue_2(thunhapchiuthue, thue120);
    tongTien = thue_1 + thue_2;
  } else if (120000000 < thunhapchiuthue && thunhapchiuthue <= 210000000) {
    thue_1 = tinhthue_1(60000000, thue60);
    thue_2 = tinhthue_2(120000000, thue120);
    thue_3 = tinhthue_3(thunhapchiuthue, thue210);
    tongTien = thue_1 + thue_2 + thue_3;
  } else if (210000000 < thunhapchiuthue && thunhapchiuthue <= 384000000) {
    thue_1 = tinhthue_1(60000000, thue60);
    thue_2 = tinhthue_2(120000000, thue120);
    thue_3 = tinhthue_3(210000000, thue210);
    thue_4 = tinhthue_4(thunhapchiuthue, thue384);
    tongTien = thue_1 + thue_2 + thue_3 + thue_4;
  } else if (384000000 < thunhapchiuthue && thunhapchiuthue <= 624000000) {
    thue_1 = tinhthue_1(60000000, thue60);
    thue_2 = tinhthue_2(120000000, thue120);
    thue_3 = tinhthue_3(210000000, thue210);
    thue_4 = tinhthue_4(384000000, thue384);
    thue_5 = tinhthue_5(thunhapchiuthue, thue624);
    tongTien = thue_1 + thue_2 + thue_3 + thue_4 + thue_5;
  } else if (624000000 < thunhapchiuthue && thunhapchiuthue <= 960000000) {
    thue_1 = tinhthue_1(60000000, thue60);
    thue_2 = tinhthue_2(120000000, thue120);
    thue_3 = tinhthue_3(210000000, thue210);
    thue_4 = tinhthue_4(384000000, thue384);
    thue_5 = tinhthue_5(624000000, thue624);
    thue_6 = tinhthue_6(thunhapchiuthue, thue960);
    tongTien = thue_1 + thue_2 + thue_3 + thue_4 + thue_5 + thue_6;
  } else if (960000000 < thunhapchiuthue) {
    thue_1 = tinhthue_1(60000000, thue60);
    thue_2 = tinhthue_2(120000000, thue120);
    thue_3 = tinhthue_3(210000000, thue210);
    thue_4 = tinhthue_4(384000000, thue384);
    thue_5 = tinhthue_5(624000000, thue624);
    thue_6 = tinhthue_6(960000000, thue960);
    thue_rest = tinhthue_rest(thunhapchiuthue, thuerest);
    tongTien = thue_1 + thue_2 + thue_3 + thue_4 + thue_5 + thue_6 + thue_rest;
  } else {
    alert("Số tiền không hợp lệ");
  }
  return tongTien;
}

function tinhthue_1(thunhapchiuthue, phantram) {
  var result = thunhapchiuthue * phantram;
  return result;
}

function tinhthue_2(thunhapchiuthue, phantram) {
  var result = (thunhapchiuthue - 60000000) * phantram;
  return result;
}

function tinhthue_3(thunhapchiuthue, phantram) {
  var result = (thunhapchiuthue - 120000000) * phantram;
  return result;
}

function tinhthue_4(thunhapchiuthue, phantram) {
  var result = (thunhapchiuthue - 210000000) * phantram;
  return result;
}

function tinhthue_5(thunhapchiuthue, phantram) {
  var result = (thunhapchiuthue - 384000000) * phantram;
  return result;
}
function tinhthue_6(thunhapchiuthue, phantram) {
  var result = (thunhapchiuthue - 624000000) * phantram;
  return result;
}
function tinhthue_rest(thunhapchiuthue, phantram) {
  var result = (thunhapchiuthue - 960000000) * phantram;
  return result;
}

//Bai2

function Bai2() {
  var loaikhach = document.getElementById("loaikhach").value;
  var makhach = document.getElementById("makhach").value;
  var socaocap = Number(document.getElementById("socaocap").value);
  var ketnoi = Number(document.getElementById("ketnoi").value);
  var tiencap = 0;
  var result2 = "";

  switch (loaikhach) {
    case "A":
      {
        tiencap = tinhtiencap(4.5, 20.5, 7.5, socaocap);
      }
      break;
    case "B":
      {
        if (0 <= ketnoi && ketnoi <= 10) {
          dichvu = 75;
        } else if (ketnoi >= 10) {
          dichvu = 75 + (ketnoi - 10) * 5;
        }
        tiencap = tinhtiencap(15, dichvu, 50, socaocap);
      }
      break;
    default:
      break;
  }
  result2 = "Mã khách hàng: " + makhach + "; Tiền cáp: $" + tiencap;
  document.getElementById("infoTiencap").innerHTML = result2;
}
function tinhtiencap(hoadon, dichvu, caocap, socaocap) {
  tiencap = hoadon + dichvu + caocap * socaocap;
  return tiencap;
}
