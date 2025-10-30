import { useQuery } from "@tanstack/react-query";
import { getResultReport } from "../lib/api/emotions";

export function fetchReport() {
  return useQuery({
    queryKey: ["report"],
    queryFn: getResultReport,
    retry: 5,
    retryDelay: (failureCount) => Math.min(1000 * 2 ** failureCount, 10000),
    staleTime: 5 * 60 * 1000,
  });
}
