convert = () => {
    let val = document.querySelector("#input");
    let result = document.querySelector("#output");
    let optL = document.querySelector("#opt-left");
    let optR = document.querySelector("#opt-right");

    val.addEventListener("keyup", convert);
    optL.addEventListener("change", convert);
    optR.addEventListener("change", convert);

    let inputOptL = optL.value;
    let inputOptR = optR.value;

    if (inputOptL === "celcius" && inputOptR === "fahrenheit") {
        result.value = Number((val.value) * 9/5) + 32;
    } else if (inputOptL === "celcius" && inputOptR === "kelvin") {
        result.value = Number(val.value) + 273.15;
    } else if (inputOptL === "celcius" && inputOptR === "celcius") {
        result.value = val.value;
    };

    if (inputOptL === "fahrenheit" && inputOptR === "celcius") {
        result.value = Number((val.value) - 32) * 5/9;
    } else if (inputOptL === "fahrenheit" && inputOptR === "kelvin") {
        result.value = Number((val.value) - 32) * 5/9 + 273.15;
    } else if (inputOptL === "fahrenheit" && inputOptR === "fahrenheit") {
        result.value = val.value;
    };

    if (inputOptL === "kelvin" && inputOptR === "celcius") {
        result.value = Number(val.value) - 273.15;
    } else if (inputOptL === "kelvin" && inputOptR === "fahrenheit") {
        result.value = Number((val.value) - 273.15) * 9/5 + 32;
    } else if (inputOptL === "kelvin" && inputOptR === "kelvin") {
        result.value = val.value;
    };
}

function reset () {
    let val = document.querySelector("#input");
    let result = document.querySelector("#output");
    val.value = "";
    result.value = "";
}