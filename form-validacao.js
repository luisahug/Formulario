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
    var cont = 0;
    $("input").blur(function(){
        if($(this).val() == "")
         {
             $(this).css({"border-color" : "#F00"});
         }
        else if ($(this).val() != "" && $(this).val() !="Enviar")
        {
            $(this).css({"border-color" : "#0F0"});
        }
    });
    $("#btEnviar").click(function(event){
        var cont = 0;
        $("#cadastro input").each(function(){
            if($(this).val() == ""){
                cont++;
                $(this).css({"border-color" : "#F00"});
            }
        });
        if(cont==0){
            exibirDados();
        }
        else {
            event.preventDefault();
            alert("Por favor, preencha todos os campos obrigatórios.");
        };
    });


})
 
/*
$(document(function(){
    var validator = $("#cadastro").validate(
        rules: {
            nome:{
                required: true 
            },
            cpf:{
                required: true,
                number: true,
                minlength:11,
                maxlength:14
            },
            telefone:{
                required: true,
                number: true,
                minlength: 11,
                maxlength: 11
            },
            endereco:{
                required: true
            },
            email:{
                required: true,

            }
        }
    )
}))
 */