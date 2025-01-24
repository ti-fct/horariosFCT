import csv

# Ler o arquivo CSV
with open('DisciplinasSalasFCT.csv', 'r', encoding="utf8") as file:
    reader = csv.reader(file)
    data = []
    for row in reader:
        # Adicionar cada linha do CSV como uma lista na estrutura de dados
        data.append(row)

# Ajustar o formato da primeira coluna (horário)
for i in range(len(data)):
    data[i][0] = data[i][0].replace(',', '')

# Imprimir a estrutura de dados resultante
print(data)

# Escrever a estrutura de dados em um arquivo .txt
with open('dados.txt', 'w', encoding="utf8") as file:
    for row in data:
        #file.write('\t'.join(row) + '\n')
        file.write(str(row) + ','  + '\n')