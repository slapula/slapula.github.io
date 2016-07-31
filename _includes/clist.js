$(document).ready(function() {
  $('.sidebar-nav-item-head').click(function() {
    $(this).parent().find('.sidebar-nav-item-tail').toggle();
  });
});
