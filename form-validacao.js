//exibir dados na tela após envio do formulário
function exibirDados(){
    var nome = $("#nome").val();
    var cpf = $("#cpf").val();
    var telefone = $("#telefone").val();
    var endereco = $("#endereco").val();
    var email = $("#email").val();

    $("#dados").html("<p></p>Nome: " + nome + 
        "<br>CPF: " + cpf + "<br>Telefone: " + telefone +
        "<br>Endereço: " + endereco + "<br>Email: " + email)
};

$(document).ready(function(){
    //máscaras dos campos telefone e cpf
    $("#telefone").mask("(00) 00000-0000");

    $('#cpf').mask('000.000.000-00');

    $("#cpf").on("input", function() {
        if ($(this).val().length > 13) {
            $(this).mask("00.000.000/0000-00");
        } else {
            $(this).mask("000.000.000-00");
        }
    });

    //alterar a cor do campo caso não esteja preenchido
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
});

//validar se todos os campos "required" estão preenchidos e atendendo seus requisitos
 $("#cadastro").validate({
    submitHandler: function(form, event){
        event.preventDefault();
        exibirDados();
    },
    errorPlacement: function(error, element){
        element.css({"border-color" : "#F00"});
        error.insertAfter(element);
    },
    success: function(label, element){
        $(element).css({"border-color": "#0F0"});
    },
    messages: {
        nome: {
            required: " Este campo é obrigatório"
        },
        cpf: {
            required: " Este campo é obrigatório",
            minlength: " Informe um CPF/CNPJ válido"
        },
        telefone: {
            required: " Este campo é obrigatório",
            minlength: " Informe um telefone válido"
        },
        endereco: {
            required: " Este campo é obrigatório"
        },
        email: {
            required: " Este campo é obrigatório",
            email: " Informe um e-mail válido"
        }
    }
 });

