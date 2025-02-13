# Horarios FCT
Pagina web que mostra os horários e as salas das matérias ministradas.

A pagina deve ser responsiva para apresentação nos tablets Fire 7, Fire 8 e Ipad

- **Objetivo:** Mostrar os horarios de aulas com base na planilha de horarios. A interface deve ser intuitiva, fácil de usar e responsiva.
- **Funcionalidades:** Consulta de horários por sala ou matéria
- **Linguages:** Python, JavaScript, HTML e CSS

## Instalação
Neste nova versão o local de hospedagem do site foi transferido para o GitHub Pages, uma mudança que permite organizar os arquivos CSS e JavaScript de forma independente. Isso não apenas aprimora a estrutura do projeto, mas também facilita a gestão e manutenção do site, trazendo mais clareza e eficiência.

<s>A segunda versão dessa pagina foi feita para ser incorporada no Google Sites, através do link [https://sites.google.com/ufg.br/horarios](https://sites.google.com/ufg.br/horarios)

Depois de criado no Google site deve adicionar o link no submeno na pagina da FCT [https://fct.ufg.br/admin/menus?menu=2843](https://fct.ufg.br/admin/menus?menu=2843)
</s>
## Utils

Na pasta [Utils](https://github.com/ti-fct/horariosFCT/tree/main/utils) possui os arquivos para realizar a formatação do arquivo original para uma tabela única

1. [excluiAbas.py](https://github.com/ti-fct/horariosFCT/blob/main/utils/excluiAbas.py) deletas as abas 2024-1 Pedidos Externas FCT, 2024-1 Pedidos Ext Samambaia e Todas as turmas FCT

2. [extraiAbasCSV.py](https://github.com/ti-fct/horariosFCT/blob/main/utils/extraiAbasCSV.py) extrai as abas da planilha XlSX e transforma cada uma em um CSV dentro da pasta [abas_csvs](https://github.com/ti-fct/horariosFCT/tree/main/utils/abas_csvs)

3. [formataPlanilha.py](https://github.com/ti-fct/horariosFCT/blob/main/utils/formataPlanilha.py) pega o nome da sala partir do titulo da tabela e cria a coluna sala e remove as linhas em branco onde não possui horário

4. [formataCSV.py](https://github.com/ti-fct/horariosFCT/blob/main/utils/formataCSV.py) gera um arquivo no bloco de notas com os dados para serem copiados dentro do arquivo [js/dados.js](https://github.com/ti-fct/horariosFCT/blob/main/js/dados.js) na parte `var dados = []` e apague a primeira linha onde contem o cabeçalho.