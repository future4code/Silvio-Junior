<h1>Exercícios Knex</h1>

<h3>Exercício 1</h3>

<h5>a)</h5>

<p>
A resposta usando raw nos retorna uma lista, onde as informações que desejamos passar estão na posição 0.
</p>

<h5>b)</h5>

<p>
app.get('/actor/:name', async (req: Request, res: Response) => {
    try{
        const name = req.params.name
        const result = await connection.raw(`
        SELECT * FROM Actor WHERE name LIKE '%${name}%'
        `)
        res.send(result)

    } catch (error) {
        res.status(500).send('error.')

    }
})


</p>


<h5>c)</h5>

<p>
app.get('/actor/:gender', async (req: Request, res: Response) => {
    try{
        const gender = req.params.gender
        const result = await connection.raw(`
        SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
        `)
        const count = result[0][0].count;
        res.send(count)

    } catch (error){
        res.status(500).send('error.')
    }
})


</p>







<h3>Exercício 2</h3>

<h5>a)</h5>
app.put('/actor/:id', async (req: Request, res: Response) => {
    try {
        await connection("Actor")
        .update({
            salary: req.body.salary
        })
        .where({
            id: req.params.id
        })

        res.send("atualizou!")
    } catch (error){

    }
})
<p>

</p>

<h5>b)</h5>

<p>
app.delete('/actor/:id', async(req: Request, res: Response) => {
    try {
        await connection("Actor")
        .delete()
        .where({
            id: req.params.id
        })

        res.send("deletou!")
    } catch (error) {
        res.status(500).send('error.')
    }
})


</p>


<h5>c)</h5>

<p>
app.get('/actorSalaryAvg/:gender', async(req: Request, res: Response) => {
    try {
        const result = await connection ("Actor")
        .avg("salary as average")
        .where({
        gender: req.params.gender
        })
        res.send(result)


    } catch (error){
        res.status(500).send('error.')
    }


})  
</p>