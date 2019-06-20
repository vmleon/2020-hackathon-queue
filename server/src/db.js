const oracledb = require('oracledb')
const config = require('./config')
const faker = require('faker')
const uuidv4 = require('uuid/v4');

/*
class Database {
    constructor() {
        let connection;
        try {
            connection = await oracledb.getConnection(config.dbconfig)
        } catch(err) {
            console.error(err)
        } finally {
            // connection && await connection.close()
        }
    }

    checkConnection() {
        try {
            let result = await connection.execute(`
                SELECT 1
                FROM DUAL
            `)
            return true;
        } catch (error) {
            console.error(err)
            return false;
        }
    }
}
*/

const defaultPatient = (ppsNumber, dob) => ({
    id: faker.random.number(),
    ppsNumber: ppsNumber || faker.lorem.word(),
    dob: dob || faker.date.past(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    phoneNumber: faker.phone.phoneNumber(),
    address: `${faker.random.number} ${faker.address.streetName()} ${faker.address.city()}`,
    incidents: [{
        id: 1,
        patient: 1,
        priority: 'High',
        symptoms: [defaultSymptom(), defaultSymptom()],
        description: faker.lorem.text(),
        checkinTime: Date.now().toString()
    }]
})

const defaultIncident = () => ({
    id: faker.random.number(),
    patient: defaultPatient(),
    priority: 'High',
    symptoms: [defaultSymptom(), defaultSymptom()],
    description: faker.lorem.text(),
    checkinTime: Date.now().toString()
})

const defaultSymptom = () => ({
    id: faker.random.number(),
    name: faker.lorem.words(),
    description: faker.lorem.text()
})

async function listIncidents() {
    console.log('Calling listIncidents')
    const incidents = [defaultIncident(), defaultIncident()];
    return new Promise(resolve => setTimeout(() => resolve(incidents), 50))
}

async function searchPatient(ppsNumber, dob) {
    console.log('Calling searchPatient')
    const patient = defaultPatient(ppsNumber, dob)
    return new Promise(resolve => setTimeout(() => resolve(patient), 50))
}

async function getPatientPriority(ppsNumber, dob) {
    console.log('Calling getPatientPriority')
    const patientPriority = {
        queuePosition: 3,
        estimatedTime: 98
    }
    return new Promise(resolve => setTimeout(() => resolve(patientPriority), 50))
}

async function getIncident(id) {
    console.log('Calling getIncident')
    const fetchedIncident = { ...defaultIncident(), id };
    return new Promise(resolve => setTimeout(() => resolve(fetchedIncident), 50))
}

async function getSymptoms() {
    console.log('Calling getSymptoms')
    const symptoms = [defaultSymptom(), defaultSymptom(), defaultSymptom()];
    return new Promise(resolve => setTimeout(() => resolve(symptoms), 50))
}

async function finishIncident(id) {
    console.log('Calling finishIncident')
    const finishedIncidnet = { ...defaultIncident(), id, checkoutTime: Date.now() };
    return new Promise(resolve => setTimeout(() => resolve(finishedIncidnet), 50))
}

async function loginStaff(username, password) {
    console.log('Calling loginStaff')
    const user = { username, token: uuidv4() }
    return new Promise(resolve => setTimeout(() => resolve(user), 50))
}

async function loginPatient(ppsNumber, dob) {
    console.log('Calling loginPatient')
    const user = { username, token: uuidv4() }
    return new Promise(resolve => setTimeout(() => resolve(user), 50))
}

async function createIncident(patientId, priority, symptoms) {
    console.log('Calling createIncident')
    const symptomsObjs = symptoms.map(s => ({ ...defaultSymptom(), s }));
    const incident = { ...defaultIncident(), id: patientId, priority, symptomsObjs }
    return new Promise(resolve => setTimeout(() => resolve(incident), 50))
}

async function createPatient(ppsNumber, dob, firstName, lastName) {
    console.log('Calling createPatient')
    const patient = { ...defaultPatient(), ppsNumber, dob, firstName, lastName }
    return new Promise(resolve => setTimeout(() => resolve(patient), 50))
}

module.exports = {
    listIncidents,
    searchPatient,
    getIncident,
    getPatientPriority,
    getSymptoms,
    finishIncident,
    loginStaff,
    loginPatient,
    createIncident,
    createPatient
}