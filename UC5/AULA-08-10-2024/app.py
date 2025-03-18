from sqlalchemy import Column, Integer, String, create_engine
from sqlalchemy.orm import declarative_base, sessionmaker

# Definindo a classe base
Base = declarative_base()

# Definindo uma classe que será mapeada para uma tabela
class Usuario(Base):
    __tablename__ = 'usuario'
    
    id = Column(Integer, primary_key=True)
    nome = Column(String)
    idade = Column(Integer)

# Configurando o banco de dados
engine = create_engine('postgresql://postgres:3453@localhost/senac')

# Criando as tabelas no banco de dados
Base.metadata.create_all(engine)

# Criando uma sessão
Session = sessionmaker(bind=engine)
session = Session()

# Função para inserir um novo usuário
def inserir_usuario(nome, idade):
    novo_usuario = Usuario(nome=nome, idade=idade)
    session.add(novo_usuario)
    session.commit()
    print(f"Usuário {nome} inserido com sucesso.")

# Função para listar todos os usuários
def listar_usuarios():
    usuarios = session.query(Usuario).all()
    for usuario in usuarios:
        print(f"ID: {usuario.id}, Nome: {usuario.nome}, Idade: {usuario.idade}")

# Função para atualizar um usuário
def atualizar_usuario(id, novo_nome=None, nova_idade=None):
    usuario = session.query(Usuario).filter_by(id=id).first()
    if usuario:
        if novo_nome:
            usuario.nome = novo_nome
        if nova_idade:
            usuario.idade = nova_idade
        session.commit()
        print(f"Usuário {id} atualizado com sucesso.")
    else:
        print(f"Usuário com ID {id} não encontrado.")

# Função para excluir um usuário
def excluir_usuario(id):
    usuario = session.query(Usuario).filter_by(id=id).first()
    if usuario:
        session.delete(usuario)
        session.commit()
        print(f"Usuário {id} excluído com sucesso.")
    else:
        print(f"Usuário com ID {id} não encontrado.")

# Exemplo de uso das funções
if __name__ == "__main__":
    # Inserir usuários
    inserir_usuario("João", 30)
    inserir_usuario("Maria", 25)

    # Listar usuários
    print("\n--- Lista de usuários ---")
    listar_usuarios()

    # Atualizar um usuário
    atualizar_usuario(1, novo_nome="João da Silva", nova_idade=31)

    # Listar usuários novamente para ver a atualização
    print("\n--- Lista de usuários após atualização ---")
    listar_usuarios()

    # Excluir um usuário
    excluir_usuario(2)

    # Listar usuários novamente para ver a exclusão
    print("\n--- Lista de usuários após exclusão ---")
    listar_usuarios()


