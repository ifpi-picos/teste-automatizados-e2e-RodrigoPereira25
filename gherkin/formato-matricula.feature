Feature: Inserir e alterar matrícula no perfil do usuário

    Scenario: Verificar formato de matrícula

        Given que eu tenho um usuário logado no sistema Refeitório
        When clico no perfil do usuário
        And acesso o campo matrícula
        And modifico a matrícula
        Then o sistema deve verificar se o formato de matrícula está correto. Ex: 2021118TADS0335 (ano de ingresso - ex: 2021; período - ex: 1; código do curso - ex: 18TADS e número sequencial de matrícula - ex: 0335)