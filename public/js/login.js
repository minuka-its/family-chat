
  jQuery('#login-form').on('submit',function(e){
    e.preventDefault();
    var name = jQuery('#name').val()
    localStorage.setItem('User', name);
    document.location.href = window.location.href + 'chat.html';
  });