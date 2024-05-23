export class ClinicSelectionPage{
    selectClinic(clinicName) {
        cy.get('.jss31 > :nth-child(2)').should("have.text", clinicName);
    }
}

export const onClinicSelectionPage = new ClinicSelectionPage();