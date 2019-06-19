const { gql } = require('apollo-server');

const typeDefs = gql`
    type Query {
        listIncidents: [Incident]!
        searchPatient(ppsNumber:String!, dob:String!): Patient
        getPatientPriority(ppsNumber: String! dob: String!): PatientPriority!
        getIncident(id: ID!): Incident!
        getSymptoms: [Symptom]!
    }
    type Mutation {
        createIncident(
            patientId: ID!
            priority: Priority!
            symptoms: [String]!
        ): Incident!
        createPatient(
            ppsNumber: String!
            dob: String!
            firstName: String!
            lastName: String!
            email: String
            phoneNumber: String
            address: String
        ): Patient!
        loginStaff(username: String! password: String!): String!
        loginPatient(ppsNumber: String! dob:String!): String!
        finishIncident(incidentId: ID!): Incident
    }
    type Incident {
        id: ID!
        patient: Patient!
        priority: Priority!
        symptoms: [Symptom]!
        description: String
        checkinTime: String
        checkoutTime: String
    }

    type Symptom {
        id: ID!
        name: String!
        description: String
    }

    type Patient {
        id: ID!
        ppsNumber: String!
        dob: String!
        firstName: String!
        lastName: String!
        email: String
        phoneNumber: String
        address: String
        incidents: [Incident]!
    }

    type User {
        id: ID!
        username: String!
        password: String!
        email: String
        phoneNumber: String
        position: Position!
    }
    type PatientPriority {
        queuePosition: Int!
        estimatedTime: Int!
    }

    enum Priority {
        Urgent
        High
        Medium
        Low
    }

    enum Position {
        Nurse
        Doctor
    }
`;

module.exports = typeDefs;