import "./Users.css";
import {
  Users as UsersIcon,
  ShieldCheck,
  HardHat,
  Headset,
  UserPlus,
  MoreHorizontal,
  CheckCircle2,
  Clock3,
} from "lucide-react";

export default function Users() {
  return (
    <div className="users-page">

      {/* HEADER */}
      <div className="users-header">
        <div>
          <h1>User Management</h1>
          <p>Manage administrators, workers and control-room users.</p>
        </div>

        <button className="add-user-btn">
          <UserPlus size={15} />
          Add User
        </button>
      </div>


      {/* SUMMARY */}
      <div className="users-summary">

        <div className="user-summary-card">
          <div className="user-summary-icon blue">
            <UsersIcon size={18} />
          </div>
          <div>
            <span>Total Users</span>
            <strong>24</strong>
            <small>Registered users</small>
          </div>
        </div>

        <div className="user-summary-card">
          <div className="user-summary-icon green">
            <CheckCircle2 size={18} />
          </div>
          <div>
            <span>Active Users</span>
            <strong>21</strong>
            <small>Currently active</small>
          </div>
        </div>

        <div className="user-summary-card">
          <div className="user-summary-icon purple">
            <ShieldCheck size={18} />
          </div>
          <div>
            <span>Administrators</span>
            <strong>03</strong>
            <small>Full access</small>
          </div>
        </div>

        <div className="user-summary-card">
          <div className="user-summary-icon orange">
            <Clock3 size={18} />
          </div>
          <div>
            <span>Pending Access</span>
            <strong>02</strong>
            <small>Awaiting approval</small>
          </div>
        </div>

      </div>


      {/* USERS TABLE */}
      <div className="users-panel">

        <div className="users-panel-header">
          <div>
            <h2>System Users</h2>
            <p>Users with access to the FLYING HAWK platform</p>
          </div>

          <button className="user-filter-btn">
            All Users
          </button>
        </div>


        <div className="users-table">

          {/* TABLE HEADER */}
          <div className="user-table-head">
            <span>User</span>
            <span>Role</span>
            <span>Department</span>
            <span>Last Active</span>
            <span>Status</span>
            <span></span>
          </div>


          {/* ADMIN */}
          <div className="user-table-row">

            <div className="user-profile">
              <div className="user-avatar admin">
                <ShieldCheck size={16} />
              </div>

              <div>
                <strong>Admin</strong>
                <span>admin@flyinghawk.in</span>
              </div>
            </div>

            <div className="role-badge admin-role">
              Administrator
            </div>

            <span>Operations</span>

            <span>Just now</span>

            <div className="status-badge active">
              <span></span>
              Active
            </div>

            <button className="more-btn">
              <MoreHorizontal size={16} />
            </button>

          </div>


          {/* RAVI */}
          <div className="user-table-row">

            <div className="user-profile">
              <div className="user-avatar worker">
                <HardHat size={16} />
              </div>

              <div>
                <strong>Ravi Kumar</strong>
                <span>ravi.kumar@flyinghawk.in</span>
              </div>
            </div>

            <div className="role-badge worker-role">
              Worker
            </div>

            <span>Mining Operations</span>

            <span>4 min ago</span>

            <div className="status-badge active">
              <span></span>
              Active
            </div>

            <button className="more-btn">
              <MoreHorizontal size={16} />
            </button>

          </div>


          {/* CONTROL ROOM */}
          <div className="user-table-row">

            <div className="user-profile">
              <div className="user-avatar operator">
                <Headset size={16} />
              </div>

              <div>
                <strong>Control Room</strong>
                <span>control@flyinghawk.in</span>
              </div>
            </div>

            <div className="role-badge operator-role">
              Operator
            </div>

            <span>Control Room</span>

            <span>8 min ago</span>

            <div className="status-badge active">
              <span></span>
              Active
            </div>

            <button className="more-btn">
              <MoreHorizontal size={16} />
            </button>

          </div>


          {/* SUPERVISOR */}
          <div className="user-table-row">

            <div className="user-profile">
              <div className="user-avatar supervisor">
                <UsersIcon size={16} />
              </div>

              <div>
                <strong>Site Supervisor</strong>
                <span>supervisor@flyinghawk.in</span>
              </div>
            </div>

            <div className="role-badge supervisor-role">
              Supervisor
            </div>

            <span>Safety</span>

            <span>23 min ago</span>

            <div className="status-badge active">
              <span></span>
              Active
            </div>

            <button className="more-btn">
              <MoreHorizontal size={16} />
            </button>

          </div>


          {/* INSPECTOR */}
          <div className="user-table-row">

            <div className="user-profile">
              <div className="user-avatar inspector">
                <HardHat size={16} />
              </div>

              <div>
                <strong>Safety Inspector</strong>
                <span>inspector@flyinghawk.in</span>
              </div>
            </div>

            <div className="role-badge inspector-role">
              Inspector
            </div>

            <span>Safety</span>

            <span>1 hr ago</span>

            <div className="status-badge inactive">
              <span></span>
              Offline
            </div>

            <button className="more-btn">
              <MoreHorizontal size={16} />
            </button>

          </div>

        </div>

      </div>


      {/* ACCESS INFO */}
      <div className="users-info-grid">

        <div className="access-card">
          <div className="access-icon admin-access">
            <ShieldCheck size={18} />
          </div>

          <div>
            <strong>Administrator Access</strong>
            <span>Full system control, configuration and user management.</span>
          </div>
        </div>


        <div className="access-card">
          <div className="access-icon worker-access">
            <HardHat size={18} />
          </div>

          <div>
            <strong>Worker Access</strong>
            <span>Safety alerts, assigned tasks and field activity.</span>
          </div>
        </div>


        <div className="access-card">
          <div className="access-icon operator-access">
            <Headset size={18} />
          </div>

          <div>
            <strong>Operator Access</strong>
            <span>Live monitoring, alerts and operational controls.</span>
          </div>
        </div>

      </div>

    </div>
  );
}