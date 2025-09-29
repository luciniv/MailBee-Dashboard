import type { JSX } from "react";
import Dashboard from "./pages/dashboard/dashboard";
import Sidebar from "./components/sidebar";

function App(): JSX.Element {
  return (
    <div className="flex w-full h-full">
      <div className="flex flex-row w-full h-full bg-neutral-600 m-4 rounded-xl">
        <div className="flex flex-col text-center w-1/6 gap-10 bg-neutral-500 rounded-l-xl">
          <h1 className="font-extrabold text-2xl pt-8">MailBee Analytics</h1>
          <Sidebar
            items={[
              { id: "dashboard", label: "Dashboard", href: "#" },
              { id: "server", label: "Server Stats", href: "#" },
              { id: "moderator", label: "Moderator Stats", href: "#" },
              { id: "leaderboard", label: "Leaderboard", href: "#" },
              { id: "export", label: "Export", href: "#" },
            ]}
            selected={"dashboard"}
          />
        </div>
        <div
          className="grid w-5/6 gap-2"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          }}
        >
          <Dashboard />
        </div>
      </div>
    </div>
  );
}

export default App;
