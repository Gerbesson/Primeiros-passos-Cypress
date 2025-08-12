import userData from '../fixtures/user-data.json' 

describe('template spec', () => {

  const selectorsList = {
    usarnameField:"[name='username']",
    passwordField:"[name='password']",
    loginButton:  "[type='submit']",
    sectionTitleTopBar:".oxd-topbar-header-breadcrumb-module",
    dashboardGrid: ".orangehrm-dashboard-grid",
    WrongCredentialAlert: "[role='alert']",
    myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
    firstNameField: "[name='firstName']",
    lastNameField: "[name='lastName']",
    genericField: ".oxd-input--active",
    dateField: "[placeholder='yyyy-mm-dd']",
    dateCloseButton: ".--close",
    submiButton: "[type='submit']",
    
  }


  it.only ('User Infor Update - sucessed', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usarnameField) .type(userData.userSucces.username)
    cy.get(selectorsList.passwordField) .type(userData.userSucces.password)
    cy.get(selectorsList.loginButton) .click()
    cy.location('pathname').should('equal', "/web/index.php/dashboard/index")
    cy.get(selectorsList.dashboardGrid)
    cy.get(selectorsList.myInfoButton).click()
    cy.get(selectorsList.firstNameField) .clear() .type('FirstNameTest')
    cy.get(selectorsList.lastNameField) .clear() .type('lastNameTest')
    
    cy.get(selectorsList.genericField).eq(3).clear().type('Employee')
    cy.get(selectorsList.genericField).eq(4).clear().type('OtherIdTest')
    cy.get(selectorsList.genericField).eq(5).clear().type('DriverLincenseTest')
    cy.get(selectorsList.genericField).eq(6).clear().type('2025-03-10')
    cy.get(selectorsList.dateCloseButton).click()
    cy.get(selectorsList.genericField).eq(7).clear().type('ssnNumberTest')
    cy.get(selectorsList.genericField).eq(8).clear().type('siNumberTest')
    cy.get(selectorsList.submiButton).eq(0).click()
    
    

  })
  it('login - fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usarnameField).type(userData.userfail.username)
    cy.get(selectorsList.passwordField).type(userData.userfail.password)
    cy.get(selectorsList.loginButton) .click()
    cy.get(selectorsList.WrongCredentialAlert)
    
  })
})