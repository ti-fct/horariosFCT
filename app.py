from flask import Flask, render_template, request
from peewee import *
import csv

app = Flask(__name__)

# Database setup
db = SqliteDatabase('horariosFCT.db')

class Schedule(Model):
    horario = CharField()
    segunda = CharField(null=True)
    terca = CharField(null=True)
    quarta = CharField(null=True)
    quinta = CharField(null=True)
    sexta = CharField(null=True)
    sabado = CharField(null=True)
    sala = CharField(null=True)

    class Meta:
        database = db

db.connect()
db.create_tables([Schedule])

# Import CSV data
def import_csv_data():
    csv_file_path = 'DisciplinasSalasFCT.csv'
    encodings = ['utf-8', 'latin-1', 'iso-8859-1', 'cp1252']
    
    for encoding in encodings:
        try:
            with open(csv_file_path, 'r', encoding=encoding) as file:
                csv_reader = csv.reader(file, delimiter=',')
                next(csv_reader)  # Pula a linha de cabeçalho
                for row in csv_reader:
                    Schedule.create(
                        horario=row[0],
                        segunda=row[1],
                        terca=row[2],
                        quarta=row[3],
                        quinta=row[4],
                        sexta=row[5],
                        sabado=row[6],
                        sala=row[7]
                    )
            print(f"Arquivo CSV importado com sucesso usando a codificação {encoding}")
            return
        except UnicodeDecodeError:
            continue
    
    print("Não foi possível importar o arquivo CSV com nenhuma das codificações tentadas.")

# Import data if the table is empty
if Schedule.select().count() == 0:
    import_csv_data()

@app.route('/')
def index():
    schedules = Schedule.select()
    return render_template('index.html', schedules=schedules)

if __name__ == '__main__':
    app.run(host='0.0.0.0',debug=True)

