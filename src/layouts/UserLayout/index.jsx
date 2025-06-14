import { Outlet } from 'react-router-dom'

function UserLayout() {
  return (
    <div>
      <h1>User Header</h1>
      <Outlet />
      <h1>User Footer</h1>
    </div>
  )
}

export default UserLayout
