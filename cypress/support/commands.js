// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import settings from '../fixtures/settings.json';

Cypress.Commands.add(
  'interceptApi',
  ({ namespace } = { namespace: 'default' }) => {
    cy.intercept(Cypress.env('VITE_API_HOST') + '/api/v1/namespaces*', {
      fixture: 'namespaces.json',
    }).as('namespaces-api');

    cy.intercept(
      Cypress.env('VITE_API_HOST') + `/api/v1/namespaces/*/workflows?query=*`,
      { fixture: 'workflows.json' },
    ).as('workflows-api');

    cy.intercept(
      Cypress.env('VITE_API_HOST') +
        `/api/v1/namespaces/*/workflows/archived?query=*`,
      { fixture: 'workflows.json' },
    ).as('workflows-archived-api');

    cy.intercept(Cypress.env('VITE_API_HOST') + '/api/v1/cluster*', {
      fixture: 'cluster.json',
    }).as('cluster-api');

    cy.intercept(Cypress.env('VITE_API_HOST') + '/api/v1/me*', {
      fixture: 'me.json',
    }).as('user-api');

    cy.intercept(Cypress.env('VITE_API_HOST') + '/api/v1/settings*', {
      ...settings,
      DefaultNamespace: namespace,
    }).as('settings-api');

    cy.intercept('https://api.github.com/repos/temporalio/ui-server/releases', {
      fixture: 'github-releases.json',
    }).as('github-releases-api');

    cy.intercept(
      Cypress.env('VITE_API_HOST') +
        `/api/v1/namespaces/default/workflows/*/runs/*/query*`,
      { fixture: 'query-stack-trace.json' },
    ).as('query-api');

    cy.intercept(
      Cypress.env('VITE_API_HOST') +
        `/api/v1/namespaces/default/task-queues/rainbow-statuses?taskQueueType=*`,
      {
        fixture: 'task-queues.json',
      },
    ).as('task-queues-api');
  },
);
