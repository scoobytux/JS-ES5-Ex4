const questions = document.getElementsByClassName("question"),
  activeQuestion = document.getElementsByClassName("question--active"),
  qShowBtn = document.getElementsByClassName("btn-q-show"),
  stepShowBtn = document.getElementById("btn-steps-show"),
  stepBox = document.getElementById("steps-box"),
  stepBoxContent = document.getElementById("steps-box-content"),
  closeStepBoxBtn = document.getElementById("close-steps-box");

// Steps in 3-block model
const q1Steps = `<strong style="text-decoration: underline;">Đề bài:</strong> Viết chương trình nhập vào ngày, tháng, năm (Giả sử nhập đúng, không cần kiểm tra hợp lệ). Tìm ngày, tháng, năm của ngày tiếp theo, tương tự cho ngày trước đó.<br>
<strong style="text-decoration: underline;">Lời giải:</strong><br>
<strong>Đầu vào:</strong> Nhập lần lượt giá trị ngày, tháng, năm trong 3 ô inputs.<br>
<strong>Xử lý:</strong><br>
 <strong>- Bước 1:</strong> Thiết kế giao diện, cho người dùng nhập giá trị ngày, tháng, năm.<br>
 <strong>- Bước 2:</strong> Tăng ngày hiện tại (nhận được từ người dùng) 1 ngày, kiểm tra điều kiện để đưa ra ngày, tháng, năm phù hợp tiếp theo, giảm ngày hiện tại (nhận được từ người dùng) 1 ngày, kiểm tra điều kiện để đưa ra ngày, tháng, năm phù hợp trước đó.<br>
 <strong>- Bước 3:</strong> Xuất kết quả tương ứng từ bước 2 (ngày, tháng, năm của ngày tiếp theo và ngày trước đó) ra giao diện.<br>
<strong>Đầu ra:</strong> Xuất ra ngày, tháng, năm của ngày tiếp theo và ngày trước đó.`,
  q2Steps = `<strong style="text-decoration: underline;">Đề bài:</strong> Viết chương trình nhập vào tháng, năm. Cho biết tháng đó có bao nhiêu ngày. (bao gồm tháng của năm nhuận).<br>
  <strong style="text-decoration: underline;">Lời giải:</strong><br>
  <strong>Đầu vào:</strong> Nhập lần lượt giá trị tháng, năm trong 2 ô inputs.<br>
  <strong>Xử lý:</strong><br>
   <strong>- Bước 1:</strong> Thiết kế giao diện, cho người dùng nhập giá trị tháng, năm.<br>
   <strong>- Bước 2:</strong> Kiểm tra xem tháng và năm nhập vào có hợp lệ chưa, nếu không hợp lệ in ra thông báo và kết thúc chương trình.<br>
   <strong>- Bước 3:</strong> Nếu hợp lệ, xét xem năm đó là năm nhuận hay không để đưa ra số ngày của tháng nhuận và số ngày mặc định của các tháng còn lại.<br>
   <strong>- Bước 4:</strong>  Xuất ra số ngày trong tháng của tháng, năm người dùng nhập vào.<br>
  <strong>Đầu ra:</strong> Xuất ra số ngày trong tháng của tháng, năm người dùng nhập vào.`,
  q3Steps = `<strong style="text-decoration: underline;">Đề bài:</strong> Viết chương trình nhập vào số nguyên có 3 chữ số. In ra cách đọc nó.<br>
  <strong style="text-decoration: underline;">Lời giải:</strong><br>
  <strong>Đầu vào:</strong> Nhập giá trị bất kỳ vào trong ô input.<br>
  <strong>Xử lý:</strong><br>
   <strong>- Bước 1:</strong> Thiết kế giao diện, cho người dùng nhập giá trị vào trong ô input.<br>
   <strong>- Bước 2:</strong> Lấy giá trị nhận được từ giao diện, xét xem có phải là số nguyên có 3 chữ số hay không.<br>
   <strong>- Bước 3:</strong> Nếu không là số nguyên 3 chữ số thì in ra thông báo, kết thúc chương trình.<br>
   <strong>- Bước 4:</strong> Nếu là số nguyên 3 chữ số thì lấy từng vị trí hàng trăm, hàng chục, hàng đơn vị sau đó sử dụng điều kiện để đọc ra số tương ứng.<br>
   <strong>- Bước 5:</strong> Xuất kết quả nhận được từ bước 4 ra giao diện sau.<br>
  <strong>Đầu ra:</strong> Xuất ra cách đọc số nguyên có 3 chữ số.`,
  q4Steps = `<strong style="text-decoration: underline;">Đề bài:</strong> Viết chương trình cho nhập 3 cạnh của tam giác. Hãy cho biết đó là tam giác gì trong 3 loại: tam giác vuông, tam giác đều, tam giác cân.<br>
  <strong style="text-decoration: underline;">Lời giải:</strong><br>
  <strong>Đầu vào:</strong> Nhập giá trị 3 cạnh tam giác vào 3 ô inputs vào giao diện.<br>
  <strong>Xử lý:</strong><br>
   <strong>- Bước 1:</strong> Thiết kế giao diện, cho người dùng nhập giá trị 3 cạnh tam giác vào 3 ô input vào giao diện.<br>
   <strong>- Bước 2:</strong> Lấy giá trị nhận được từ giao diện, xét xem các cạnh này là cạnh của một tam giác hay không.<br>
   <strong>- Bước 3:</strong> Nếu không là cạnh của tam giác thì in ra thông báo và kết thúc xét loại tam giác.<br>
   <strong>- Bước 4:</strong> Nếu là 3 cạnh của một tam giác thì xét điều kiện tam giác đều, tam giác cân, tam giác vuông.<br>
   <strong>- Bước 5:</strong> Xuất kết quả tam giác tương ứng từ bước 4 ra giao diện sau khi đã xét xong cả 3 loại tam giác.<br>
  <strong>Đầu ra:</strong> Xuất ra loại tam giác tương ứng nếu là tam giác, không thì xuất ra không đủ điều kiện tạo thành tam giác.`;

const qSteps = [q1Steps, q2Steps, q3Steps, q4Steps];

stepShowBtn.onclick = function () {
  stepBox.style.display = "block";
};

closeStepBoxBtn.onclick = function () {
  stepBox.style.display = "none";
};

for (let i = 0; i < qShowBtn.length; ++i) {
  qShowBtn[i].onclick = function () {
    const activeQShowBtn =
      document.getElementsByClassName("btn-q-show--active");
    activeQShowBtn[0]?.classList?.remove("btn-q-show--active");

    qShowBtn[i].classList.add("btn-q-show--active");

    activeQuestion[0]?.classList?.remove("question--active");

    questions[i]?.classList?.add("question--active");

    stepBoxContent.innerHTML = qSteps[i];
  };
}

// ------- QUESTION 1 -------
// Assume that years % 4 === 0 is a leap year,
// while a none-leap year.
const date = document.getElementsByClassName("q1-input"),
  q1SubmitBtn = document.getElementById("btn-q1-submit"),
  q1Result = document.getElementById("q1-result");

q1SubmitBtn.onclick = function () {
  const currentDay = +date[0].value;
  var nextDay = currentDay + 1,
    prevDay = currentDay - 1;
  const currentMonth = +date[1].value;
  const currentYear = +date[2].value;

  var nextMonth = currentMonth,
    prevMonth = currentMonth,
    nextYear = currentYear,
    prevYear = currentYear;

  const months = {
    1: 31,
    2: !(currentYear % 4) ? 29 : 28,
    3: 31,
    4: 30,
    5: 31,
    6: 30,
    7: 31,
    8: 31,
    9: 30,
    10: 31,
    11: 30,
    12: 31,
  };

  if (nextDay > months[currentMonth]) {
    nextDay = 1;
    nextMonth++;

    if (nextMonth > 12) {
      nextMonth = 1;
      nextYear++;
    }
  }

  if (!prevDay) {
    prevDay = months[--prevMonth];

    if (!prevMonth) {
      prevDay = 31;
      prevMonth = 12;
      prevYear--;
    }
  }

  q1Result.innerHTML = `<strong>- Current date:</strong> ${currentDay}/${currentMonth}/${currentYear}.<br> <strong>- Next date:</strong> ${nextDay}/${nextMonth}/${nextYear}.<br> <strong>- Prev date:</strong> ${prevDay}/${prevMonth}/${prevYear}.`;
};

// ------- QUESTION 2 -------
// Leap year calculation
// Reference: https://www.wikihow.com/Calculate-Leap-Years
function isLeapYear(year) {
  if (!(year % 4)) {
    if (!(year % 100)) {
      if (!(year % 400)) return true;
      return false;
    }
    return true;
  }

  return false;
}

const month_year = document.getElementsByClassName("q2-input"),
  q2SubmitBtn = document.getElementById("btn-q2-submit"),
  q2Result = document.getElementById("q2-result");

q2SubmitBtn.onclick = function () {
  const month = +month_year[0].value,
    year = +month_year[1].value;

  if (
    !Number.isInteger(month) ||
    !Number.isInteger(year) ||
    month * year <= 0
  ) {
    q2Result.innerHTML = `🚫Invalid input.`;
    return;
  }

  const months = [
    undefined,
    31,
    isLeapYear(year) ? 29 : 28,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31,
  ];

  q2Result.innerHTML = `<strong>${month}/${year}</strong> has ${months[month]} days.`;
};

// ------- QUESTION 3 -------
const number = document.getElementById("q3-input"),
  q3SubmitBtn = document.getElementById("btn-q3-submit"),
  q3Result = document.getElementById("q3-result");

const reader1 = [
  "",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
];

const reader2 = [
  "ten",
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
  "fifteen",
  "sixteen",
  "seventeen",
  "eighteen",
  "nineteen",
];

const reader3 = [
  "ten",
  "eleven",
  "twenty",
  "thirty",
  "forty",
  "fifty",
  "sixty",
  "seventy",
  "eighty",
  "ninety",
];

q3SubmitBtn.onclick = function () {
  if (
    !Number.isInteger(+number.value) ||
    ((+number.value < 100 || +number.value > 999) &&
      (+number.value < -999 || +number.value > -100))
  ) {
    q3Result.innerHTML = "🚫 Invalid.";
    return;
  }

  var result = "";

  var numberValue = +number.value;
  if (numberValue < 0) {
    result += "negative ";
    numberValue = -numberValue;
  }

  var unitPlace = numberValue % 10,
    tenPlace = Math.floor(numberValue / 10) % 10,
    hundredPlace = Math.floor(numberValue / 100);

  result += `${reader1[hundredPlace]} hundred`;

  if (!tenPlace && !hundredPlace) {
    q3Result.innerHTML = result;
    return;
  }

  if (!tenPlace) {
    q3Result.innerHTML = result + ` ${reader1[unitPlace]}`;
    return;
  }

  if (tenPlace === 1) {
    q3Result.innerHTML = result + ` ${reader2[unitPlace]}`;
    return;
  }

  q3Result.innerHTML = result + ` ${reader3[tenPlace]} ${reader1[unitPlace]}`;
};
// ------- QUESTION 4 -------
const edges = document.getElementsByClassName("q4-input"),
  q4SubmitBtn = document.getElementById("btn-q4-submit"),
  q4Result = document.getElementById("q4-result");

q4SubmitBtn.onclick = function () {
  q4Result.innerHTML = "";

  const edge1 = +edges[0].value,
    edge2 = +edges[1].value,
    edge3 = +edges[2].value;

  if (
    !(edge1 + edge2 > edge3 && edge1 + edge3 > edge2 && edge2 + edge3 > edge1)
  ) {
    q4Result.innerHTML = `🚫These 3 edges cannot form a triangle.`;
    return;
  }

  // Tam giac can
  if (edge1 === edge2 || edge1 === edge3 || edge2 === edge3)
    q4Result.innerHTML += `- These 3 edges form a <strong>isosceles triangle</strong>.<br>`;

  // Tam giac deu
  if (edge1 === edge2 && edge2 === edge3)
    q4Result.innerHTML += `- These 3 edges form a <strong>equilateral triangle</strong>.<br>`;

  // Tam giac vuong
  if (
    edge1 ** 2 + edge2 ** 2 === edge3 ** 2 ||
    edge1 ** 2 + edge3 ** 2 === edge2 ** 2 ||
    edge2 ** 2 + edge3 ** 3 === edge1 ** 2
  )
    q4Result.innerHTML += `- These 3 edges form a <strong>right-angled  triangle</strong>.<br>`;
};
