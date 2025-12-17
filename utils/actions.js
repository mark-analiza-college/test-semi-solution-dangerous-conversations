import { BASE_URL } from "./config.js";

export async function getPeopleList() {
  
  const res = await fetch(`${BASE_URL}/people`);
  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }
  const people = await res.json();
  console.log(people)
}



export function getTranscriptions() {}
export function searchPeopleByName() {}
export function searchPeopleByAge() {}
export function findDangerousPeopleAction() {}
