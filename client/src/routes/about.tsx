import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: () => (
    <div>
      <h1>Hello /about page!</h1>
      <Outlet />
    </div>
  ),
});
