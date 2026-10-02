import { createFileRoute, redirect } from "@tanstack/react-router";

// Bansuris is now part of the unified Bansuri page.
export const Route = createFileRoute("/bansuris")({
  beforeLoad: () => {
    throw redirect({ to: "/learn-bansuri", hash: "bansuris", statusCode: 301 });
  },
});
