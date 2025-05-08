# Exercicícios Swagger

## 1. O que é o Swagger e qual sua principal função no desenvolvimento de APIs?

Swagger é um conjunto de ferramentas open-source que ajuda a projetar, construir, documentar e consumir APIs RESTful. Sua principal função é facilitar a documentação e a compreensão das APIs, permitindo que desenvolvedores visualizem e testem endpoints de forma interativa.

---

## 2. O que é a OpenAPI Specification e qual a sua relação com o Swagger?

A OpenAPI Specification (OAS) é um padrão para descrever APIs RESTful em um formato legível por humanos e máquinas (geralmente YAML ou JSON). O Swagger foi o projeto original que criou esse padrão, e atualmente, a OpenAPI Specification é mantida pela OpenAPI Initiative. O Swagger agora é um conjunto de ferramentas que utilizam essa especificação.

---

## 3. Como o Swagger facilita o processo de documentação de uma API?

O Swagger permite gerar documentação automática e interativa a partir da definição da API (arquivo OpenAPI). Ele exibe os endpoints, métodos, parâmetros, respostas e exemplos de forma organizada, permitindo testes diretos pelo navegador (via Swagger UI), sem necessidade de ferramentas externas.

---

## 4. Quais são as vantagens de usar o Swagger para documentar uma API?

* **Documentação interativa**: permite testar endpoints diretamente.
* **Facilidade de leitura**: estrutura clara e padronizada.
* **Geração automática**: pode ser gerada a partir do código ou de arquivos YAML/JSON.
* **Comunicação clara**: melhora a colaboração entre desenvolvedores e equipes.
* **Suporte a validação**: garante que a API esteja em conformidade com o que foi definido.

---

## 5. O que é o Swagger UI e como ele ajuda na visualização de uma API?

O Swagger UI é uma interface gráfica baseada na web que exibe a documentação da API de forma interativa. Ele carrega a especificação OpenAPI e gera automaticamente uma interface onde é possível visualizar detalhes de cada endpoint e realizar testes diretamente no navegador.

---

## 6. Qual a diferença entre Swagger UI e Swagger Editor?

* **Swagger UI**: visualiza e testa uma API a partir de uma especificação já escrita.
* **Swagger Editor**: é uma ferramenta para **escrever e editar** a especificação OpenAPI (YAML/JSON), com validação e visualização em tempo real.

---

## 7. Quais são os principais componentes de um arquivo de especificação OpenAPI (Swagger)?

* `openapi`: versão da especificação (ex: "3.0.0").
* `info`: informações da API (título, descrição, versão).
* `servers`: URLs base da API.
* `paths`: endpoints e seus métodos.
* `components`: reuso de partes como schemas, parâmetros e respostas.
* `schemas`: definição de modelos de dados.
* `parameters`, `responses`, `security`: entre outros, dependendo da complexidade.

---

## 8. Quais tipos de métodos HTTP podem ser descritos na especificação Swagger? Cite exemplos.

Todos os métodos HTTP padrão podem ser descritos:

* `GET`: recuperar dados. Ex: `/produtos`
* `POST`: criar novos dados. Ex: `/clientes`
* `PUT`: atualizar dados. Ex: `/usuarios/{id}`
* `DELETE`: remover dados. Ex: `/pedidos/{id}`
* `PATCH`: atualizar parcialmente. Ex: `/produtos/{id}`

---

## 9. O que são schemas na especificação Swagger e qual é o seu papel na definição de um endpoint?

Schemas definem a **estrutura dos dados** usados nas requisições e respostas de uma API. São usados para descrever objetos JSON (como modelos de entidades) e ajudam na validação automática e geração de documentação clara e padronizada.

---

## 10. Qual é a utilidade da anotação @swagger em um arquivo de código-fonte e como ela é usada?

A anotação `@swagger` (ou similares, como `@openapi`) é usada em comentários de código para incluir metadados da API diretamente nas funções/rotas. Ferramentas como `swagger-jsdoc` (para Node.js) ou `drf-yasg` (para Django) leem essas anotações para gerar a especificação OpenAPI automaticamente.

**Exemplo em JavaScript (Express com swagger-jsdoc):**

```js
/**
 * @swagger
 * /users:
 *   get:
 *     summary: Retorna todos os usuários
 *     responses:
 *       200:
 *         description: Lista de usuários
 */
app.get('/users', controller.getUsers);
```

---

## 11. O que é o Swagger Codegen e como ele pode ser útil para desenvolvedores?

O Swagger Codegen é uma ferramenta que gera automaticamente código cliente (client SDKs), servidores e documentação estática a partir de uma especificação OpenAPI. É útil para desenvolvedores que desejam acelerar o desenvolvimento, evitando a criação manual de código repetitivo para consumir ou expor APIs.

---

## 12. Quais são as principais diferenças entre os formatos JSON e YAML para descrever uma API no Swagger?

* **YAML** é mais legível para humanos, com sintaxe mais limpa e menor uso de colchetes e chaves.
* **JSON** é mais comum para consumo por máquinas e pode ser preferido em ambientes onde o suporte a YAML é limitado.
* Ambos descrevem exatamente a mesma estrutura de dados e são suportados pelo Swagger.

---

## 13. Como você pode documentar parâmetros de entrada em uma rota usando Swagger? Dê um exemplo.

Parâmetros de entrada são documentados na seção `parameters` de um endpoint. Eles podem ser do tipo `query`, `path`, `header` ou `cookie`.

**Exemplo:**

```yaml
paths:
  /produtos:
    get:
      parameters:
        - name: categoria
          in: query
          required: false
          schema:
            type: string
          description: Filtra os produtos por categoria
```

---

## 14. O que são responses na especificação Swagger e como você pode documentá-las corretamente?

Responses representam as respostas que a API pode retornar. Cada resposta é documentada com seu código de status, descrição e, opcionalmente, um schema com os dados retornados.

**Exemplo:**

```yaml
responses:
  200:
    description: Sucesso
    content:
      application/json:
        schema:
          $ref: '#/components/schemas/Produto'
  404:
    description: Produto não encontrado
```

---

## 15. Como você pode adicionar exemplos de resposta (exemplos de dados retornados) na documentação do Swagger?

Você pode usar a palavra-chave `example` ou `examples` dentro de `content` para mostrar exemplos de retorno.

**Exemplo:**

```yaml
responses:
  200:
    description: Sucesso
    content:
      application/json:
        example:
          id: 1
          nome: "Camiseta"
          preco: 49.90
```

---

## 16. Como o Swagger pode ser usado para gerar código cliente automaticamente? Dê exemplos de linguagens ou frameworks que suportam essa funcionalidade.

Com ferramentas como **Swagger Codegen** e **OpenAPI Generator**, é possível gerar código cliente automaticamente para consumir uma API em várias linguagens/frameworks:

* Java (RestTemplate, Retrofit)
* Python (requests)
* TypeScript (Axios, Fetch)
* C# (.NET HttpClient)
* Ruby, Go, PHP, entre outras.

---

## 17. Quais são os principais códigos de status HTTP que você pode documentar usando o Swagger? Dê exemplos de cada um.

* `200 OK`: sucesso na requisição.
* `201 Created`: recurso criado com sucesso.
* `204 No Content`: requisição bem-sucedida, sem conteúdo de retorno.
* `400 Bad Request`: erro de validação.
* `401 Unauthorized`: autenticação necessária.
* `403 Forbidden`: acesso negado.
* `404 Not Found`: recurso não encontrado.
* `500 Internal Server Error`: erro no servidor.

---

## 18. O que significa a anotação @Operation e como ela é usada em APIs documentadas com Swagger?

A anotação `@Operation` é usada em frameworks como Spring (Java) para descrever uma operação de API em nível de método. Ela permite definir título, descrição, parâmetros, respostas, etc., facilitando a geração automática da especificação OpenAPI.

**Exemplo em Java:**

```java
@Operation(summary = "Busca usuário por ID", description = "Retorna os dados de um usuário específico")
@GetMapping("/usuarios/{id}")
public ResponseEntity<Usuario> getUsuario(@PathVariable Long id) {
    ...
}
```

---

## 19. Como o Swagger facilita a interação com a API durante o desenvolvimento? Explique como a documentação interativa ajuda nesse processo.

O Swagger, através do Swagger UI, permite testar endpoints diretamente no navegador, inserindo parâmetros, visualizando as respostas e validando o funcionamento da API sem precisar de ferramentas como Postman. Isso acelera testes, identifica erros rapidamente e melhora a comunicação entre desenvolvedores, frontend e backend.
