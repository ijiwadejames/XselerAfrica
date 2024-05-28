/** @format */

import { useEffect } from "react";
import DashboardFeeder from "../components/DashboardFeeder";
import SideLayout from "../components/SideLayout";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Spinner } from "../components/Spinner";

const Dashboard = () => {
  const navigate = useNavigate();
  const { user, isLoading } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user]);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <SideLayout>
          <DashboardFeeder />
        </SideLayout>
      )}
    </>
  );
};

export default Dashboard;
