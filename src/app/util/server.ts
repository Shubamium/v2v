"use server";

import { fetchData } from "../services/db";

export async function GetPasswording() {
  return fetchData<any>(`*[_type == "general" && preset == "main"][0]{
			pw
	}`);
}
