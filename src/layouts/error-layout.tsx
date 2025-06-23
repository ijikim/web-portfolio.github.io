import { Outlet } from "react-router-dom";

export default function ErrorLayout() {
  return (
    <div className="relative">
      <main>
        <Outlet />
      </main>
    </div>
  );
}
