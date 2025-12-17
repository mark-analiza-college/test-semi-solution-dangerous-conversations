import { BASE_URL } from "./config.js";
import fs from "fs";

function writePeopleToJson(path, jsonData) {
  fs.writeFile(path, jsonData, "utf8", (error) => {
    if (error) {
      console.error("Error writing file:", error);
      return;
    }

    console.log("JSON file created successfully!");
  });
}

export async function getPeopleList() {
  const res = await fetch(`${BASE_URL}/people`);
  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }
  const people = await res.json();
  writePeopleToJson("data/people.json", JSON.stringify(people));
  console.log(people);
}

export function getTranscriptions() {
  
}
export function searchPeopleByName() {}
export function searchPeopleByAge() {}
export function findDangerousPeopleAction() {}
