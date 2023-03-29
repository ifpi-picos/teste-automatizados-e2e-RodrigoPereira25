Feature: Inserir e alterar e-mail no perfil do usuário

    Scenario: Salvar e-mail

        Given que eu tenho um usuário logado no sistema Refeitório
        When clico no perfil do usuário
        And acesso o campo e-mail
        And modifico o e-mail
        Then após o sistema validar o e-mail, me deixe salvar as alterações
