import { createFileRoute } from "@tanstack/react-router";
import { Index } from "modules/product/Index";

export const Route = createFileRoute("/product/$id")({
  component: Index,
});
