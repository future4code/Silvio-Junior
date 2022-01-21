*** Exercício 1

**a)** 
Round representa o cost, uma variável que está diretamente ligada à segurança da aplicação. Quanto maior ele for, mais segura será a aplicação, em contrapartida, mas tempo será necessário para criar o hash.

Salt é uma string aleatória gerada pelo métodos, que, juntamente com a senha, formarão o hash. O salt previne e evita ataques com o auxilio de rainbow tables.

**b)**

    generateHash = (
        plainText: string
    ): string => {

        const cost: number = 12  
        const salt:string = genSaltSync(cost) 
        const cypherText:string = hashSync(plainText, salt)

        // console.log({salt, cypherText});
        
        return cypherText
    }

**c)**

    compareSync('bananinha', cypherText)

*** Exercício 2

**a)**
Cadastro, pois as requisições de login com hash apenas funcionarão caso a senha esteja gravada com o hash no banco de dados.

**b)**
        app.post("/signup", async (req: Request, res: Response) => {
    try {
        const userData = {
        email: req.body.email,
        password: req.body.password
        };
    
        const id = generate();

        const hashPassword = await hash(userData.password);

        await createUser(id, userData.email, hashPassword);

        const token = generateToken({
        id
        });

        res.status(200).send({
        token,
        });
    } catch (err) {
        res.status(400).send({
        message: err.message,
        });
    }
    });

**c)**
    app.post("/login", async (req: Request, res: Response) => {
    try {
        if (!req.body.email || req.body.email.indexOf("@") === -1) {
        throw new Error("Invalid email");
        }

        const userData = {
        email: req.body.email,
        password: req.body.password,
        };

        const user = await getUserByEmail(userData.email);

        const comapreResult = await compare(
        userData.password,
        user.password
        );

        if (!compareResult) {
        throw new Error("Invalid password");
        }

        const token = generateToken({
        id: user.id    
            });

        res.status(200).send({
        token,
        });
    } catch (err) {
        res.status(400).send({
        message: err.message,
        });
    }
    });

*** Exercício 3

**a)**

    ALTER TABLE nome_da_tabela ADD COLUMN role VARCHAR(255) DEFAULT "normal"

**b)**

    import * as jwt from "jsonwebtoken";


    cont expiresIn = "1min";
    const generateToken = (input: AuthenticationData): string => {
        const token = jwt.sign(
        {
            id: input.id,
            role: input.role,
        },
        process.env.JWT_KEY as string,
        {
            expiresIn
        }
        );
        return token;
    }

    const getData = (token: string): AuthenticationData => {
        const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;
        const result = {
        id: payload.id,
        role: payload.role,
        };
        return result;
    }


    type AuthenticationData {
    id: string;
    role: string;
    }


**c)**

    app.post("/signup", async (req: Request, res: Response) => {
    try {
        const userData = {
        email: req.body.email,
        password: req.body.password,
        role: req.body.role,
        };

        const id = generateId();

        const hashPassword = await hash(userData.password);

        await createUser(id, userData.email, hashPassword, userData.role);

        const token = generateToken({
        id,
        role: userData.role,
        });

        res.status(200).send({
        token,
        });
    } catch (err) {
        res.status(400).send({
        message: err.message,
        });
    }
    });

**d)**

    app.post("/login", async (req: Request, res: Response) => {
    try {
        if (!req.body.email || req.body.email.indexOf("@") === -1) {
        throw new Error("Invalid email");
        }

        const userData = {
        email: req.body.email,
        password: req.body.password,
        };

        const user = await getUserByEmail(userData.email);

        const compareResult = await compare(
        userData.password,
        user.password
        );

        if (!compareResult) {
        throw new Error("Invalid password");
        }

        const token = generateToken({
        id: user.id,
        role: user.role,
        });

        res.status(200).send({
        token,
        });
    } catch (err) {
        res.status(400).send({
        message: err.message,
        });
    }
    });

*** Exercício 4

**a)**

    app.get("/user/profile", async (req: Request, res: Response) => {
    try {
        const token = req.headers.authorization as string;

        const authenticationData = getData(token);

        if (authenticationData.role !== "normal") {
        throw new Error("Only a normal user can access this funcionality");
        }

        const user = await getUserById(authenticationData.id);

        res.status(200).send({
        id: user.id,
        email: user.email,
        role: authenticationData.role,
        });
    } catch (err) {
        res.status(400).send({
        message: err.message,
        });
    }
    });