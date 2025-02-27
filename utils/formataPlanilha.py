import os
import pandas as pd

# Definir o diretório onde os arquivos CSV estão localizados
diretorio_csvs = "abas_csvs"

# Criar a pasta de saída, se não existir
output_dir = "abas_csvs_editados"
os.makedirs(output_dir, exist_ok=True)

# Listar todos os arquivos CSV dentro da pasta
arquivos_csv = [f for f in os.listdir(diretorio_csvs) if f.endswith('.csv')]

for arquivo in arquivos_csv:
    caminho_arquivo = os.path.join(diretorio_csvs, arquivo)
    
    # Carregar o arquivo CSV
    original = pd.read_csv(caminho_arquivo)

    # Excluir todas as colunas a partir da 7ª (índice 6) para evitar o erro Length mismatch: Expected axis has 27 elements, new values have 8 elements
    original = original.iloc[:, :7]

    # Criar a coluna "SALA" preenchendo de acordo com a linha de identificação da sala
    sala_column = []
    current_sala = None

    for _, row in original.iterrows():
        # Verificar se a linha possui informação sobre a sala
        if isinstance(row.iloc[0], str) and "SALA" in row.iloc[0].upper():
            # Extrair o número da sala
            current_sala = row.iloc[0].split('SALA')[-1].strip().split(' ')[0]
        
        # Adicionar a sala atual na coluna "SALA"
        sala_column.append(current_sala)

    # Preencher a nova coluna "SALA" no DataFrame
    original['SALA'] = sala_column

    # Remover linhas onde a primeira coluna (horário) não esteja preenchida
    original = original.dropna(subset=[original.columns[0]])

    # Remover linhas que contêm a palavra "SALA DE AULA -"
    original = original[~original.iloc[:, 0].str.contains("- SALA", na=False)]

    # Definir novo cabeçalho (ajustando conforme o número de colunas do arquivo)
    new_header = ["HORARIO", "SEGUNDA", "TERÇA", "QUARTA", "QUINTA", "SEXTA", "SÁBADO", "SALA"]
    original.columns = new_header[:len(original.columns)]

    # Criar o nome do arquivo de saída
    nome_arquivo_saida = os.path.splitext(arquivo)[0] + "_editado.csv"
    caminho_saida = os.path.join(output_dir, nome_arquivo_saida)

    # Salvar o novo arquivo CSV
    original.to_csv(caminho_saida, index=False)

    print(f"Arquivo processado e salvo em: {caminho_saida}")