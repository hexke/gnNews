
describe('Home Page', () => {

    beforeEach(() => {
        cy.intercept("GET", /^https:\/\/flagsapi\.com\/.*/, { forceNetworkError: true });

        cy.visit('/');
    });

    it('should redirect to "/country/pl"', () => {
        cy.url().should('include', '/country/pl');
    });

    it('should render article list', () => {
        cy.intercept("GET", /^https:\/\/newsapi\.org\/.*/, { fixture: 'article.json' });

        cy.url().should('include', '/country/pl');
    });

    it('should show error message on news fetch fail', () => {
        cy.intercept("GET", /^https:\/\/newsapi\.org\/.*/, { forceNetworkError: true });

        cy.url().should('include', '/country/pl');
    });
});