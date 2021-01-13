const add = function (number1, number2) {
  return number1 + number2;
};

const subtract = function (number1, number2) {
  return number1 - number2;
};

const multiply = function (number1, number2) {
  return number1 * number2;
};

const divide = function (number1, number2) {
  return number1 / number2;
};

$(document).ready(function () {

  $("#addition").click(function () {
    let result = add(
        parseInt($("#add1").val()), 
        parseInt($("#add2").val())
    )
    $("#output").text(result)
  })

  $("#subtructing").click(function () {
    let result = subtract(
        parseInt($("#add1").val()), 
        parseInt($("#add2").val())
    )
    $("#output").text(result)
  })

  $("#multiplying").click(function () {
    let result = multiply(
        parseInt($("#add1").val()), 
        parseInt($("#add2").val())
    )
    $("#output").text(result)
  })

  $("#dividing").click(function () {
    let result = divide(
        parseInt($("#add1").val()), 
        parseInt($("#add2").val())
    )
    $("#output").text(result)
  })

});

//   $("#adding").click(function () {
//     let result = add($("#add1").val(), $("#add2").val())
//     $("#output").text(result)
//   })

//   function calculate(id, operator, num1, num2) {
//     $(id).click(function () {
//       let result = operator(num1, num2)
//       $('#output').text(result)
//     })
//   }
//   calculate('#adding', 'add', $("#add1").val(), $("#add2").val())
