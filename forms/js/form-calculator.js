/**
 * Created by thomasgros on 2/5/14.
 */

var formCalculator = document.getElementById("form-calculator");
formCalculator.addEventListener("input", function() {
    formCalculator.result.value=parseInt(formCalculator.a.value)+parseInt(formCalculator.b.value);
});
