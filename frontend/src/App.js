/** @format */

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import DashboardScreen from "./screens/DashboardScreen";
import LoginScreen from "./screens/LoginScreen";
import JoinScreen from "./screens/JoinScreen";
import ProfileScreen from "./screens/ProfileScreen";
import DataProvider from "./Provider/ContextAPI";
import TransactionsHistoryScreen from "./screens/TransactionsHistoryScreen";
import ApplicationScreen from "./screens/ApplicationScreen";
import ViewPDFScreen from "./screens/ViewPDFScreen";
import PolicyScreen from "./screens/PolicyScreen";
import AboutScreen from "./screens/AboutScreen";
import ContactScreen from "./screens/ContactScreen";
import PlanScreen from "./screens/PlanScreen";

const App = () => {
  return (
    <DataProvider>
      <Router>
        <div className="bg-light">
          <Layout>
            <Routes>
              <Route index element={<LoginScreen />} />
              <Route path="dashboard" element={<DashboardScreen />} />
              <Route path="join" element={<JoinScreen />} />
              <Route path="profile" element={<ProfileScreen />} />
              <Route path="my-app" element={<ApplicationScreen />} />
              <Route path="el/cv-view" element={<ViewPDFScreen />} />
              <Route path="gst/privacy-policy" element={<PolicyScreen />} />
              <Route path="gst/about-us" element={<AboutScreen />} />
              <Route path="gst/contact-us" element={<ContactScreen />} />
              <Route path="gst/plans" element={<PlanScreen />} />
              <Route
                path="transactions"
                element={<TransactionsHistoryScreen />}
              />
            </Routes>
          </Layout>
        </div>
      </Router>
    </DataProvider>
  );
};

export default App;
