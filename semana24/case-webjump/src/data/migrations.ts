import connection from "./connection"

const printError = (error: any) => { console.log(error.sqlMessage || error.message) }

const createTables = () => connection.raw(`
    CREATE TABLE webjump_products (
    sku VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price FLOAT NOT NULL,
    description TEXT NOT NULL,
    quantity INT NOT NULL
    );
    
    CREATE TABLE webjump_categories (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL
    );
    
    CREATE TABLE webjump_relations (
    product_sku VARCHAR(255) NOT NULL,
    category_id VARCHAR(255) NOT NULL,
    FOREIGN KEY (product_sku) REFERENCES webjump_products(sku),
    FOREIGN KEY (category_id) REFERENCES webjump_categories(id)
    );
`)
    .then(() => { console.log("Tabelas criadas") })
    .catch(printError)

createTables()