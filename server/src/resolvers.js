module.exports = {
    Query: {
        listIncidents: async (_, __, { dataSources }) =>
            dataSources.listIncidents(),
        getIncident: async (_, { id }, { dataSources }) =>
            dataSources.getIncident(id),
        searchPatient: async (_, { ppsNumber, dob }, { dataSources }) =>
            dataSources.searchPatient(ppsNumber, dob),
        getPatientPriority: async (_, { ppsNumber, dob }, { dataSources }) =>
            dataSources.getPatientPriority(ppsNumber, dob),
        getSymptoms: async (_, args, { dataSources }) =>
            dataSources.getSymptoms()
    },
    Mutation: {
        loginStaff: async (_, { username, password }, { dataSources }) => {
            const user =
                await dataSources.loginStaff(username, password)
            if (user) return user.token;
        },
        loginPatient: async (_, { ppsNumber, dob }, { dataSources }) => {
            const user =
                await dataSources.loginPatient(ppsNumber, dob)
            if (user) return user.token;
        },
        createIncident: async (_, { patientId, priority, symptoms }, { dataSources }) =>
            dataSources.createIncident(patientId, priority, symptoms),
        createPatient: async (_, { ppsNumber, dob, firstName, lastName }, { dataSources }) =>
            dataSources.createPatient(ppsNumber, dob, firstName, lastName),
    },
    // TODO it fails when starting the server !
    // TODO {success, message, data}? Return IncidentUpdateResponse?
    // Incident: {
    //     finishIncident: async (incident, _, { dataSources }) => 
    //         dataSources.finishIncident(incident.id)
    // }
};