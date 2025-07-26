import type { InferRouterInputs, InferRouterOutputs } from "@orpc/server";
import { hello } from "./hello";

export const router = {
  hello,
};

export type Router = typeof router;
export type RouterInputs = InferRouterInputs<Router>;
export type RouterOutput = InferRouterOutputs<Router>;
