# Horarios FCT
Pagina web que mostra os horários e as salas das matérias ministradas
A pagina deve ser responsiva para apresentação nos tablets Fire 7, Fire 8 e Ipad

- **Objetivo:** Mostrar os horarios de aulas com base na planilha de horarios. A interface deve ser intuitiva, fácil de usar e responsiva.
- **Funcionalidades:** Consulta de horários por sala ou matéria
- **Linguages:** Python, JavaScript, HTML e CSS
- **Frameworks:** Flask e ORM Peeweee
- **Banco de dados:** SQLite <sub>futuramente deve ser removido e utilizado somente o pandas passando um [json para receber no datatables](https://datatables.net/examples/data_sources/ajax.html)</sub>
## Instalação
Acesse a pasta horariosFCT via terminal e digite o comando:

`python app.py`

Acesse no navegador o endereço:

http://127.0.0.1:5000

## Criando um serviço
Caso venha ocorrer do computador desligar ou reiniciar é preciso que a aplicação execute automáticamente para isso é preciso criar um serviço
Crie o arquivo na seguinte pasta com o comando:
`sudo nano /etc/systemd/system/horariofct.service`

Adicione o seguinte codigo:
```
[Unit]
Description=Horario FCT Flask Service
After=network.target

[Service]
Type=simple
User=suporte
WorkingDirectory=/home/suporte/horarioFCT
ExecStart=/usr/bin/python3 /home/suporte/horarioFCT/app.py
Restart=always

[Install]
WantedBy=multi-user.target
```

Salve o código apertando <kbd>Ctrl</kbd> + <kbd>X</kbd>

Depois digite os comando para inicializar o seviço:
`sudo systemctl daemon-reload`
`sudo systemctl enable horariofct.service`
`sudo systemctl start horariofct.service`
`sudo systemctl status horariofct.service`

## Utils

Na pasta Utils possui os arquivos para realizar a formatação do arquivo original para uma tabela única
O arquivo excluiAbas.py deletas as abas 2024-1 Pedidos Externas FCT, 2024-1 Pedidos Ext Samambaia e Todas as turmas FCT
O arquivo extraiAbasCSV.py extrai as abas da planilha XlSX e transforma cada uma em um CSV dentro da pasta abas_csvs
O arquivo formataPlanilha.py pega o nome da sala partir do titulo da tabela e cria a coluna sala e remove as linhas em branco onde não possui horario