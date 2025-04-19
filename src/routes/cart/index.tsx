import { createFileRoute } from "@tanstack/react-router";
import { Index } from "modules/cart/Index";

export const Route = createFileRoute("/cart/")({
  component: Index,
});
