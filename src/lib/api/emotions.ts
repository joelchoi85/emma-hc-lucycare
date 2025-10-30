"use server";

import type { ReportData } from "../../types/report";

export async function getResultReport(): Promise<ReportData | Error> {
  try {
    const response = await fetch(
      "https://core.lucycare.co.kr/api/pre-assignment/session-result-report"
    );
    if (!response.ok) {
      throw new Error("Failed to Fetch");
    }
    return response.json();
  } catch (error) {
    console.log("data fetch failed");
    throw error;
  }
}
