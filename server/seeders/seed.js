const { People, Projects, AboutPanels } = require('../models');
const peopleSeeds = require('./peopleSeeds.json');
const aboutSeeds = require('./aboutSeeds.json')

async function seedWebsite() {

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
    const panelsExist = await AboutPanels.find()
      if (panelsExist.length == 0) {
        console.log("seeding about panels")
        const panels = await AboutPanels.insertMany(aboutSeeds)
        console.log("new panels on the walls", panels)
      } else {
        console.log("panels already installed")
      }
  } catch (err) {
    console.error("Error seeding panels: ", err)
  }

}

module.exports = seedWebsite;