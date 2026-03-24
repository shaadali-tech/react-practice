const DashboardLayout = ({ sidebar, main, footer }) => {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* Sidebar */}
      <div style={{ width: "20%", background: "#eee", padding: "10px" }}>
        {sidebar}
      </div>

      {/* Main + Footer */}
      <div style={{ width: "80%", display: "flex", flexDirection: "column" }}>
        {/* Main */}
        <div style={{ flex: 1, padding: "10px" }}>{main}</div>

        {/* Footer */}
        <div style={{ background: "#ddd", padding: "10px" }}>{footer}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
