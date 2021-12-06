<h1>Exercícios - Tabelas Relacionais</h1>

<h3>Exercício 1</h3>

<h5>a)</h5>

<p>
Chave estrangeira é a chave que será usaada para criar a relação entre tabelas.
</p>

<h5>b)</h5>

<p>
CREATE TABLE Rating (
id VARCHAR(255) PRIMARY KEY,
comment TEXT NOT NULL,
rate FLOAT NOT NULL,
filme_id VARCHAR(255),
FOREIGN KEY (filme_id) REFERENCES Filmes(id)
);


INSERT INTO Rating Values
('r0001', 'Gostei muito do filme! Excelete!', 8.4, '001');

</p>


<h5>c)</h5>

<p>
Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`maryam-silvio-ribeiro`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`filme_id`) REFERENCES `Filmes` (`id`))


Não é encontrado na tabela relacionada nenhuma id fom a foreign key passada.
</p>


<h5>d)</h5>

<p>
ALTER TABLE Filmes DROP COLUMN avaliacao;
</p>

<h5>e)</h5>

<p>
Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`maryam-silvio-ribeiro`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`filme_id`) REFERENCES `Filmes` (`id`))

Não se permite deletar o filme pois há uma foreign key atrelada a ele.
</p>







<h3>Exercício 2</h3>

<h5>a)</h5>

<p>
É uma tabela auxiliar, que permite fazer a relação MxN. Nela são encontradas foreign keys dos filmes e dos atores e, então, possibilita a relação.
</p>

<h5>b)</h5>

<p>
CREATE TABLE MovieCast (
filme_id VARCHAR(255),
actor_id VARCHAR(255),
FOREIGN KEY (filme_id) REFERENCES Filmes(id),
FOREIGN KEY (actor_id) REFERENCES Actor(id)
);

INSERT INTO MovieCast VALUES
('007', '005'), ('001','003'), ('003', '003'), ('002', '004'), ('003', '005'), ('001', '002');
</p>


<h5>c)</h5>

<p>
Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`maryam-silvio-ribeiro`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))

A id passada como foreign key não foi encontrada na tabela de atores.

</p>


<h5>d)</h5>

<p>
Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`maryam-silvio-ribeiro`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))

Não é possível excluir o ator pois o mesmo está relacionado à foreign key de um mooviecast.
</p>





<h3>Exercício 3</h3>

<h5>a)</h5>

<p>
O ON serve para comparar as tabelas e retornar apenas os valores que coincidem em ambas tabelas.
</p>

<h5>b)</h5>

<p>
SELECT Filmes.name, Filmes.id, Rating.rate
FROM Filmes
JOIN Rating
ON Rating.filme_id = Filmes.id;
</p>
