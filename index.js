const perguntas = [
    {
      pergunta: "Qual é a maneira correta de declarar uma variável em JavaScript?",
      respostas: [
        "variable x;",
        "var x;",
        "v x;",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a função do operador '===' em JavaScript?",
      respostas: [
        "Comparação estrita de valor e tipo",
        "Comparação solta de valor e tipo",
        "Comparação solta de valor",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a função do operador '+' em JavaScript?",
      respostas: [
        "Concatenação de strings",
        "Adição de números",
        "Subtração de números",
      ],
      correta: 1
    },
    {
      pergunta: "O que o método 'console.log()' faz em JavaScript?",
      respostas: [
        "Exibe uma mensagem de alerta",
        "Registra mensagens de erro no console",
        "Exibe mensagens no console do navegador",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a sintaxe correta para um comentário de linha única em JavaScript?",
      respostas: [
        "// Comentário",
        "/* Comentário */",
        "<!-- Comentário -->",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o método usado para converter uma string em um número inteiro em JavaScript?",
      respostas: [
        "parseInt()",
        "parseFloat()",
        "toInteger()",
      ],
      correta: 0
    },
    {
      pergunta: "O que o método 'charAt()' faz em JavaScript?",
      respostas: [
        "Retorna o primeiro caractere de uma string",
        "Remove o último caractere de uma string",
        "Substitui caracteres em uma string",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a função do operador '&&' em JavaScript?",
      respostas: [
        "Operador de concatenação",
        "Operador de comparação",
        "Operador lógico 'E'",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a função do método 'push()' em JavaScript?",
      respostas: [
        "Remover o último elemento de um array",
        "Adicionar um novo elemento ao final de um array",
        "Ordenar os elementos de um array em ordem alfabética",
      ],
      correta: 1
    },
    {
      pergunta: "O que o método 'toUpperCase()' faz em JavaScript?",
      respostas: [
        "Converte uma string para minúsculas",
        "Converte uma string para maiúsculas",
        "Inverte uma string",
      ],
      correta: 1
    },
  ];
  
  const quiz = document.querySelector('#quiz')
  const templete = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  for(const item of perguntas) {
  
    const quizItem = templete.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
    
    for(let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
  
        corretas.delete(item)
        if(estaCorreta) {
          corretas.add(item)
        }
  
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
  
      
      
      quizItem.querySelector('dl').appendChild(dt)
  
    }
    
    quizItem.querySelector('dl dt').remove()
    
    quiz.appendChild(quizItem)
   
  }
  