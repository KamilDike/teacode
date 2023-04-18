import { paramSort } from "@/utils/paramSort";
import { Config } from "@/Config";

export async function recruitmentChallengeAPI() {
  try {
    const responsePromise = await fetch(Config.allRecruitmentChallenge);
    const data = await responsePromise.json();
    return data.sort((a, b) => paramSort(a, b, "last_name"));
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch recruitment challenge data.");
  }
}
