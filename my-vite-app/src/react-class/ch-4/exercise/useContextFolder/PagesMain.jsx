import React, { useContext } from "react";
import { UserContext } from "../../../../App";

function UserName() {
  const username = useContext(UserContext);
  return (
    <div>
      <p>Logged in as {username}</p>
    </div>
  );
}

export function Page1() {
  return (
    <>
      <p>Page 1</p>
      <UserName />
    </>
  );
}

export function Page2() {
  return (
    <>
      <p>Page 2</p>
      <UserName />
    </>
  );
}

export function Page3() {
  return (
    <>
      <p>Page 3</p>
      <UserName />
    </>
  );
}

function PagesMain() {
  return <div>PagesMain</div>;
}

export default PagesMain;
