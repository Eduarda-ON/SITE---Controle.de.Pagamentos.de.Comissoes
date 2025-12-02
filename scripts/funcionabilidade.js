 document.getElementById('cform').addEventListener 
        ('submit', function(event) 
            {
            event.preventDefault(); // Impede o envio padrão do formulário
            
            const vendedor = document.getElementById('vendedor').value; //pega os valores do formulario
            const valor = document.getElementById('valor').value;
            const data = document.getElementById('data').value;
            const meta = document.getElementById('meta').value;
            
            const table = document.getElementById('ctable').getElementsByTagName('tbody')[0]; //pega a tabela
            const newRow = table.insertRow(); //insere uma nova linha na tabela
            
            newRow.insertCell(0).textContent = vendedor; //insere os valores nas celulas
            newRow.insertCell(1).textContent = parseFloat(valor).toFixed(2); //formata o valor com 2 casas decimais
            newRow.insertCell(2).textContent = data;
            newRow.insertCell(3).textContent = meta;
            
            // Limpar formulário
            document.getElementById('cform').reset();
            }
        );
