import React from "react";
import { PermissionConsumer } from "./PermissionProvider";

function First() {
  return (
    <PermissionConsumer name="first">
      <div>
        <button>First</button>
      </div>
    </PermissionConsumer>
  );
}

function Second() {
  return (
    <PermissionConsumer name="second">
      <div>
        <button>Second</button>
      </div>
    </PermissionConsumer>
  );
}
function Third() {
  return (
    <PermissionConsumer name="third">
      <div>
        <button>Third</button>
      </div>
    </PermissionConsumer>
  );
}
export { First, Second, Third };
