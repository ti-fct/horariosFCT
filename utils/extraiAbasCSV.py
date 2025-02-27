import openpyxl
import pandas as pd

def salvar_abas_como_csv(arquivo_excel, diretorio_saida):
  
  # Carrega o arquivo Excel
  wb = openpyxl.load_workbook(arquivo_excel)

  # Itera sobre cada aba
  for sheetname in wb.sheetnames:
    # Cria um DataFrame a partir da aba
    df = pd.DataFrame(wb[sheetname].values)
    # Salva o DataFrame como um CSV
    df.to_csv(f"{diretorio_saida}/{sheetname}.csv", index=False)

# Exemplo de uso:
arquivo_excel = 'FINAL 2025-1-Distribuição de Salas-FCT_Mat_Prod_Trans.xlsx'
diretorio_saida = 'abas_csvs'

salvar_abas_como_csv(arquivo_excel, diretorio_saida)