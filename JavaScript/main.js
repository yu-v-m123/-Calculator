const number = document.querySelectorAll(".box_number");
let value = document.getElementById("js_value");
let total = 0;
let status = "start";
let mode = "integer_mode";

const oneNine = document.querySelectorAll(".one_nine");
oneNine.forEach(index => {
  index.addEventListener("click", () => {
    if (status === "start") {
      total = index.textContent;
    } else if (status === "finish") {
      reset();
      total = index.textContent;
    } else if (status === "calculation" || status === "calBtn") {
      total += index.textContent;
    }
    console.log(index.textContent);
    value.textContent = total;
    status = "calculation";
  });
});

const zero = document.getElementById("zero");
zero.addEventListener("click", () => {
  if (status === "start" || status === "finish" || status === "calBtn") {
    if (value.textContent.slice(-1) === "0") {
      console.log("0");
      return;
    }
  }
  if (status === "start") {
    total = zero.textContent;
  } else {
    total += zero.textContent;
  }
  value.textContent = total;
});

const point = document.getElementById("point");
point.addEventListener("click", () => {
  if (mode === "decimal_mode") {
    return;
  }
  if (status === "start" || status === "finish") {
    total = 0;
  } else if (status === "calBtn") {
    if (value.textContent.slice(-1) !== "0") {
      total += 0;
    }
  }
  total += point.textContent;
  console.log(point.textContent);
  value.textContent = total;
  status = "calculation";
  mode = "decimal_mode";
})

const cal = document.querySelectorAll(".cal");
cal.forEach(index => {
  index.addEventListener("click", () => {
    if (status === "start") {
      return;
    } else if (status === "calculation") {
      total += index.textContent;
    } else if (status === "finish") {
      total = value.textContent;
      total += index.textContent;
      value.textContent = 0;
    } else if (status === "calBtn") {
      total = total.slice(0, -1)
      total += index.textContent;
    }
    console.log(index.textContent);
    value.textContent = total;
    status = "calBtn";
    mode = "integer_mode";
  })
})

const clear = document.getElementById("ac");
clear.addEventListener("click", () => {
  reset();
})

const equalBtn = document.getElementById("equal");
equalBtn.addEventListener("click", () => {
  console.log(eval(total));
  value.textContent = eval(total);
  status = "finish";
  mode = "integer_mode";
});

function reset() {
  total = 0;
  value.textContent = 0;
  mode = "integer_mode";
}