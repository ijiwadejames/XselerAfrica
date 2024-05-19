/** @format */

import { useEffect } from "react";
import DashboardFeeder from "../components/DashboardFeeder";
import SideLayout from "../components/SideLayout";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user]);

  return (
    <SideLayout>
      <DashboardFeeder />
    </SideLayout>
  );
};

export default Dashboard;
