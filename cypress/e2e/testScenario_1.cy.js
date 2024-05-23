// The purpose of this task is to demonstrate my technical skills rather than focus on logical and analytical aspects for creating test scenarios.
// //////////////////

// using one example for PageObject
import {onClinicSelectionPage} from '../support/page_objects/clinicSelectionPage'; 
// using fixture files for saving environment variables
import data from '../fixtures/data.json';

describe("User can't confirm appointement without Reason for Consultation", () => {
  // using hooks
  beforeEach(()=>{
    cy.visit("/")
  })

  it('Select Clinic from list by Name', () => {
    // using different cypress methods and different chai assertions (should, expect)
   cy.get('.navbar-nav .nav-link')
    .contains('In-Clinic Care')
    .trigger('mouseover')
    .siblings('.dropdown-menu')
    .find('a')
    .contains(data.clinicName)
    .click();

    onClinicSelectionPage.selectClinic(data.clinicName);

    // using commands.js & getting x-path from cypress suggestions
    cy.get('.jss42 > :nth-child(1) > :nth-child(1)')
      .click()
      .checkBackgroundCol('rgb(233, 240, 250)');

    cy.contains('button', 'Select').click();

    // interaction with yields 
    cy.get('.jss57 > .MuiTypography-root').then(($element) => {
      expect($element.text().trim()).to.equal("Reason for Consultation");
    });

    // wrap method, jquery, filter methods etc.
    cy.get("button").then(($btn) => {
      const continueButton = $btn.filter(':contains("Continue")');
      if (continueButton.length > 0) {
        cy.wrap(continueButton).click();
      }
    });

    cy.get('.MuiTypography-caption').eq(0).should('be.visible');
  })
})