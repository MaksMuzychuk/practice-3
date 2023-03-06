/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCharacter = /* GraphQL */ `
  subscription OnCreateCharacter(
    $filter: ModelSubscriptionCharacterFilterInput
  ) {
    onCreateCharacter(filter: $filter) {
      id
      name
      server
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateCharacter = /* GraphQL */ `
  subscription OnUpdateCharacter(
    $filter: ModelSubscriptionCharacterFilterInput
  ) {
    onUpdateCharacter(filter: $filter) {
      id
      name
      server
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteCharacter = /* GraphQL */ `
  subscription OnDeleteCharacter(
    $filter: ModelSubscriptionCharacterFilterInput
  ) {
    onDeleteCharacter(filter: $filter) {
      id
      name
      server
      createdAt
      updatedAt
    }
  }
`;
export const onCreateSession = /* GraphQL */ `
  subscription OnCreateSession($filter: ModelSubscriptionSessionFilterInput) {
    onCreateSession(filter: $filter) {
      id
      date
      hours
      character {
        id
        name
        server
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateSession = /* GraphQL */ `
  subscription OnUpdateSession($filter: ModelSubscriptionSessionFilterInput) {
    onUpdateSession(filter: $filter) {
      id
      date
      hours
      character {
        id
        name
        server
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteSession = /* GraphQL */ `
  subscription OnDeleteSession($filter: ModelSubscriptionSessionFilterInput) {
    onDeleteSession(filter: $filter) {
      id
      date
      hours
      character {
        id
        name
        server
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
