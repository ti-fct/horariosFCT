import csv
import os
import pandas as pd

# Definir o diretório onde estão os arquivos CSV editados
diretorio_csvs = "abas_csvs_editados"

# Nome do arquivo final consolidado
arquivo_saida = "resultado_final.csv"

# Lista para armazenar os DataFrames de cada CSV
dataframes = []

# Listar todos os arquivos CSV na pasta
arquivos_csv = [f for f in os.listdir(diretorio_csvs) if f.endswith('.csv')]

# Percorrer cada arquivo e carregá-lo
for arquivo in arquivos_csv:
    caminho_arquivo = os.path.join(diretorio_csvs, arquivo)
    df = pd.read_csv(caminho_arquivo)

    # Adicionar o nome do arquivo como uma nova coluna (opcional)
    #df["Arquivo_Origem"] = arquivo
    
    # Adicionar ao conjunto de DataFrames
    dataframes.append(df)

# Concatenar todos os arquivos em um único DataFrame
if dataframes:
    df_final = pd.concat(dataframes, ignore_index=True)

    # Salvar o resultado final em um novo arquivo CSV
    df_final.to_csv(arquivo_saida, index=False)
    print(f"Arquivo consolidado salvo como: {arquivo_saida}")
else:
    print("Nenhum arquivo CSV encontrado para consolidar.")

#______________________________________________________________________________

# Ler o arquivo CSV
with open('resultado_final.csv', 'r', encoding="utf8") as file:
    reader = csv.reader(file)
    data = []
    for row in reader:
        # Adicionar cada linha do CSV como uma lista na estrutura de dados
        data.append(row)

# Ajustar o formato da primeira coluna (horário)
for i in range(len(data)):
    data[i][0] = data[i][0].replace(',', '')


# Escrever a estrutura de dados em um arquivo .txt
with open('dados.txt', 'w', encoding="utf8") as file:
    for row in data:
        #file.write('\t'.join(row) + '\n')
        file.write(str(row) + ','  + '\n')

print("Prontinho... Abra o arquivo dados.txt copie tudo e cole dentro do arquivo js\dados.js apague a linha do cabeçalho onde tem os dias da semana")