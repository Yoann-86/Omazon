import { createFileRoute } from "@tanstack/react-router";
import { Index } from "modules/category/Index";

export const Route = createFileRoute("/category/$slug")({
  component: Index,
});
