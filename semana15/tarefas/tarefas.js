let tarefas = ['Arrumar o quarto', 'Ir para a academia', 'Estudar']

let tarefa = process.argv[2]
tarefas.push(tarefa)

console.table(tarefas)

