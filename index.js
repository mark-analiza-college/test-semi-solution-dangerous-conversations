#!/usr/bin/env node

import readlineSync from "readline-sync";
import { BASE_URL } from "./utils/config.js";
import {
  getPeopleList,
  getTranscriptions,
  searchPeopleByName,
  searchPeopleByAge,
  findDangerousPeopleAction,
} from "./utils/actions.js";

async function mainMenu() {
  console.log("=== Intelligence Agents Menu ===");
  console.log("Base URL:", BASE_URL);

  let exit = false;
  while (!exit) {
    console.log("\nChoose an option:");
    console.log("1. Get People List");
    console.log("2. Get Call Records / Transcriptions");
    console.log("3. Search People by Name");
    console.log("4. Search People by Age");
    console.log("5. Find Dangerous People");
    console.log("0. Exit");

    const choice = readlineSync.question("Enter choice: ").trim();

    switch (choice) {
      case "1":
        await getPeopleList();
        break;
      case "2":
        await getTranscriptions();
        break;
      case "3": {
        const name = readlineSync.question("Enter name to search: ");
        await searchPeopleByName(name);
        break;
      }
      case "4": {
        const age = readlineSync.question("Enter age to search: ");
        await searchPeopleByAge(age);
        break;
      }
      case "5":
        await findDangerousPeopleAction();
        break;
      case "0":
        exit = true;
        break;
      default:
        console.log("Invalid choice, please try again.");
    }
  }

  console.log("Goodbye.");
}

try {
  await mainMenu();
} catch (error) {
  console.error("MAIN MANU COUGHT AN ERROR:", error);
}
