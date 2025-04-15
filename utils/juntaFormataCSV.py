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
try:
    dados = []
    with open('resultado_final.csv', 'r', encoding='utf-8') as arquivo:
        leitor_csv = csv.reader(arquivo)
        for linha in leitor_csv:
            dados.append(linha)
    
    # Remove a primeira linha (cabeçalho)
    if len(dados) > 0:
        dados = dados[1:]
    
    # Cria o arquivo dados.js
    with open('..\js\dados.js', 'w', encoding='utf-8') as arquivo:
        arquivo.write('var dados = [\n')
        
        for i, linha in enumerate(dados):
            # Formata cada linha como uma lista JavaScript
            elementos_formatados = []
            for elemento in linha:
                # Escapa aspas simples no conteúdo e formata como string JavaScript
                elemento_escapado = str(elemento).replace("'", "\\'")
                elementos_formatados.append(f"'{elemento_escapado}'")
            
            linha_formatada = '[' + ', '.join(elementos_formatados) + ']'
            
            # Adiciona vírgula no final de cada linha, exceto na última
            if i < len(dados) - 1:
                linha_formatada += ','
            
            arquivo.write(linha_formatada + '\n')
        
        arquivo.write('];\n')
    
    print("Processamento concluído com sucesso!")
    
except Exception as e:
    print(f"Ocorreu um erro durante o processamento: {e}")
