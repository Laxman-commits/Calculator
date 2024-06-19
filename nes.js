let input_box = document.querySelector("#input_box");
let numbers = document.querySelectorAll(".inp");
let re_load = "";
let uper_box = "";
let result = "";
let up_box = document.querySelector(".display--input p");
let previousResult = "";
let firstStr = "";
let secondString = "";
let operatorCount = 0;
let newResult = 0;

function calculate() {
    try {
        input_box.value = eval(input_box.value);
        result = input_box.value;
        return result;
    } catch {
        input_box.value = "Please enter a valid input!!";
    }
}

numbers.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (
            input_box.value == "" &&
            (btn.value == "+" ||
                btn.value == "-" ||
                btn.value == "*" ||
                btn.value == "%" ||
                btn.value == "/")
        ) {
            input_box.value = "0";
        }

        if (btn.value == ".") {
            if (input_box.value.charAt(input_box.value.length - 1) === ".") {
                input_box.value = input_box.value.slice(0, -1);
            }
        }

        if (btn.value == "=") {
            if (
                input_box.value.charAt(input_box.value.length - 1) === "+" ||
                input_box.value.charAt(input_box.value.length - 1) === "-" ||
                input_box.value.charAt(input_box.value.length - 1) === "*" ||
                input_box.value.charAt(input_box.value.length - 1) === "%" ||
                input_box.value.charAt(input_box.value.length - 1) === "/"
            ) {
                input_box.value = input_box.value.substring(0, input_box.value.length - 1);
            }
        }

        if (
            btn.value === "+" ||
            btn.value === "-" ||
            btn.value === "*" ||
            btn.value === "%" ||
            btn.value === "/"
        ) {
            if (
                input_box.value.charAt(input_box.value.length - 1) === "+" ||
                input_box.value.charAt(input_box.value.length - 1) === "-" ||
                input_box.value.charAt(input_box.value.length - 1) === "*" ||
                input_box.value.charAt(input_box.value.length - 1) === "%" ||
                input_box.value.charAt(input_box.value.length - 1) === "/" ||
                input_box.value.charAt(input_box.value.length - 1) === "="
            ) {
                input_box.value = input_box.value.slice(0, -1);
            }
        }

        if (
            btn.value === "+" ||
            btn.value === "-" ||
            btn.value === "*" ||
            btn.value === "%" ||
            btn.value === "/"
        ) {
            if (input_box.value !== "") {
                previousResult = input_box.value;
                input_box.value += btn.value;
            }
        }

        else if (btn.value === "=") {
            up_box.innerHTML = input_box.value + btn.value;
            calculate();

            if (newResult != "") {
                input_box.value = newResult;
                previousResult = newResult;
            }
        } else if (btn.value === "CE") {
            input_box.value = input_box.value.slice(0, -1);
        } else if (btn.value === "C") {
            input_box.value = "";
            up_box.innerHTML = "";
        } else {
            if (re_load === "=") {
                input_box.value = "";
                re_load = "";
            }
            input_box.value += btn.value;
        }
        re_load = btn.value;

        if (
            btn.value == "+" ||
            btn.value == "-" ||
            btn.value == "*" ||
            btn.value == "%" ||
            btn.value == "/"
        ) {
            up_box.innerHTML = input_box.value;
        }
    });
});
