import express from 'express' // Biblioteca para facilitar na criação da API
import cors from 'cors'
import { PrismaClient } from '@prisma/client' // Para conectar o MongoDB ao código

const prisma = new PrismaClient()

const app = express()
app.use(express.json()) // O express não usa por padrão o formato json, ai tem que criar um app em formato de função para usar o json
app.use(cors())


app.post('/users', async (req, res) => { // Criar
    
    await prisma.user.create({
        data: {
            email: req.body.email,
            name: req.body.name,
            age: req.body.age
        }
    })

    res.status(201).json(req.body) // Retorna 201 porque ele fala que deu certo e criou o que voce queria criar
})


app.get('/users', async (req, res) => { // Listar
    let users = []

    if(req.query){
        users = await prisma.user.findMany({
            where: {
                name: req.query.name,
                email: req.query.email,
                age: req.query.age
            }
        })
    } else {
      const users = await prisma.user.findMany()
    }
    
    
    res.status(200).json(users)
})   


app.put('/users/:id', async (req, res) => { // Editar
    
    await prisma.user.update({
        where: {
            id: req.params.id
        },
        data: {
            email: req.body.email,
            name: req.body.name,
            age: req.body.age
        }
    })

    res.status(201).json(req.body) // Retorna 201 porque ele fala que deu certo e criou o que voce queria criar
})


app.delete('/users/:id', async (req, res) => { // Criar
    
    await prisma.user.delete({
        where: {
            id: req.params.id
        }
    })

    res.status(200).json({message: "Usuário deletado com sucesso!"}) // Retorna 201 porque ele fala que deu certo e criou o que voce queria criar
})



app.listen(8000)



/* 
   Criar nossa API de usuários

   POST -Criar um Usuario
   GET -Listar todos os Usuários
   PUT -Editar um Usuário
   DELETE -Deletar um Usuário

   Usuario e Senha do Banco de Dados
   Usuario: miguel
   Senha: JJXun84gDBhCY3t2
*/