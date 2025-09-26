import { Link } from "react-router-dom"

function Home() {
    // List of 2 Users
    const users = [
        { id: 1, username: 'Mayank', name: 'Mayank', email: 'Mayank@example.com' },
        { id: 2, username: 'Kumar', name: 'Kumar', email: 'Kumar@example.com' },
        {id: 3, username: 'Manish', name:'Godara', email: 'manish@example.com'}
    ];
    return (
        <div style={{ padding: 20, fontFamily: 'Arial' }}>
            <h1>Welcome to the Home Page</h1>
            <p>This is the main landing page of our application.</p>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 20 }}>
                <h2>Navigation Links:</h2>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/user/Mayank">UserProfile</Link>
            </nav>
            <ul style={{ marginTop: 20 }}>
                <h2>User List:</h2>
                {users.map(user => (
                    <li key={user.id} style={{ marginBottom: 10 }}>
                        <div style={{ display: 'inline-block', width: 10 }}>
                        <Link to={`/user/${user.username}`} style={{ textDecoration: 'none', color: 'blue' }}>
                        {user.name} ({user.email})
                        </Link>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Home