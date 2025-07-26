import { useQuery } from "@tanstack/vue-query";

export function useHello() {
  return useQuery(useOrpc().hello.queryOptions({ input: { name: "World" } }));
}
