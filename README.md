# Horarios FCT
Página web responsiva que exibe os horários e salas das disciplinas ministradas na FCT. O sistema foi projetado para ser intuitivo, fácil de usar e otimizado para dispositivos como tablets Fire 7, Fire 8 e iPad.

## Funcionalidades
- Consulta de horários por sala ou disciplina.
- Interface responsiva, adaptada para tablets (Fire 7, Fire 8, iPad) e outros dispositivos.
- Atualização automática de dados a partir de planilhas CSV, com importação direta para o GitHub.
- Comparação automática de planilhas para atualização apenas quando necessário.
- Execução simplificada por meio de um único script Python, compatível com automação via Cron no Linux.
## Tecnologias Utilizadas
- Linguagens: Python, JavaScript, HTML, CSS
- Hospedagem: GitHub Pages, Google Sites
- Automação: Script Python com integração ao GitHub e suporte ao Cron
## Instalação
A página está hospedada no GitHub Pages, o que permite uma organização independente e eficiente dos arquivos CSS, JavaScript e HTML. Essa mudança melhora a manutenção do projeto e garante maior clareza na estrutura do código.

### Passos para Configuração
1. Clone o repositório: git clone `https://github.com/ti-fct/horariosFCT.git`
2. Certifique-se de que o ambiente Python está configurado com as dependências necessárias (listadas em `requirements.txt`).
3. Execute o script principal (`main.py`) para processar a planilha de horários e atualizar os dados.
4. Configure o Cron (no Linux) para automação, se desejar. 
    - Abra o terminal e digite o seguinte comando `crontab -e` 
    - e adicione o seguinte código no final ```00 07 * * *python3 /caminho/para/Horarios_Salas_Combinados.py```


> [!NOTE]
> A versão anterior dependia do Google Colab e de múltiplos scripts. Agora, um único script gerencia todo o processo, com importação automática de arquivos CSV para o GitHub.


> [!WARNING]
> Antes de baixar os dados, verifique se os títulos das salas seguem o mesmo padrão com um espaço, um traço, um espaço, SALA.
![Ponto de atenção antes de iniciar os passos](https://github.com/ti-fct/horariosFCT/blob/main/images/pontoDeAtencao.png)
> Verifique se os nomes das salas são os mesmos do filtro
![Ponto de atenção antes de iniciar os passos](https://github.com/ti-fct/horariosFCT/blob/main/images/pontoDeAtencaoFiltros.png)
> Em caso de erro verifique a quantidade de colunas
![Ponto de atenção antes de iniciar os passos](https://github.com/ti-fct/horariosFCT/blob/main/images/excluirColunas.png)
