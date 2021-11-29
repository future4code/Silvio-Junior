import connection from "../data/connection"

export default async function selectAllUsers(name: string, type: string, sort: string, order: string, page: number, limit: number, offset: number):Promise<any> {
    const result = await connection.raw(`
       SELECT id, name, email, type
       FROM aula49_exercicio
       WHERE name LIKE '%${name}%' AND type LIKE '%${type}%'
       ORDER BY ${sort} ${order}
       LIMIT ${limit}
       OFFSET ${offset};
    `)
 
    return result[0]
 }