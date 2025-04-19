import { createFileRoute } from "@tanstack/react-router";
import { Index } from "modules/Index";

export const Route = createFileRoute("/")({
  component: Index,
});
