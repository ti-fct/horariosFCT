import pandas as pd

# Carregar o arquivo original
original = pd.read_csv('original.csv')

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
original = original[~original.iloc[:, 0].str.contains("SALA DE AULA -", na=False)]

new_header = ["HORARIO", "SEGUNDA", "TERÇA", "QUARTA", "QUINTA", "SEXTA", "SÁBADO", "SALA"]

# Atualizar o DataFrame com o novo cabeçalho
original.columns = new_header[:len(original.columns)]

# Salvar o resultado em um novo arquivo CSV
output_path = 'original_editado.csv'
original.to_csv(output_path, index=False)

print(f"Arquivo processado e salvo em: {output_path}")