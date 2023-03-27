import { useLoaderData } from "react-router-dom";
import Account from "../../components/Account/Account";

export default function Profile() {
  const { firstName, lastName } = useLoaderData();

  return (
    <main className="main bg-dark">
      <div className="header">
        <h1>Welcome back<br />{firstName} {lastName} !</h1>
        <button className="edit-button">Edit Name</button>
      </div>
      <h2 className="sr-only">Accounts</h2>
      <Account title="Argent Bank Checking (x8349)" amount="2,082.79" amountDescription="Available Balance"/>
      <Account title="Argent Bank Savings (x6712)" amount="10,928.42" amountDescription="Available Balance"/>
      <Account title="Argent Bank Credit Card (x8349))" amount="184.30" amountDescription="Current Balance"/>
    </main>
  );
}
