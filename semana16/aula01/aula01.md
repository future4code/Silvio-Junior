<h1> Exercícios - MySQL </h1>

<h3> Exercício 1 </h3>

<h4> a) </h4>

<p>
Not Null: Torna o campo obrigatório, não recebendo valores nulos para o preenchimento. </br></br>
VARCHAR(255): Recebe uma string de até 255 caracteres. </br></br>
Pimary Key: Define a chave primária do elemento da tabela. </br></br>
Date: Irá receber um valor do tipo data no formato AAAA-MM-DD.

</p>

<h4> b) </h4>

<p>
O comando show datebases retorna todas as bases cadastradas; já o comando show tables retorna as tabelas existentes na base atual.
</p>

<h4> c) </h4>

<p>
O comando descreve a tabela criada anteriormente, onde demos uma id, que é a primary key e possui valor obrigatório, sendo uma string de até 255 caracteres; um name, que possui valor obrigatório, sendo uma string de até 255 caracteres; um salary, que é um valor obrigatório e recebe um número, não necessáriamente inteiro; birth_date, que também é obrigatório e recebe uma data no formato aaaa-mm-dd; e, por fim, um gender, que também é obrigatório, e recebe uma string de até 6 caracteres.
</p>

<h3> Exercício 2 </h3>

<h4> a) </h4>

<p>
INSERT INTO Actor (id, name, salary, birth_date, gender)</br>
VALUES(</br>
  "002", </br>
  "Glória Pires",</br>
  1200000,</br>
  "1963-09-23", </br>
  "female"</br>
);
</p>

<h4> b) </h4>

<p>
O erro nos diz que há uma dupla entrada para a chave primária '002', isso acontece pois a chave primária deveria ser única.
</p>

<h4> c) </h4>

<p>
O erro informa que o tamanho da linha não combina com o tamanho da coluna. Isso acontece pois, como os valores são obrugatórios, se esperava receber 5 valores (id, name, salary, birth_date, gender), e foram passados apenas 3 (id, name, salary).
</p>

<h4> d) </h4>

<p>
O erro informa que a chave 'name' não possui um valor default. Isso acontece pois o nome não foi passado, e é uma chave obrigatória.
</p>

<h4> e) </h4>

<p>
O erro informa que um valor incorreto foi passado para a chave birth_date. Isso acontece pois a data deve ser passada entre aspas.
</p>

<h4> f) </h4>

<p>
INSERT INTO Actor (id, name, salary, birth_date, gender)</br>
VALUES(</br>
  "003", </br>
  "Fernanda Montenegro",</br>
  300000,</br>
  "1929-10-19", </br>
  "female"</br>
);</br></br>

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004", 
  "Antônio Fagundes",
  400000,
  "1949-04-18", 
  "male"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);
</p>

<h3> Exercício 3 </h3>

<h4> a) </h4>

<p>
SELECT id, name, salary, birth_date FROM Actor WHERE gender = 'female';
</p>

<h4> b) </h4>

<p>
SELECT salary from Actor WHERE name = 'Tony Ramos';
</p>

<h4> c) </h4>

<p>
Retorna a tabela vazia pois não há nenhum ator cadastrado com esse valor para essa chave.
</p>

<h4> d) </h4>

<p>
SELECT id, name, salary FROM Actor WHERE salary <= 500000;
</p>

<h4> e) </h4>

<p>

Não há uma coluna chamada 'nome'.</br>

O correto seria: </br>
SELECT id, name from Actor WHERE id = "002";
</p>

<h3> Exercício 4 </h3>

<h4> a) </h4>

<p>
A query seleciona todos os atores ou atrizes que possuem o nome começando com 'a' ou 'j' e que possuemm salário maior que R$300.000,00.
</p>

<h4> b) </h4>

<p>
SELECT * FROM Actor
WHERE (name NOT LIKE "A%") AND salary > 350000;
</p>

<h4> c) </h4>

<p>
SELECT * FROM Actor
WHERE name LIKE "%G%";
</p>

<h4> d) </h4>

<p>
SELECT * FROM Actor
WHERE (name LIKE "%G" or name LIKE "%A") and salary BETWEEN 350000 AND 900000;
</p> 

<h3> Exercício 5 </h3>

<h4> a) </h4>

<p> 
CREATE TABLE Filmes (</br>
id VARCHAR(225) PRIMARY KEY,</br>
name VARCHAR (255) NOT NULL,</br>
sinopse TEXT NOT NULL,</br>
data_lancamento DATE NOT NULL,</br>
avaliacao INT NOT NULL</br>
);
</p>


<h4> b) </h4>

<p> 
INSERT INTO Filmes (id, name, sinopse, data_lancamento, avaliacao)
VALUES(
"001",
"Se Eu Fosse Você",
"Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
"2006-01-06",
7
);
</p>

<h4> c) </h4>

<p> 
INSERT INTO Filmes (id, name, sinopse, data_lancamento, avaliacao)
VALUES(
"002",
"Doce de mãe",
"Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
"2012-12-27",
10
);
</p>

<h4> d) </h4>

<p> 
INSERT INTO Filmes (id, name, sinopse, data_lancamento, avaliacao)
VALUES(
"003",
"Dona Flor e Seus Dois Maridos",
"Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
"2017-11-02",
8
);
</p>

<h3> Exercício 6 </h3>

<h4> a) </h4>

<p>
SELECT id, name, avaliacao FROM Filmes WHERE id = '001';
</p>

<h4> b) </h4>

<p>
SELECT * FROM Filmes WHERE name = 'Se eu fosse você';
</p>

<h4> c) </h4>

<p>
SELECT id, name, sinopse FROM Filmes WHERE avaliacao > 7;
</p>

<h3> Exercício 7 </h3>

<h4> a) </h4>

<p>
SELECT * FROM Filmes WHERE name LIKE "%vida%";
</p>

<h4> b) </h4>

<p>
SELECT * FROM Filmes WHERE name LIKE "%vida%" or sinopse LIKE "%vida%";
</p>

<h4> c) </h4>

<p>
SELECT * FROM Filmes WHERE data_lancamento < NOW();
</p>

<h4> d) </h4>

<p>
SELECT * FROM Filmes WHERE data_lancamento < NOW() AND (name LIKE "%vida%" or sinopse LIKE "%vida%") AND avaliacao > 7;
</p>

