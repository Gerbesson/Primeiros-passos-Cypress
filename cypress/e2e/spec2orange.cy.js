import userData from '../fixtures/user-data.json' 

describe('template spec', () => {

  const selectorsList = {
    usarnameField:"[name='username']",
    passwordField:"[name='password']",
    loginButton:  "[type='submit']",
    sectionTitleTopBar:".oxd-topbar-header-breadcrumb-module",
    dashboardGrid: ".orangehrm-dashboard-grid",
    WrongCredentialAlert: "[role='alert']",

  }


  it ('login - sucessed', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usarnameField) .type(userData.userSucces.username)
    cy.get(selectorsList.passwordField) .type(userData.userSucces.password)
    cy.get(selectorsList.loginButton) .click()
    cy.location('pathname').should('equal', "/web/index.php/dashboard/index")
    cy.get(selectorsList.dashboardGrid)
  })
  it('login - fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usarnameField).type(userData.userfail.username)
    cy.get(selectorsList.passwordField).type(userData.userfail.password)
    cy.get(selectorsList.loginButton) .click()
    cy.get(selectorsList.WrongCredentialAlert)
    
  })
})