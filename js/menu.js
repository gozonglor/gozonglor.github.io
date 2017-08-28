$(document).ready(function () {
    $("#open").hover(
  function () {
     $('tr.menu').slideDown('medium');
  },
  function () {
     $('tr.menu').slideUp('medium');
  }
);

});
