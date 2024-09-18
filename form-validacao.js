function exibirDados(){
    var nome = $('#nome').val();
    var cpf = $('#cpf').val();
    var telefone = $('#telefone').val();
    var endereco = $('#endereco').val();
    var email = $('#email').val();

    $('#dados').html('<p></p>Nome: ' + nome + 
        '<br>CPF: ' + cpf + '<br>Telefone: ' + telefone +
        '<br>Endereço: ' + endereco + '<br>Email: ' + email)
}

$(document).ready(function(){
    $("input").blur(function(){
     if($(this).val() == "")
         {
             $(this).css({"border-color" : "#F00", "padding": "2px"});
         }
    else {
        $(this).css({"border-color" : "#000"});
         }
    });
})
