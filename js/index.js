var itemArray = [];
function addToArray(form) {
  var item = $('#textBox').val();
  if (item.length == 0) {
    alert('Please type a value');
  } else if (itemArray.includes(item)) {
    alert('That value already exists');
  } else {
    itemArray.push(item);
    $('#field1').text(itemArray.join(', '));
    $('#textBox').val("");
  }
}
document.querySelector('#textBox').addEventListener('keypress', function (e) {
    var key = e.which || e.keyCode;
    if (key === 13) { 
      srch(this.form);
    }
});
function getRandom() {
  var randomOutput = itemArray[Math.floor(Math.random() * itemArray.length)];
  if ($('#noRepeat').is(":checked")) {
    if (randomOutput == $('#output').text()) {
      getRandom();
    } else {
      $('#output').text(randomOutput);
    }
  } else {
    $('#output').text(randomOutput);
  }
}
function clearArray() {
  itemArray = [];
  $('#field1').text(itemArray);
  $('#output').text('');
}
function testForm() {
  if ($('#noRepeat').is(":checked")) {
  $('#formtest').text('true');
  } else {
    $('#formtest').text('false');
  }
}
function expandCollapse() {
  $('#field1').toggleClass('collapse expand');
  if ($('#field1').hasClass('collapse')) {
    $('#exp-btn').html('<i class = "fa fa-chevron-down"></i>');
  } else {
    $('#exp-btn').html('<i class = "fa fa-chevron-up"></i>');
  }
}