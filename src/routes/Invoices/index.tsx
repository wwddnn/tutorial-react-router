import { Outlet, NavLink } from "react-router-dom";
import { getInvoices } from "../../data";
import './styles.css';

export default function Invoices() {
  const invoices = getInvoices();

  return (
    <div style={{ display: "flex" }}>
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem",
        }}
      >
        {invoices.map((invoice) => (
          <NavLink
            className={({ isActive }) => isActive ? "dblock nav-red" : "dblock nav-blue"}
            to={`/invoices/${invoice.number}`}
            key={invoice.number}
          >
            {invoice.name}
          </NavLink>
        ))}
      </nav>
      <Outlet />
    </div>
  );
}
