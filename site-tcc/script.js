$(document).ready(function(){
var username = "";
var id = "";
function get_dados(username2){
        return $.ajax({
          url: "https://api.telegram.org/bot482437261:AAFuu-XIYHNMt2Zwmi_02kbb-E3hsBsMyJI/getUpdates",
          method: "GET",
          dataType: 'json',
          success: function(data) {
            var array = data.result;
            for(var i in array) {
              username = array[i].message.chat.username;
              if (username2 == username){
                alert("Deu certo");
                id = array[i].message.chat.id;
                return;
              }
            }
            alert("Contato nao encontrado");
          },
          error: function(data) {
            console.log(data);
          }
});
}
$("#confirmar").click(function(){
  $.when(get_dados($("#username").val())).done(function(){
    $("#id").val(id);
  });
});
});