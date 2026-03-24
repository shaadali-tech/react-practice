import DashboardLayout from "./Layouts/DashboardLayout";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <DashboardLayout
      sidebar={<Sidebar />}
      main={<Main />}
      footer={<Footer />}
    />
  );
}

export default App;
