# 🛠️ Máquinas PEMT | 📚 Manuais Técnicos JLG

<img src="./assets/print-home.png" alt="Máquinas PEMT - Banner" width="100%" />

## ✨ Visão Geral

**Máquinas PEMT** é um site desenvolvido com foco na **experiência do usuário** para facilitar o acesso a **manuais técnicos da JLG**. O projeto segue a abordagem **mobile-first**, otimizando o uso em celulares e tablets por profissionais de manutenção industrial que necessitam de acesso rápido e prático aos documentos técnicos durante o trabalho em campo.

## 🚀 Funcionalidades

- 📱 Interface responsiva (mobile-first)
- 📚 Listagem de manuais técnicos por equipamento
- 📥 Visualização de arquivos PDF via Cloudflare R2
- 🔎 Navegação intuitiva com **SwiperJS**
- ⚡ Acesso rápido e otimizado com foco na usabilidade

## 🧱 Tecnologias Utilizadas

| Tecnologia      | Descrição                                         |
|----------------|--------------------------------------------------|
| ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white) | Estrutura do site |
| ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white) | Estilização visual |
| ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black) | Lógica e interatividade |
| ![SwiperJS](https://img.shields.io/badge/SwiperJS-6332F6?style=flat&logo=swiper&logoColor=white) | Carrossel e navegação |
| ![Cloudflare](https://img.shields.io/badge/Cloudflare-R2-F38020?style=flat&logo=cloudflare&logoColor=white) | Armazenamento dos PDFs |
| ![Hostinger](https://img.shields.io/badge/Domínio-Hostinger-purple?style=flat) | Gerenciamento do domínio |
| ![Vercel](https://img.shields.io/badge/Hospedagem-Vercel-black?style=flat&logo=vercel&logoColor=white) | Deploy da aplicação |

## 🗂️ Estrutura dos Dados
Os manuais em PDF são armazenados em um bucket da Cloudflare R2 e organizados via um arquivo JSON, que gera dinamicamente os elementos no DOM. Isso permite flexibilidade e escalabilidade conforme novos manuais forem adicionados.

⚠️ Observação: no momento, a estrutura ainda está em repositório local, em fase de testes.

```json
[
  {
    "nome": "Manual 1930ES",
    "arquivo": "https://arquivos.maquinaspemt.com.br/JLG/eletric/scissor-lift/1930ES-A-3246ES/operation/manual-de-operacao_ES-3122377_05-01-13_.pdf"
  },
  ...
]
``` 

## 📷 Capturas de Tela
![Versão Desktop-(em construção)](./assets/print-desktop.png)
![Versão-mobile](./assets/print-mobile.png)


## 📈 Melhorias Futuras
- 🔐 Área restrita para técnicos cadastrados
- 🧠 Implementação de IA para busca inteligente nos manuais
- 🗃️ Filtro por modelo, categoria ou tipo de falha
- 🌎 Suporte multilíngue

## 🙋‍♂️ Desenvolvedor
Feito com dedicação por Jeferson. Em transição de carreira para o desenvolvimento web, com foco em Front-End e construção de produtos que resolvem problemas reais.

## 📡 Deploy
O site está publicado em produção com Vercel e pode ser acessado no seguinte domínio:

🌐 [Máquinas PEMT](https://maquinaspemt.com.br)

## 📬 Contato
- 📧 [Meu e-mail](mailto:jeferson.ifce@gmail.com)
- 📱 [LinkedIn](https://www.linkedin.com/in/jeferson-n-75663b145/)

## ⭐ Contribuição
Sinta-se livre para abrir issues, sugerir melhorias ou contribuir com o projeto. Todo apoio é bem-vindo!