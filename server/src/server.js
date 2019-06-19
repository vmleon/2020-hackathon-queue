const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const db = require('./db')

const server = new ApolloServer({
    context: async ({ req }) => {
        const auth = (req.headers && req.headers.authorization) || '';
        const token = Buffer.from(auth, 'base64').toString('ascii')
        // TODO find token
        const user = { username: 'userTest', email: 'test@example.com', position: 'Nurse' }
        return ({ user })
    },
    typeDefs,
    resolvers,
    dataSources: () => ({
        listIncidents: db.listIncidents,
        searchPatient: db.searchPatient,
        getIncident: db.getIncident,
        getPatientPriority: db.getPatientPriority,
        getSymptoms: db.getSymptoms,
        finishIncident: db.finishIncident,
        loginStaff: db.loginStaff,
        loginPatient: db.loginPatient,
        createIncident: db.createIncident,
        createPatient: db.createPatient
    })
});

server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});