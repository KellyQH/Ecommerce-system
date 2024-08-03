import { Outlet } from 'react-router-dom';

function CustomerUI() {
  return (
    <div>
      <h1>Customer UI</h1>
      <Outlet />
    </div>
  );
}

export default CustomerUI;
