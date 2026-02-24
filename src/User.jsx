const users = Array.from({ length: 7 }, (_, index) => ({
  id: index + 1,
  name: 'Aditya Tiwari',
}));

function User() {

  return (
    <section className="user-panel">
      <h2>Loaded Users</h2>
      <ul className="user-list">
        {users.map((user) => (
          <li key={user.id} className="user-item">
            <span className="avatar" aria-hidden="true">{user.name.charAt(0)}</span>
            <div>
              <p className="user-name">{user.name}</p>
              <p className="user-id">User ID: #{user.id}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default User;
