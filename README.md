# 🕒 Horarios FCT
Página web responsiva que exibe os horários e salas das disciplinas ministradas na FCT. O sistema foi projetado para ser intuitivo, fácil de usar e otimizado para dispositivos como tablets Fire 7, Fire 8 e iPad.

## ✨ Funcionalidades
- Consulta Intuitiva: Pesquise horários por sala, disciplina, professor ou dia da semana.
- Filtros Rápidos: Navegue facilmente entre diferentes tipos de salas (Mini-auditórios, Laboratórios, etc.).
- Interface Responsiva: Otimizada para visualização em desktops, tablets e celulares.
- Atualizações 100% Automatizadas: Um robô (GitHub Actions) busca e publica os novos horários todos os dias.
- Monitoramento Ativo: Notificações são enviadas para o Google Chat informando o sucesso ou falha de cada atualização.
- Zero Infraestrutura: A aplicação roda inteiramente no ecossistema do GitHub (Actions e Pages), eliminando a necessidade de um servidor local.

## 🛠️ Tecnologias Utilizadas
- Frontend: HTML, CSS, JavaScript, jQuery, DataTables, Bootstrap
- Backend & Automação: Python, GitHub Actions
- Fonte de Dados: Google Drive API (Google Sheets)
- Hospedagem: GitHub Pages

## ⚙️ Como Funciona?
O processo de atualização é gerenciado por um workflow do GitHub Actions, seguindo os passos abaixo:

- Agendamento: O workflow é acionado automaticamente todos os dias às 7h da manhã.
- Execução do Script: Um script Python é executado em um ambiente virtual no GitHub.
- Download dos Dados: O script se autentica de forma segura no Google Drive e baixa a planilha de horários mais recente.
- Processamento: Os dados da planilha são lidos, processados e convertidos em um formato compatível com a página web (js/dados.js).
- Commit e Push: O robô faz um commit e push dos arquivos atualizados diretamente no repositório.
- Publicação: O GitHub Pages detecta a atualização e publica a nova versão da página instantaneamente.
- Notificação: Uma mensagem de status é enviada para um espaço dedicado no Google Chat.

### 🧭 Manutenção e Configuração
Para manter a automação funcionando, o repositório utiliza Secrets, que são variáveis de ambiente criptografadas e seguras.

    GOOGLE_CREDENTIALS: Armazena as credenciais (conteúdo do arquivo service_account.json) para acessar a planilha no Google Drive.

    GOOGLE_CHAT_WEBHOOK: Contém a URL do webhook para enviar notificações de status.

> [!NOTE]
> Para forçar uma atualização fora do horário agendado, você pode acionar o workflow manualmente. Vá até a aba Actions do repositório, selecione o workflow "Atualização Diária dos Horários" e clique em "Run workflow".


>[!WARNING]
>Antes de baixar os dados, verifique se os títulos das salas seguem o mesmo padrão com um espaço, um traço, um espaço, SALA.
>![Ponto de atenção antes de iniciar os passos](https://github.com/ti-fct/horariosFCT/blob/main/images/pontoDeAtencao.png)
>
>Verifique se os nomes das salas são os mesmos do filtro
>![Ponto de atenção antes de iniciar os passos](https://github.com/ti-fct/horariosFCT/blob/main/images/pontoDeAtencaoFiltros.png)
>
>Em caso de erro verifique a quantidade de colunas
>![Ponto de atenção antes de iniciar os passos](https://github.com/ti-fct/horariosFCT/blob/main/images/excluirColunas.png)