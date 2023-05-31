import AdminLayout from "../src/Layout/AdminLayout";
import Layout from "./Layout/Layout";

export default function App() {
  // Retrieve user details from local storage
  const user = JSON.parse(localStorage.getItem("user"));

  // Check if the user's email is "kanjo@gmail.com"
  const isKanjoUser = user && user.details && user.details.email === "kanjo@gmail.com";

  return (
    <div>
      {isKanjoUser ? (
        <AdminLayout />
      ) : (
        <Layout />
      )}
    </div>
  );
}