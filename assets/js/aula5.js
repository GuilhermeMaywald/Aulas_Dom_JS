/* 
          1- Cadastro de produtos com código, nome , descrição(breve) e preço
          2 - Botao Salvar deve armazenar o registro em um tipo de objeto JS
          3 - Botao Concluir Cadastramento deve exibir uma lista com todos os 
          produtos cadastrados, o formulário deve sumir, deve aparecer apenas 
          a lista
      */
          let elementoCodigo = document.getElementById('codigo-produto');
          let elementoNome = document.getElementById('nome-produto');
          let elementoDescricao = document.getElementById('descricao-produto');
          let elementoPreco = document.getElementById('preco-produto');
          let elementoBotaoSalvar = document.getElementById('botao-salvar');
          let elementoBotaoConcluir = document.getElementById('botao-concluir');
          // elementoNome.setAttribute('value','Matheus'); // Setando um atributo nome
          // let atributo = elementoCodigo.getAttribute('class'); // Recuperando o valor do atributo de classe
          //elementoCodigo.setAttribute('class',atributo+' error' ); // Setando um atributo
          //console.log(atributo);
          let arrayProdutos = [];
    
          // Essa função limpando o formulário para inserir mais um produto
          function limparFormulario(){
            elementoCodigo.value = '';
            elementoNome.value = '';
            elementoDescricao.value = '';
            elementoPreco.value = '';
          }
    
          function salvarProduto (){ // Função normal
            // Recebeu em variaveis os valores do input no momento do click
            let valorCodigo = elementoCodigo.value;
            let valorNome = elementoNome.value;
            let valorDescricao = elementoDescricao.value;
            let valorPreco = elementoPreco.value;
            // Modelo de objeto que representa o produto
            let produto = {
              codigo:valorCodigo,
              nome:valorNome,
              descricao:valorDescricao,
              preco:valorPreco
            }
            // Salvando no meu array um objeto
            arrayProdutos.push(produto);
            //Zerando o formulário
            limparFormulario();
            console.log(arrayProdutos);
          }
          // Chamada pelo forEach
          function exibirProdutos(elemento, chave, array){ // Tem que exibir nossos produtos na lista
            console.log(chave,elemento.codigo);
            console.log(chave,elemento.nome);
          }
    
          let concluirCadastro = () =>{ // Arrow Function
            let elementoSecaoCadastramento = document.getElementById('cadastramento-produtos');
            let elementoSecaoListagem = document.getElementById('listagem-produtos');
            // Controlando a exbição das seções
            elementoSecaoCadastramento.setAttribute('class','inativo'); // Colocou um atributo de classe no html (inativo)
            elementoSecaoListagem.setAttribute('class','ativo');// Colocou um atributo de classe no html (ativo)
            arrayProdutos.forEach(exibirProdutos); // FOREACH
            // for(elemento of arrayProdutos){
            //   console.log(elemento);
            // }
    
          }
    
           elementoBotaoSalvar.addEventListener("click", salvarProduto);
           elementoBotaoConcluir.addEventListener("click",concluirCadastro)