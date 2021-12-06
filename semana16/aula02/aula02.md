<h1>Exercícios - MySQL</h1>

<h2>Aula 02</h2>

<h3>Exercício 1</h3>

<h5>a)</h5> 

<p>
O comando apaga a coluna de salários (salary) da tabela de atores (Actor).
</p>

<h5>b)</h5>

<p>
O comando troca o nome da coluna gender para sex.
</p>

<h5>c)</h5>

<p>
O comando troca o tipo da coluna gender para aceitar até 255 caracteres.
</p>


<h5>d)</h5>

<p>
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
</p>




<h3>Exercício 2</h3>

<h5>a)</h5> 

<p>
UPDATE Actor
SET name = "Moacyr Franco", birth_date = "1939-04-23"
WHERE id = "003";
</p>

<h5>b)</h5>

<p>
UPDATE Actor 
SET name = "JULIANA PAES"
WHERE name = "Juliana Paes";
</br></br>
UPDATE Actor 
SET name = "Juliana Paes" 
WHERE name = "JULIANA PAES";


</p>

<h5>c)</h5>

<p>
UPDATE Actor
SET id = "0005", name = "Lázaro Ramos", salary = 1500000, birth_date = "1979-11-01", gender = "male"
WHERE id = "005";
</p>


<h5>d)</h5>

<p>
Nada foi afetado pois a linha com a id inexistente não foi encontrada.
</p>






<h3>Exercício 3</h3>

<h5>a)</h5> 

<p>
DELETE FROM Actor WHERE name = "Fernanda Montenegro";
</p>

<h5>b)</h5>

<p>
DELETE FROM Actor WHERE gender = "male" AND salary > 1000000;
</p>





<h3>Exercício 4</h3>

<h5>a)</h5> 

<p>
SELECT MAX(salary) FROM Actor;
</p>

<h5>b)</h5>

<p>
SELECT MIN(salary) FROM Actor;
</p>

<h5>c)</h5>

<p>
SELECT COUNT(*) FROM Actor WHERE gender = "female";
</p>


<h5>d)</h5>

<p>
SELECT SUM(salary) FROM Actor;
</p>






<h3>Exercício 5</h3>

<h5>a)</h5> 

<p>
O retorno informa os generos presentes na tabela e a quantidade de ocorrência de cada gênero.
</p>

<h5>b)</h5>

<p>
SELECT id, name
FROM Actor
ORDER BY name DESC;
</p>

<h5>c)</h5>

<p>
SELECT *
FROM Actor
ORDER BY salary;
</p>


<h5>d)</h5>

<p>
SELECT *
FROM Actor
ORDER BY salary DESC
LIMIT 3;
</p>

<h5>e)</h5>

<p>
SELECT AVG(salary), gender
From Actor
GROUP BY gender;
</p>





<h3>Exercício 6</h3>

<h5>a)</h5> 

<p>
ALTER TABLE Filmes ADD COLUMN playing_limit_date DATE;
</p>

<h5>b)</h5>

<p>
ALTER TABLE Filmes CHANGE avaliacao avaliacao FLOAT NOT NULL;
</p>

<h5>c)</h5>

<p>
UPDATE Filmes 
SET playing_limit_date = "2021-02-16"
WHERE id = "001";

UPDATE Filmes 
SET playing_limit_date = "2022-02-16"
WHERE id = "002";

</p>


<h5>d)</h5>

<p>
DELETE FROM Filmes WHERE id = "003";

UPDATE Filmes 
SET playing_limit_date = "2023-02-16"
WHERE id = "003";

Não resultou em erro, porém nada foi alterado pois a linha com id="003" não foi encontrada.
</p>





<h3>Exercício 7</h3>

<h5>a)</h5> 

<p>
SELECT COUNT(*) FROM Filmes WHERE avaliacao > 7.5;

1 filme.
</p>

<h5>b)</h5>

<p>
SELECT AVG(avaliacao) FROM Filmes;

8,5.
</p>

<h5>c)</h5>

<p>
SELECT COUNT(*) FROM Filmes;

2 filmes.
</p>


<h5>d)</h5>

<p>
SELECT COUNT(*) FROM Filmes WHERE data_lancamento > CURDATE();

0 filme.
</p>

<h5>e)</h5>

<p>
SELECT MAX(avaliacao) FROM Filmes;

10
</p>

<h5>f)</h5>

<p>
SELECT MIN(avaliacao) FROM Filmes;

7
</p>







<h3>Exercício 8</h3>

<h5>a)</h5> 

<p>
SELECT * FROM Filmes ORDER BY name ASC;
</p>

<h5>b)</h5>

<p>
SELECT * FROM Filmes ORDER BY name DESC LIMIT 5;
</p>

<h5>c)</h5>

<p>
SELECT * FROM Filmes WHERE playing_limit_date < CURDATE() ORDER BY data_lancamento DESC LIMIT 3;
</p>


<h5>d)</h5>

<p>
SELECT * FROM Filmes ORDER BY avaliacao DESC LIMIT 3;
</p>







