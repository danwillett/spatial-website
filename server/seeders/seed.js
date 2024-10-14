const { People, Projects, InfoPanels } = require('../models');
const peopleSeeds = require('./peopleSeeds.json');
const infoSeeds = require('./infoSeeds.json');
const projectSeeds = require('./projectSeeds.json');

async function seedWebsite() {

  // if in test-production, delete all entries first and reseed every time
  if (process.env.NODE_ENV === 'production'){
    try {
      const deletePeople = await People.collection.drop()
      const deleteProjects = await Projects.collection.drop()
      const deletePanels = await InfoPanels.collection.drop()
      console.log("deleted all people and infopanel seeds")
    } catch (err) {
      console.error(err)
    }
  }

  try {
    const peopleExists = await People.find() 
      if (peopleExists.length == 0) {
        console.log("seeding people")
        const people = await People.insertMany(peopleSeeds)
        console.log("new people in the building", people)
      } else {
        console.log("people in the building")
      } 
  } catch (err) {
    console.error("Error seeding people: ", err)
  }

  try {
    const projectsExists = await Projects.find()
      if (projectsExists.length == 0) {
        console.log("seeding projects")
        const projects = await Projects.insertMany(projectSeeds)
        console.log("Remodel! New projects coming in")
      } else {
        console.log("We got plenty of projects to do")
      }
  } catch (err) {
    console.error("Error seeding projects", err)
  }

  try {
    const panelsExist = await InfoPanels.find()
      if (panelsExist.length == 0) {
        console.log("seeding info panels")
        const panels = await InfoPanels.insertMany(infoSeeds)
        console.log("new panels on the walls", panels)
      } else {
        console.log("panels already installed")
      }
  } catch (err) {
    console.error("Error seeding panels: ", err)
  }

}

module.exports = seedWebsite;