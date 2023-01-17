# TEM CREATINA AÍ?

<center>

| [English](./README_EN.md) | [Português](./README.md) |

</center>

## O que é?

Um bot que verifica se tem creatina no estoque da Growth Suplementos e avisa no seu canal do Telegram.

## Como usar?

1. Crie um bot no Telegram com o @BotFather
2. Crie um canal no Telegram
3. Adicione o bot no canal como administrador
4. Crie um arquivo `.env` utilizando o `.env.example` como exemplo
5. Adicione o token do seu bot e o ID do canal no arquivo `.env`
6. Rode o bot com `npm start` ou `yarn start`

## Futuras features

- [x] Notificar apenas quando houver alteração no estoque
  - Antes ele notificava sempre que o bot era executado, mesmo que não houvesse alteração no estoque
- [x] Permitir escolher o canal que receberá as notificações
  - Antes o canal era fixo, agora é possível escolher o canal que receberá as notificações
- [ ] Criar o arquivo `availability.json` caso ele não exista
  - Atualmente é necessário criar o arquivo manualmente
- [ ] Permitir escolher os anúncios e as lojas que serão monitoradas
  - Atualmente o bot monitora apenas o anúncio de creatina da Growth Suplementos
- [ ] Permitir personalizar a mensagem de notificação
  - Atualmente a mensagem de notificação é fixa e em português

## Q&A

### Porque o `index.js` retorna uma função chamada `handler`?

Porque é a forma utilizada nas funções do AWS Lambda. O `handler` é o nome da função que será executada quando o AWS Lambda for chamado.
Caso queira rodar em outro ambiente, basta alterar o nome da função conforme necessário, ou apenas utilize desta forma mesmo.

### Por que do arquivo `availability.json` vazio?

O código procura esse arquivo para verificar se há alteração no estoque. Se o arquivo não existir, ele não é criado, pelo menos não nessa versão.

### Porque está em português?

Como o app atualmente é focado na Growth Suplementos, o idioma foi definido como português, por conta da empresa ser brasileira.
Mas pretendo fazer uma versão que não seja focado apenas na Growth, e sim em qualquer loja que tenha estoque de creatina e seja selecionada pelo criador do bot, então aí sim, o idioma será inglês.
