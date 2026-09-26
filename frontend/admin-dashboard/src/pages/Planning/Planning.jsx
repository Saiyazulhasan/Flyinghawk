import "./Planning.css";
import {
  ClipboardList,
  ShieldCheck,
  CalendarDays,
  FileCheck2,
  AlertTriangle,
  CheckCircle2,
  Clock3,
  ChevronRight,
} from "lucide-react";

export default function Planning() {
  return (
    <div className="planning-page">

      {/* HEADER */}
      <div className="planning-page-header">
        <div>
          <h1>Planning & Regulation</h1>
          <p>Manage mine planning, inspections, regulations and SOPs.</p>
        </div>

        <button className="planning-primary-btn">
          <ClipboardList size={15} />
          Create Plan
        </button>
      </div>


      {/* SUMMARY CARDS */}
      <div className="planning-summary-grid">

        <div className="planning-summary-card">
          <div className="planning-summary-icon blue">
            <ClipboardList size={18} />
          </div>

          <div>
            <span>Active Plans</span>
            <strong>08</strong>
          </div>
        </div>


        <div className="planning-summary-card">
          <div className="planning-summary-icon green">
            <ShieldCheck size={18} />
          </div>

          <div>
            <span>Compliance</span>
            <strong>96%</strong>
          </div>
        </div>


        <div className="planning-summary-card">
          <div className="planning-summary-icon orange">
            <CalendarDays size={18} />
          </div>

          <div>
            <span>Upcoming Inspections</span>
            <strong>05</strong>
          </div>
        </div>


        <div className="planning-summary-card">
          <div className="planning-summary-icon red">
            <AlertTriangle size={18} />
          </div>

          <div>
            <span>Pending Actions</span>
            <strong>03</strong>
          </div>
        </div>

      </div>


      {/* MAIN GRID */}
      <div className="planning-main-grid">

        {/* ACTIVE PLANS */}
        <div className="planning-panel">

          <div className="planning-panel-header">
            <div>
              <h2>Active Mine Plans</h2>
              <p>Current operational planning</p>
            </div>

            <button className="planning-view-btn">
              View All
              <ChevronRight size={14} />
            </button>
          </div>


          <div className="plan-list">

            <div className="plan-row">
              <div className="plan-icon">
                <ClipboardList size={16} />
              </div>

              <div className="plan-info">
                <strong>Panel B-07 Operations</strong>
                <span>Production & safety monitoring</span>
              </div>

              <div className="plan-status active">
                Active
              </div>
            </div>


            <div className="plan-row">
              <div className="plan-icon">
                <ClipboardList size={16} />
              </div>

              <div className="plan-info">
                <strong>Panel B-06 Inspection</strong>
                <span>Structural inspection plan</span>
              </div>

              <div className="plan-status active">
                Active
              </div>
            </div>


            <div className="plan-row">
              <div className="plan-icon">
                <ClipboardList size={16} />
              </div>

              <div className="plan-info">
                <strong>Ventilation Assessment</strong>
                <span>Airflow & gas monitoring</span>
              </div>

              <div className="plan-status review">
                Review
              </div>
            </div>


            <div className="plan-row">
              <div className="plan-icon">
                <ClipboardList size={16} />
              </div>

              <div className="plan-info">
                <strong>Emergency Drill Plan</strong>
                <span>Emergency response preparation</span>
              </div>

              <div className="plan-status scheduled">
                Scheduled
              </div>
            </div>

          </div>

        </div>


        {/* COMPLIANCE */}
        <div className="planning-panel">

          <div className="planning-panel-header">
            <div>
              <h2>Regulation Compliance</h2>
              <p>Safety & operational requirements</p>
            </div>

            <ShieldCheck size={20} className="compliance-icon" />
          </div>


          <div className="compliance-score">
            <div className="compliance-circle">
              <strong>96%</strong>
              <span>Compliant</span>
            </div>

            <div className="compliance-details">

              <div>
                <span>Safety Regulations</span>
                <strong>98%</strong>
              </div>

              <div>
                <span>Inspection Records</span>
                <strong>95%</strong>
              </div>

              <div>
                <span>SOP Compliance</span>
                <strong>94%</strong>
              </div>

            </div>
          </div>


          <div className="compliance-progress">
            <div style={{ width: "96%" }}></div>
          </div>

          <div className="compliance-footer">
            <CheckCircle2 size={14} />
            All critical regulations currently satisfied
          </div>

        </div>

      </div>


      {/* LOWER SECTION */}
      <div className="planning-lower-grid">

        {/* INSPECTIONS */}
        <div className="planning-panel">

          <div className="planning-panel-header">
            <div>
              <h2>Upcoming Inspections</h2>
              <p>Scheduled site activities</p>
            </div>

            <CalendarDays size={19} className="header-muted-icon" />
          </div>


          <div className="inspection-list">

            <div className="inspection-row">
              <div className="inspection-date">
                <strong>28</strong>
                <span>SEP</span>
              </div>

              <div className="inspection-info">
                <strong>Panel B-07 Safety Inspection</strong>
                <span>09:30 AM · Safety Team</span>
              </div>

              <Clock3 size={15} />
            </div>


            <div className="inspection-row">
              <div className="inspection-date">
                <strong>30</strong>
                <span>SEP</span>
              </div>

              <div className="inspection-info">
                <strong>Ventilation System Check</strong>
                <span>11:00 AM · Operations Team</span>
              </div>

              <Clock3 size={15} />
            </div>


            <div className="inspection-row">
              <div className="inspection-date">
                <strong>02</strong>
                <span>OCT</span>
              </div>

              <div className="inspection-info">
                <strong>Sensor Network Audit</strong>
                <span>02:00 PM · Technical Team</span>
              </div>

              <Clock3 size={15} />
            </div>

          </div>

        </div>


        {/* DOCUMENTS */}
        <div className="planning-panel">

          <div className="planning-panel-header">
            <div>
              <h2>Regulations & SOPs</h2>
              <p>Important operational documents</p>
            </div>

            <FileCheck2 size={19} className="header-muted-icon" />
          </div>


          <div className="document-list">

            <div className="document-row">
              <div className="document-icon">
                <FileCheck2 size={15} />
              </div>

              <div>
                <strong>Mine Safety SOP</strong>
                <span>Updated 2 days ago</span>
              </div>

              <ChevronRight size={14} />
            </div>


            <div className="document-row">
              <div className="document-icon">
                <FileCheck2 size={15} />
              </div>

              <div>
                <strong>Emergency Response Plan</strong>
                <span>Updated 5 days ago</span>
              </div>

              <ChevronRight size={14} />
            </div>


            <div className="document-row">
              <div className="document-icon">
                <FileCheck2 size={15} />
              </div>

              <div>
                <strong>Sensor Maintenance SOP</strong>
                <span>Updated 1 week ago</span>
              </div>

              <ChevronRight size={14} />
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}