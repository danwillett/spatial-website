const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type WebsiteInfo {
    label: String
    url: String
  }

  type People {
    _id: ID
    firstName: String
    lastName: String
    title: String
    image: String
    description: String
    category: String
    current: Boolean
    email: String
    location: String
    phone: String
    gscholar: String
    website: WebsiteInfo
  }

  scalar Date

  type Projects {
    name: String
    startDate: Date
    endDate: Date
    description: String
    image: String
  }


  type Query {
    people: [People]!
    projects: [Projects]!
  }
`;

module.exports = typeDefs;