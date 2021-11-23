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

</p>

<h5>b)</h5>

<p>

</p>

<h5>c)</h5>

<p>

</p>


<h5>d)</h5>

<p>

</p>

<h5>e)</h5>

<p>

</p>





