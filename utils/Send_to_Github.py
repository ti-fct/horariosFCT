import os
from dotenv import load_dotenv
from github import Github, GithubException

CREDENTIALS_FILE = 'service_account.json'
OUTPUT_CSV_FILENAME = 'Horarios_Salas_Combinados.csv'

# --- Configurações do GitHub ---
load_dotenv()
GITHUB_TOKEN = os.environ.get('GITHUB_TOKEN')
GITHUB_OWNER = 'ti-fct'
GITHUB_REPO_NAME = 'horariosFCT'
GITHUB_BRANCH = 'main'
GITHUB_FILE_PATH = 'utils/'+OUTPUT_CSV_FILENAME


def upload_to_github(file_path, owner, repo_name, branch, github_file_path):

    if not GITHUB_TOKEN:
        print("Erro: GITHUB_TOKEN não encontrado nas variáveis de ambiente.")
        return False
    
    g = Github(GITHUB_TOKEN)
    
    try:
        repo = g.get_repo(f"{owner}/{repo_name}")
    except GithubException as e:
        print(f"Erro ao acessar o repositório '{owner}/{repo_name}': {e}")
        print("Verifique se o nome do repositório/proprietário está correto e se o token tem permissões adequadas.")
        return False
    except Exception as e:
        print(f"Erro inesperado ao obter repositório: {e}")
        return False

    # Verifica se o arquivo existe antes de tentar lê-lo
    if not os.path.exists(file_path):
        print(f"Erro: Arquivo '{file_path}' não encontrado.")
        return False

    with open(file_path, 'rb') as f:
        content = f.read()

    commit_message = f"Atualizado {github_file_path} via script Python"

    try:
        # Tenta obter o arquivo para verificar se existe e pegar o SHA
        file_in_github = repo.get_contents(github_file_path, ref=branch)
        repo.update_file(file_in_github.path, commit_message, content, file_in_github.sha, branch=branch)
        print(f"Arquivo '{github_file_path}' atualizado com sucesso no GitHub!")
    except GithubException as e:
        if e.status == 404:
            repo.create_file(github_file_path, commit_message, content, branch=branch)
            print(f"Arquivo '{github_file_path}' criado com sucesso no GitHub!")
        else:
            print(f"Erro do GitHub ao enviar arquivo: {e.status} - {e.data}")
            return False
    except Exception as e:
        print(f"Erro inesperado ao enviar arquivo para o GitHub: {e}")
        return False
    return True
