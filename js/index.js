var itemArray = ['Taehee', 'Ross', 'Luc', 'Sona', 'Houston', 'Jiyoung'];
$('#field1').text(itemArray.join(', '));
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
  if (itemArray.length == 0) {
    alert('Please enter a value into the array');
  } else {
    if ($('#noRepeat').is(":checked")) {
      if (randomOutput == $('#output').text()) {
        getRandom();
      } else {
        setTimeout(function(){
          $('.btn-big').css('display', 'none');
          $('#output').css('font-size', '40px');
          $('#output').text(3);
          $('#spinner').html('<i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>');
        }, 0);
        setTimeout(function(){
          $('#output').text(2);
        }, 1000);
        setTimeout(function(){
          $('#output').text(1);
        }, 2000);
        setTimeout(function(){
          $('#spinner').html('');
          $('#output').text(randomOutput);
          $('#output').animate({
            fontSize: 80,
          }, 100);
          $('#output').effect('bounce', 'slow');
          $('.btn-big').css('display', 'block');
        }, 3000);
      }
    } else {
      setTimeout(function(){
        $('.btn-big').css('display', 'none');
        $('#output').css('font-size', '40px');
        $('#output').text(3);
        $('#spinner').html('<i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>');
      }, 0);
      setTimeout(function(){
        $('#output').text(2);
      }, 1000);
      setTimeout(function(){
        $('#output').text(1);
      }, 2000);
      setTimeout(function(){
        $('#spinner').html('');
        $('#output').text(randomOutput);
        $('#output').animate({
          fontSize: 80,
        }, 100);
        $('#output').effect('bounce', 'slow');
        $('.btn-big').css('display', 'block');
      }, 3000);
    }
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