let buttons = document.querySelectorAll("button");
let inputField = document.getElementById("output");
let output = "";

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML === "=" && output !== "") {
            output = eval(output.replace("%", "/100"));
            try {
                output = eval(output);
                inputField.value = output;
            } catch (error) {
                inputField.value = "Error";
            }
        } else if (e.target.innerHTML === "C") {
            output = "";
            inputField.value = output;
        } else if (e.target.innerHTML === "DEL") {
            output = output.slice(0, -1);
            inputField.value = output;
        } else {
            output += e.target.innerHTML;
            inputField.value = output;
        }
    });
});

