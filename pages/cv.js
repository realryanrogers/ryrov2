import Layout from "../components/layout/Layout";
import styled from "styled-components";
import { MdFileDownload } from "react-icons/md"
import Link from "next/link"

const OuterContainter = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  max-width: 725px;
`

const SectionTitle = styled.h1`
  font-weight: 700;
  font-family: "Kameron";
  margin-top: 0;
  margin-bottom: 0.5rem;
`

const Experience = styled.div`
  h2 {
    font-family: "Kameron";
    font-weight: bold;
    margin: 0;
  }
  .title {
    color: #0b7fab;
  }
  .company {
    color: #595959;
  }
  .date {
    color: #8a8b8b;
    font-family: "Open Sans";
    font-weight: 300;
    font-size: 0.75rem;
  }

  ul {
    font-family: "Open Sans";
    margin-bottom: 1rem;
    margin-top: 0;
  }
`

const Summary = styled.div`
  font-family: "Open Sans";
  border-bottom: solid #8a8b8b 0.1rem;
  margin-top: 0;
  margin-bottom: 0.5rem;
  p {
    margin-top: 0;
    margin-bottom: 0.5rem;
  }
`

const Download = styled.div`
  display: flex;
  justify-content: flex-end;
  font-family: "Open Sans";
  font-weight: bold;
  align-content: "center";
  a {
    color: #0b7fab;
    align-items: "center";
  }
`
const FocusAreas = styled.div`
  display: flex;
  justify-content: space-between;
  padding-right: 1rem;
  ul {
    font-family: "Open Sans";
    font-size: 1rem;
    list-style: none;
    margin: auto;
    padding: 0;
    margin-bottom: 0.5rem;
  }
`

const CV = () => {
  return (
    <Layout>
      <Download>
        <Link href="/downloads/RyanRogers_Resume.pdf">
          <a>
            <MdFileDownload style={{ color: "#0B7FAB" }} />
            PDF
          </a>
        </Link>
      </Download>
      <SectionTitle>Summary</SectionTitle>
      <Summary>
        <p>
          Highly effective advertising operations executive with a proven record of both hands-on
          action and big picture thinking, leading to increased throughput, higher margins, less
          human error, and excellent satisfaction rates for both clients and internal stakeholders.{" "}
        </p>
      </Summary>
      {/* <SectionTitle>Areas Of Focus</SectionTitle>
      <FocusAreas>
        <ul>
          <li>Process Creation and Improvement</li>
          <li>Campaign Management</li>
          <li>Data Driven Analytical Problem Solving</li>
        </ul>
        <ul>
          <li>Team Building, Training, and Support</li>
          <li>Workflow Prioritization and Efficiency</li>
          <li>Something Else</li>
        </ul>
      </FocusAreas> */}

      <SectionTitle>Experience</SectionTitle>
      <Experience>
        <div className="date">AUG 2019 – FEB 2020</div>
        <h2>
          <text className="title">Sr. Director, Operations /</text>{" "}
          <text className="company">Sundae, NYC</text>
        </h2>
        <ul>
          <li>
            Worked alongside CEO to help define the company goals and vision to guide our processes.
          </li>
          <li>
            Led the hiring process by scouting and interviewing for a variety of disciplines through
            the company.
          </li>
          <li>
            Broke down company goals into measurable and accountable actions for individual team
            members.
          </li>
          <li>
            Quickly moved campaign delivery management out of email and into a project management
            solution.
          </li>
        </ul>
      </Experience>
      <Experience>
        <div className="date">MAR 2016 – AUG 2019</div>
        <h2>
          <text className="title">Sr. Director, Ad Operations /</text>{" "}
          <text className="company">Aki Technologies, NYC</text>
        </h2>
        <ul>
          <li>
            Built the department from one person to multiple teams, across several office locations.
          </li>
          <li>
            Developed and deployed efficient processes, allowing us to scale revenue by multiple
            times with minimal increase in headcount.
          </li>
          <li>
            Partnered with dev team to design, test, and release a new in-house ad serving platform.
          </li>
          <li>
            {" "}
            Brought automation into every facet of the campaign lifecycle reducing labor-hours
            needed per campaign, as well as trafficking error rates.{" "}
          </li>
          <li>
            Led initiatives on several new ad serving ventures, including new technology and vendor
            implementations.
          </li>
        </ul>
      </Experience>
      <Experience>
        <div className="date">NOV 2014 – MAR 2016</div>
        <h2>
          <text className="title">Manager, Technical Ad Operations /</text>{" "}
          <text className="company">Adtheorent, NYC</text>
        </h2>
        <ul>
          <li>
            Provided operations and ad serving guidance with team and clients from presale to wrap
            up.
          </li>
          <li>
            Created and maintained documentation for processes and technology, making for seamless
            employee onboarding.
          </li>
          <li>
            Developed and deployed processes between operations departments to streamline campaign
            lifecycles.
          </li>
          <li>
            Built a third-party system to ingest campaign data and automate Salesforce and Jira
            processes.
          </li>
        </ul>
      </Experience>
      <Experience>
        <div className="date">MAR 2013 – NOV 2014</div>
        <h2>
          <text className="title">Ad Solutions Architect /</text>{" "}
          <text className="company">Songza - Google, NYC</text>
        </h2>
        <ul>
          <li>
            Spearheaded the company’s initial advertising solution from inception to completion
          </li>
          <li>
            Oversaw all advertising projects, including integrations with new partners and ad
            serving technologies.
          </li>
          <li>
            Worked directly with clients and internal sales teams to ensure the best possible
            campaign strategies.
          </li>
          <li>
            Stayed vigilant for new and interesting ways for our advertisers to reach their audience
            on our platform.
          </li>
          <li>Saw company through acquisition, while maintaining my role.</li>
        </ul>
      </Experience>
      <Experience>
        <div className="date">JAN 2011 – MAR 2013</div>
        <h2>
          <text className="title">Technical Account Manager /</text>{" "}
          <text className="company">Mocean Mobile, NYC</text>
        </h2>
      </Experience>
    </Layout>
  )
}

export default CV