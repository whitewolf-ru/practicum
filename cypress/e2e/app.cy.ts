Cypress.config("defaultCommandTimeout", 40000);

describe('Главная страница', () => {
   before(function () {
      cy.visit('http://localhost:3000');
      //cy.waitForReact();
   });
})

it('Проверка ссылок', function () {
   cy.visit('http://localhost:3000')

   cy.contains('Конструктор').click()
   cy.contains('Соберите бургер');
   //cy.go('back')

   cy.contains('Лента заказов').click()
   cy.contains('Выполнено');

   cy.contains('Личный кабинет').click()
   cy.contains('Вы - новый пользователь');

});

describe('Проверка формы', () => {
   it('login', () => {
      cy.visit('http://localhost:3000/login')
      cy.get("*").contains("E-mail").parent().within(() => {
         cy.get("input").type("trash111@whitewolf.ru")
      })
      cy.get("*").contains("пароль").parent().within(() => {
         cy.get("input").type("1111111")
      })
      cy.contains("Войти").click();

      cy.get('*').find('div').contains("традиционный").first().click();
      cy.wait(1000);
      cy.get('body').trigger('keydown', { keyCode: 27});

      const dataTransfer = new DataTransfer();

      cy.get('*').find('div').contains("булка").first().trigger('dragstart', { dataTransfer });
      cy.get('#constructor').trigger('drop', { dataTransfer });

      cy.get('*').find('div').contains("традиционный").first().trigger('dragstart', { dataTransfer });
      cy.get('#constructor').trigger('drop', { dataTransfer });

      cy.get('*').find('div').contains("традиционный").first().trigger('dragstart', { dataTransfer });
      cy.get('#constructor').trigger('drop', { dataTransfer });

      cy.get('*').find('div').contains("салат").first().trigger('dragstart', { dataTransfer });
      cy.get('#constructor').trigger('drop', { dataTransfer });

      cy.get('*').find('div').contains("Кристаллы").first().trigger('dragstart', { dataTransfer });
      cy.get('#constructor').trigger('drop', { dataTransfer });

      cy.wait(3000);

      cy.contains("Оформить заказ").click();

      cy.wait(1000);

      cy.get('body').trigger('keydown', { keyCode: 27});
      cy.contains("Личный кабинет").click();
      cy.contains("История заказов").click();

   });
});
