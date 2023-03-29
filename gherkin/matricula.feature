Feature: Inserir e alterar matrícula no perfil do usuário

    Scenario: Salvar matrícula

        Given que eu tenho um usuário logado no sistema Refeitório
        When clico no perfil do usuário
        And acesso o campo matrícula
        And modifico a matrícula
        Then após a matrícula ser validada pelo sistema, me deixe salvar as alterações
