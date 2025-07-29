describe('template spec', () => {

  const selectorsList = {
    usarnameField:"[name='username']",
    passwordField:"[name='password']",
    loginButton:  "[type='submit']",
    sectionTitleTopBar:".oxd-topbar-header-breadcrumb-module",
    WrongCredentialAlert: "[role='alert']",


  }

  it ('login - sucessed', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usarnameField) .type('Admin')
    cy.get(selectorsList.passwordField) .type('admin123')
    cy.get(selectorsList.loginButton) .click()
    cy.location('pathname').should('equal', "/web/index.php/dashboard/index")
    cy.get(selectorsList.sectionTitleTopBar).contains('Dashboard')
  })
  it('login - fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usarnameField).type('Test')
    cy.get(selectorsList.passwordField).type('Test')
    cy.get(selectorsList.loginButton) .click()
    cy.get(selectorsList.WrongCredentialAlert)
    
  })
})