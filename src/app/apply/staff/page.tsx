import "./staff.scss";
import { fetchData } from "../../services/db";

type StaffApplySettings = {
  staffApplyForm?: string;
  staffHiringRoles?: string[];
} | null;

export default async function Staff() {
  const settings = await fetchData<StaffApplySettings>(`
    *[_type == "general" && preset == "main"][0]{
      staffApplyForm,
      staffHiringRoles
    }
  `);
  const hiringRoles = settings?.staffHiringRoles?.length
    ? settings.staffHiringRoles
    : ["Artists", "Editors", "VOD Scrubbers"];

  return (
    <main id="page_staff">
      <section className="staff-hero" aria-labelledby="staff-title">
        <div className="staff-art" aria-hidden="true">
          <div className="staff-art-orb" />
          <div className="staff-art-img">
            <img src="/g/char2.png" alt="" />
          </div>
        </div>

        <div className="staff-copy">
          <h1 id="staff-title">
            <span className="staff-diamond" aria-hidden="true" />
            <span className="text">Staff</span>{" "}
            <span className="outlined">Application</span>
          </h1>

          <p className="staff-intro">We are currently interested in:</p>
          <ul className="staff-roles" aria-label="Open staff roles">
            {hiringRoles.map((role, index) => (
              <li key={`${role}-${index}`}>{role}</li>
            ))}
          </ul>

          <p className="staff-description">
            If you think you have a skill you can contribute to the team, we’d
            love to hear about it!
          </p>
          <p className="staff-form-note">More info on form:</p>
          <a
            className="staff-apply"
            href={settings?.staffApplyForm || "/contacts"}
            target={settings?.staffApplyForm ? "_blank" : undefined}
            rel={settings?.staffApplyForm ? "noreferrer" : undefined}
          >
            Apply
          </a>
        </div>
      </section>
    </main>
  );
}
