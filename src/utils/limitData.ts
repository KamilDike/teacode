import { Config } from "@/Config";

export function limitData(data, page) {
  return data.slice(0, Config.pageLimit * page);
}
