const http = require("http");

const port = process.env.PORT || 3000;
const nome = process.env.NOME_SITE || "Clube de Jogos Level Up";
const contato = process.env.EMAIL_CONTATO || "clube@etecvav.com.br";

// Dados fixos (não há banco de dados neste projeto)
const jogos = [
  "Xadrez - quartas-feiras",
  "Jogos de tabuleiro - quintas-feiras",
  "Campeonato de Minecraft - sextas-feiras",
  "Torneio de Mario Kart - sábado",
];

const equipe = [
  "Ana Clara Miranda Pereira",
  "Carlos Eduardo Gonçalves Cavalcante",
  "Mikaely Ferreira Martins",
  "Nicolas Milani da Cruz",
];

http
  .createServer((req, res) => {
    console.log(`Acesso recebido: ${req.method} ${req.url}`);

    const itens = jogos.map((j) => `<li>${j}</li>`).join("");
    const integrantes = equipe.map((p) => `<li>${p}</li>`).join("");

    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end(`<!DOCTYPE html>
<html lang="pt-br">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${nome}</title>
<style>
  body { font-family: Arial, sans-serif; background: #1e1b2e; color: #f1f1f1;
         max-width: 800px; margin: 40px auto; padding: 20px; }
  header { background: #6c3fc5; padding: 20px; border-radius: 8px; }
  h2 { color: #ffd166; }
  li { margin: 8px 0; }
  footer { margin-top: 30px; border-top: 1px solid #6c3fc5; padding-top: 15px; }
</style>
</head>
<body>
<header>
  <h1>${nome}</h1>
  <p>Um espaço para jogar, aprender e fazer amigos na escola.</p>
</header>
<main>
  <h2>Sobre o clube</h2>
  <p>Somos um grupo de estudantes que se reúne toda semana para jogos que
  estimulam o raciocínio, o trabalho em equipe e a diversão.</p>
  <h2>Atividades da semana</h2>
  <ul>${itens}</ul>
  <h2>Equipe</h2>
  <ul>${integrantes}</ul>
</main>
<footer>
  <h2>Contato e informações</h2>
  <p>Encontros: no intervalo e após as aulas, na sala b09.</p>
  <p>E-mail: ${contato}</p>
</footer>
</body>
</html>`);
  })
  .listen(port, () => console.log(`Servidor ativo na porta ${port}`));
