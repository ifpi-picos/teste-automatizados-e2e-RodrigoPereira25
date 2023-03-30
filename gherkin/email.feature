Feature: Inserir e alterar e-mail no perfil do usuário

    Scenario: Verificar formato de e-mail

        Given que eu tenho um usuário logado no sistema Refeitório
        When clico no perfil do usuário
        And acesso o campo e-mail
        And modifico o e-mail
        Then o sistema deve verificar se o formato de e-mail está correto. Ex: capic.2021118tads0335@aluno.ifpi.edu.br (identificação do campus - ex: capic; matrícula - ex: 2021118tads0335 e domínio - ex: @aluno.ifpi.edu.br)
