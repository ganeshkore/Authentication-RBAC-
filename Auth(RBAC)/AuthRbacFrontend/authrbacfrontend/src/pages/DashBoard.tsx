import { useEffect, useState } from "react";
import { getAdminContent, getPublicContent, getUserContent } from "../api/dashBoardApi";

import {
  FaUser,
  FaUserShield,
  FaGlobe,
} from "react-icons/fa";
import RoleCard from "./RoleCard";

function Dashboard() {
  const [role, setRole] = useState("UNKNOWN");

  const [publicContent, setPublicContent] = useState("");

  const [userContent, setUserContent] = useState("");
  const [adminContent, setAdminContent] = useState("");

  const [userError, setUserError] = useState("");
  const [adminError, setAdminError] = useState("");

  const [publicOpen, setPublicOpen] = useState(false);
  const [userOpen, setUserOpen] = useState(false);
  const [adminOpen, setAdminOpen] = useState(false);

  useEffect(() => {
    getPublicContent()
      .then(setPublicContent)
      .catch(console.error);

    getAdminContent()
      .then(() => setRole("ADMIN"))
      .catch(() => {
        getUserContent()
          .then(() => setRole("USER"))
          .catch(() => {});
      });
  }, []);

  const handlePublic = () => {
    setPublicOpen(true);
  };

  const handleUser = async () => {
    try {
      const data = await getUserContent();

      setUserContent(data);
      setUserError("");
      setUserOpen(true);

      if (role === "UNKNOWN") {
        setRole("USER");
      }
    } catch {
      setUserContent("");
      setUserError(
        "You do not have permission to access user resources."
      );
      setUserOpen(true);
    }
  };

  const handleAdmin = async () => {
    try {
      const data = await getAdminContent();

      setAdminContent(data);
      setAdminError("");
      setAdminOpen(true);

      setRole("ADMIN");
    } catch {
      setAdminContent("");
      setAdminError(
        "You do not have permission to access administrative resources."
      );
      setAdminOpen(true);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800">

     

      <nav className="backdrop-blur-xl bg-white/10 border-b border-white/20">

        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

          <div>
            <h1 className="text-3xl font-bold text-white">
              RBAC Portal
            </h1>

            <p className="text-gray-300">
              JWT Authentication System
            </p>
          </div>

          <div className="flex items-center gap-4">

            <span
              className="
                bg-white/20
                text-white
                px-4
                py-2
                rounded-full
                font-medium
              "
            >
              Role : {role}
            </span>

            <button
              onClick={logout}
              className="
                bg-red-500
                hover:bg-red-600
                text-white
                px-5
                py-2
                rounded-xl
                transition-all
              "
            >
              Logout
            </button>

          </div>
        </div>
      </nav>

   

      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="text-center mb-12">

          <h1 className="text-5xl font-bold text-white mb-4">
            Welcome Back 
          </h1>

          <p className="text-gray-300 text-lg">
            Explore resources based on your assigned role.
          </p>

        </div>

  

        <div className="grid md:grid-cols-3 gap-8">

          <RoleCard
            title="Public Section"
            icon={<FaGlobe className="text-white" />}
            badge="Everyone"
            buttonText="View Public Content"
            onClick={handlePublic}
            open={publicOpen}
            content={publicContent}
            error=""
            description="Public resources are accessible to everyone regardless of authentication."
            onClose={() => setPublicOpen(false)}
          />

          <RoleCard
            title="User Section"
            icon={<FaUser className="text-cyan-300" />}
            badge="USER"
            buttonText="Access User Content"
            onClick={handleUser}
            open={userOpen}
            content={userContent}
            error={userError}
            description="User resources are available only to authenticated users."
            onClose={() => {
              setUserOpen(false);
              setUserContent("");
              setUserError("");
            }}
          />

          <RoleCard
            title="Admin Section"
            icon={<FaUserShield className="text-purple-300" />}
            badge="ADMIN"
            buttonText="Access Admin Content"
            onClick={handleAdmin}
            open={adminOpen}
            content={adminContent}
            error={adminError}
            description="Administrative resources require elevated privileges."
            onClose={() => {
              setAdminOpen(false);
              setAdminContent("");
              setAdminError("");
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;