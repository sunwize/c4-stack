import { createORPCClient } from "@orpc/client";
import { RPCLink } from "@orpc/client/fetch";
import type { RouterClient } from "@orpc/server";
import { createORPCVueQueryUtils } from "@orpc/vue-query";

import type { Router } from "~~/server/orpc/router";

export default defineNuxtPlugin(() => {
  const event = useRequestEvent();

  const link = new RPCLink({
    url: "http://localhost:3000/api/orpc",
    headers: () => Object.fromEntries(event?.headers ?? []),
  });

  const orpc: RouterClient<Router> = createORPCClient(link);
  const client = createORPCVueQueryUtils(orpc);

  return {
    provide: {
      orpc: client,
    },
  };
});
