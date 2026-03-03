# 🌱 VerdeLedger Community

> **Uma DAO sustentável com foco em impacto ambiental rastreável e governança descentralizada.**

A **VerdeLedger Community** é uma proposta de startup-DAO (Organização Autônoma Descentralizada) que conecta comunidades locais, ONGs, pequenos negócios e apoiadores para financiar, executar e auditar iniciativas verdes com total transparência usando a tecnologia Blockchain.

---

## 📌 Sobre o Projeto

O mercado de créditos de carbono e financiamento climático muitas vezes sofre com a falta de transparência, burocracia excessiva e dificuldade de acesso para pequenos projetos locais. 

A **VerdeLedger** resolve isso unindo:
- **Governança Participativa:** Membros da comunidade votam em quais projetos devem receber financiamento.
- **Tesouraria Comunitária:** Gestão transparente dos fundos através de contratos inteligentes (Smart Contracts) e cofres Multisig (Gnosis Safe).
- **Rastreabilidade de Impacto:** Indicadores de impacto (KPIs) com dados públicos e imutáveis na blockchain.

### 🧭 Nossa Identidade
- **Missão:** Democratizar o acesso ao financiamento climático e garantir rastreabilidade de impacto ambiental.
- **Visão:** Ser a DAO de referência na América Latina para projetos verdes auditáveis.
- **Valores:** Transparência radical, colaboração comunitária, sustentabilidade e inclusão Web3.

---

## ✨ Principais Funcionalidades

- 📊 **Dashboard de Impacto:** Acompanhamento em tempo real de métricas como árvores plantadas, CO₂ evitado e fundos da tesouraria.
- 🗳️ **Governança On-chain:** Interface completa para criação de propostas e votação descentralizada conectada diretamente a Smart Contracts.
- 👛 **Autenticação Web3:** Login seguro utilizando carteiras de criptomoedas (MetaMask, Phantom, WalletConnect) via **RainbowKit** e **Wagmi**.
- 🤖 **Assistente IA Integrado:** Um chatbot alimentado pelo **Google Gemini** treinado para ajudar usuários a entenderem o funcionamento da DAO e seus projetos.
- 📜 **Smart Contracts Inclusos:** Contratos em Solidity para o Token de Governança (VLG), sistema de Votação (Governor) e Tesouraria.

---

## 🛠️ Tecnologias Utilizadas

### Front-end & Web3
- **[Next.js 15](https://nextjs.org/)** (App Router) - Framework React
- **[Tailwind CSS](https://tailwindcss.com/)** - Estilização utilitária
- **[Framer Motion](https://www.framer.com/motion/)** - Animações fluidas
- **[RainbowKit](https://www.rainbowkit.com/) & [Wagmi](https://wagmi.sh/)** - Conexão de carteiras e hooks Web3
- **[Viem](https://viem.sh/)** - Interação com a blockchain Ethereum/Polygon

### Inteligência Artificial
- **[Google Gemini API](https://ai.google.dev/)** - Assistente virtual da comunidade

### Smart Contracts (Blockchain)
- **Solidity** - Linguagem dos contratos inteligentes
- **OpenZeppelin** - Padrões de segurança para tokens (ERC-20 Votes) e Governança

---

## 🚀 Como Executar o Projeto Localmente

Siga os passos abaixo para rodar a interface da VerdeLedger na sua máquina:

### 1. Pré-requisitos
- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- Git

### 2. Clonar o Repositório
```bash
git clone https://github.com/seu-usuario/verdeledger-dao.git
cd verdeledger-dao
```

### 3. Instalar Dependências
```bash
npm install
```

### 4. Configurar Variáveis de Ambiente
Crie um arquivo `.env.local` na raiz do projeto baseado no `.env.example`:
```bash
cp .env.example .env.local
```
Abra o arquivo `.env.local` e adicione a sua chave da API do Google Gemini:
```env
NEXT_PUBLIC_GEMINI_API_KEY="sua_chave_api_aqui"
```

### 5. Iniciar o Servidor de Desenvolvimento
```bash
npm run dev
```
Acesse [http://localhost:3000](http://localhost:3000) no seu navegador para ver o projeto rodando.

---

## 🤝 Como Colaborar

A VerdeLedger é um projeto de código aberto e adoraríamos receber sua contribuição! Seja você um desenvolvedor Front-end, especialista em Web3/Solidity, Designer ou entusiasta da sustentabilidade.

### Passos para Contribuir:

1. Faça um **Fork** do projeto.
2. Crie uma nova branch para a sua feature ou correção:
   ```bash
   git checkout -b minha-nova-feature
   ```
3. Faça as alterações necessárias e realize o commit:
   ```bash
   git commit -m "feat: adiciona nova funcionalidade X"
   ```
4. Envie para o seu fork:
   ```bash
   git push origin minha-nova-feature
   ```
5. Abra um **Pull Request (PR)** neste repositório explicando detalhadamente o que foi alterado.

### Áreas que precisam de ajuda:
- **Smart Contracts:** Fazer o deploy dos contratos da pasta `/contracts` em uma rede de testes (ex: Polygon Amoy) e atualizar os endereços no arquivo `lib/contracts.ts`.
- **Backend/Banco de Dados:** Integrar o Supabase para salvar os rascunhos de propostas e perfis de usuários off-chain.
- **Design:** Melhorar a acessibilidade e responsividade em dispositivos móveis.
- **Comunidade:** Tradução do projeto para outros idiomas (Inglês, Espanhol).

---

## 📄 Licença

Este projeto é distribuído sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

---
*Desenvolvido com 💚 para um futuro mais sustentável e descentralizado.*
