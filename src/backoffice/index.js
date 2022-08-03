import {
  faBars,
  faCog,
  faHomeAlt,
  faPeopleGroup,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useMemo, useState } from "react";
import styles from "./backoffice.module.css";
import cx from "classnames";
import Table from "./table";
import { Link } from "react-router-dom";

const data = [
  {
    activated_at: null,
    agent_status: "รออัปโหลด/แก้ไขเอกสาร",
    area: null,
    branch_name: null,
    firstName: "ratcha",
    id: 944,
    interviewer_id: null,
    lastName: "agent47",
    next_recruitmented_at: null,
    recruited_at: "2022-07-12T20:09:25+07:00",
    recruitment: "Broker",
    responsible_person_id: null,
    status: "ทดลองใช้งาน",
    updated_at: "2022-08-03T16:48:31+07:00",
  },
  {
    activated_at: null,
    agent_status: "รออัปโหลด/แก้ไขเอกสาร",
    area: null,
    branch_name: null,
    firstName: "bboossii",
    id: 1001,
    interviewer_id: null,
    lastName: "stranger",
    next_recruitmented_at: null,
    recruited_at: "2022-07-26T15:43:02+07:00",
    recruitment: "Mage",
    responsible_person_id: null,
    status: "ทดลองใช้งาน",
    updated_at: "2022-07-26T15:43:02+07:00",
  },
  {
    activated_at: "2022-07-07T13:59:13+07:00",
    agent_status: "อนุมัติเสร็จสิ้น",
    area: "BKK",
    branch_name: "สำนักงานใหญ่",
    firstName: "rratcha",
    id: 748,
    interviewer_id: null,
    lastName: "hopeless",
    next_recruitmented_at: null,
    recruited_at: "2022-07-07T13:52:46+07:00",
    recruitment: "Knight",
    responsible_person_id: null,
    status: "ทดลองใช้งาน",
    updated_at: "2022-07-07T13:59:17+07:00",
  },
];

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <h1>PROJECTMAN</h1>
          <hr></hr>
          <small>
            <span></span>SOFTWARE HOUSE<span></span>
          </small>
        </div>
      </div>
    </header>
  );
};

const Navbar = ({ expanded, onExpanded, page, setPage }) => {
  return (
    <div className={styles.slide}>
      {expanded && <div className={styles.mask} onClick={onExpanded} />}
      <nav className={expanded ? cx(styles.expanded) : null}>
        <div className={styles.bars} onClick={onExpanded}>
          <FontAwesomeIcon icon={faBars} />
        </div>
        <ul>
          <li
            className={page === "home" ? styles.actived : null}
            onClick={() => setPage("home")}
          >
            <FontAwesomeIcon icon={faHomeAlt} />
            <label>Lorem ipsum</label>
          </li>
          <li
            className={page === "user" ? styles.actived : null}
            onClick={() => setPage("user")}
          >
            <FontAwesomeIcon icon={faPeopleGroup} />
            <label>Duis mollis</label>
          </li>
          <li
            className={page === "setting" ? styles.actived : null}
            onClick={() => setPage("setting")}
          >
            <FontAwesomeIcon icon={faCog} />
            <label>Morbi blandit</label>
          </li>
        </ul>
      </nav>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <section></section>
        <hr></hr>
        <div className={styles.text}>
          <small className={styles.version}>Ver. 2.0.0</small>
          <div className={styles.copyright}>
            <small>Copyright © 2021 PJM</small>
          </div>
        </div>
      </div>
    </footer>
  );
};

const HomePage = ({ search, onSearch, columns }) => {
  return (
    <section className={styles.home}>
      <header>
        <h1>Lorem ipsum</h1>
        <div className={styles.breadcrumb}>
          <nav>Lorem ipsum</nav>
          <button onClick={onSearch}>Neque porro</button>
        </div>
      </header>
      {search && (
        <section className={styles.search}>
          <div>
            <label>Neque porro</label>
            <input />
          </div>
          <div>
            <label>Neque porro</label>
            <input />
          </div>
          <div>
            <label>Neque porro</label>
            <input />
          </div>
          <div>
            <label>Neque porro</label>
            <input />
          </div>
          <div>
            <label>Neque porro</label>
            <input disabled />
          </div>
          <div>
            <u>Neque porro</u>
          </div>
        </section>
      )}
      <div className={styles.table}>
        <Table
          data={data}
          columns={columns}
          // paging={paging}
          // searchValue={searchValue}
          // onChange={onChange}
        />
      </div>
    </section>
  );
};

const BackofficeTemplate = () => {
  const [expanded, setExpanded] = useState(false);
  const [search, setSearch] = useState(false);
  const [page, setPage] = useState("home");

  const onExpanded = () => setExpanded(!expanded);
  const onSearch = () => setSearch(!search);

  const columns = useMemo(
    () => [
      // {
      //   Header: "",
      //   accessor: "icon",
      //   styles: {
      //     header: {
      //       width: "60px",
      //     },
      //   },
      //   Cell: (cell) => {
      //     return (
      //       <Link
      //         className={styles.icon_link}
      //         to={`/agents/${cell.row.original.id}`}
      //       >
      //         <Icon name="document" />
      //       </Link>
      //     );
      //   },
      // },
      {
        Header: "firstName",
        accessor: "firstName",
        styles: {
          header: {
            width: "160px",
          },
        },
      },
      {
        Header: "lastName",
        accessor: "lastName",
        styles: {
          header: {
            width: "160px",
          },
        },
      },
      {
        Header: "position",
        accessor: "recruitment",
        styles: {
          header: {
            width: "240px",
            textAlign: "center",
          },
          cell: {
            textAlign: "center",
          },
        },
        Cell: (cell) => {
          return <>{cell.row.original.recruitment || "-"}</>;
        },
      },
      {
        Header: "area",
        accessor: "area",
        styles: {
          header: {
            width: "150px",
            textAlign: "center",
          },
          cell: {
            textAlign: "center",
          },
        },
        Cell: (cell) => {
          return <div>{cell.row.original.area || "-"}</div>;
        },
      },
      {
        Header: "branch",
        accessor: "branchName",
        styles: {
          header: {
            width: "150px",
            textAlign: "center",
          },
          cell: {
            textAlign: "center",
          },
        },
        Cell: (cell) => {
          return <div>{cell.row.original.branchName || "-"}</div>;
        },
      },
      {
        Header: "description",
        accessor: "registerNote",
        styles: {
          header: {
            width: "200px",
          },
        },
        Cell: (cell) => {
          return <div>{cell.row.original.registerNote || "-"}</div>;
        },
      },
    ], // eslint-disable-next-line
    [data]
  );

  return (
    <div className={styles.container}>
      <Link to={"/"} style={{ textDecoration: "none" }}>
        <Header />
      </Link>
      <main className={styles.backoffice}>
        <Navbar
          expanded={expanded}
          onExpanded={onExpanded}
          page={page}
          setPage={setPage}
        />
        {page === "home" && (
          <HomePage search={search} onSearch={onSearch} columns={columns} />
        )}
      </main>
      <Footer />
    </div>
  );
};

export default BackofficeTemplate;
