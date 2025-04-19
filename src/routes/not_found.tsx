import { createFileRoute } from "@tanstack/react-router";
import { Index } from "modules/not_found/Index";

export const Route = createFileRoute("/not_found")({
  component: Index,
});
