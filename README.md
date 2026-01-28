# 💈 Barber SaaS — Backend

> ⚠️ Observação  
> Este projeto representa a **primeira abordagem backend** do BarberSystem, desenvolvida com foco em arquitetura, autenticação e regras de negócio.
>  
> Posteriormente, o projeto frontend foi integrado ao Supabase para acelerar o desenvolvimento e o deploy, mas este repositório permanece como demonstração de um backend SaaS estruturado, desacoplado de qualquer frontend.


---

## 🚀 Funcionalidades Implementadas

### 🔐 Autenticação

* Cadastro de barbeiro
* Login com **JWT**
* Middleware de autenticação
* Isolamento de dados por barbeiro (multi-tenant)

### 🧔‍♂️ Administração do Barbeiro (Admin)

* Criar serviços
* Listar serviços
* Criar horários disponíveis
* Listar horários por barbeiro
* Criar agendamentos
* Visualizar agenda

### 📅 Agendamentos

* Associação entre barbeiro, cliente, serviço e horário
* Validação de disponibilidade

---

## 🧱 Arquitetura do Projeto

O projeto segue uma estrutura baseada em **camadas**, facilitando manutenção e escalabilidade:

```text
src/
 ├── controllers/   # Camada HTTP (Request / Response)
 ├── services/      # Regras de negócio
 ├── routes/        # Definição das rotas
 ├── middlewares/   # Autenticação e validações
 ├── lib/           # Prisma Client
 ├── @types/        # Tipagens customizadas
 └── server.ts      # Bootstrap da aplicação
```

---

## 🛠️ Tecnologias Utilizadas

* **Node.js**
* **TypeScript**
* **Express**
* **Prisma ORM**
* **PostgreSQL**
* **JWT (JSON Web Token)**
* **Bcrypt**

---

## ⚙️ Pré-requisitos

Antes de rodar o projeto, você precisa ter instalado:

* Node.js (v18+)
* PostgreSQL
* Git

---

## 📦 Instalação

Clone o repositório:

```bash
git clone https://github.com/LeonardoAssis00/barber-saas.git
cd barber-saas
```

Instale as dependências:

```bash
npm install
```

---

## 🔑 Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
DATABASE_URL="postgresql://usuario:senha@localhost:5432/barber_saas"
JWT_SECRET="sua_chave_secreta"
```

---

## 🧬 Banco de Dados

Execute as migrations:

```bash
npx prisma migrate dev
```

Gere o Prisma Client:

```bash
npx prisma generate
```

---

## ▶️ Executando o Projeto

```bash
npm run dev
```

A API ficará disponível em:

```
http://localhost:3333
```

---

## 🧪 Testes de API (sem Frontend)

O projeto pode ser testado usando:

* Thunder Client (VS Code)
* Postman

### Exemplo — Login

**POST** `/auth/login`

```json
{
  "email": "teste@barber.com",
  "password": "123456"
}
```

Resposta:

```json
{
  "token": "JWT_TOKEN",
  "barber": {
    "id": "uuid",
    "name": "Barbeiro A",
    "email": "teste@barber.com"
  }
}
```

Use o token no header:

```
Authorization: Bearer JWT_TOKEN
```

---

📌 Status do Projeto
🧪 Prova de conceito concluída (Backend)

Este backend está funcional e pode ser testado via ferramentas como Postman ou Thunder Client.
A integração com frontend não faz parte do escopo atual deste repositório.


---

## 👨‍💻 Autor

**Leonardo Abraão Assis**

* Estudante de Sistemas de Informação
* Desenvolvedor em formação (Backend / Full Stack)
* Em busca da primeira oportunidade profissional na área de tecnologia

🔗 GitHub: [https://github.com/LeonardoAssis00](https://github.com/LeonardoAssis00)

---

## ⭐ Observação

Este projeto foi desenvolvido com foco em **boas práticas, aprendizado real e estrutura profissional**, simulando um sistema SaaS utilizado no mercado.

Sinta-se à vontade para explorar, estudar ou contribuir.
