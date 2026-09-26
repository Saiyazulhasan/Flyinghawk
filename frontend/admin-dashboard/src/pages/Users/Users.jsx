import "./Users.css";

export default function Users() {
  return (
    <div className="simple-page">
      <h1>User Management</h1>
      <p>Manage administrators, workers and control-room users.</p>

      <div className="page-card">

        <div className="user-row">
          <strong>Admin</strong>
          <span>Administrator</span>
          <b>Active</b>
        </div>

        <div className="user-row">
          <strong>Ravi Kumar</strong>
          <span>Worker</span>
          <b>Active</b>
        </div>

        <div className="user-row">
          <strong>Control Room</strong>
          <span>Operator</span>
          <b>Active</b>
        </div>

      </div>
    </div>
  );
}