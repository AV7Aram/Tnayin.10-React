import style from './FbAddUser.module.css';

export function FbAddUser({ data }) {
    if (!data) {
        return <div className={style.placeholder}>No data submitted yet.</div>;
    }

    return (
        <div className={style.userDetails}>
            <h2>User Details</h2>
            <p><strong>First Name:</strong> {data.firstName}</p>
            <p><strong>Last Name:</strong> {data.LastName}</p>
            <p><strong>Email:</strong> {data.email}</p>
            <p><strong>Birthday:</strong> {data.birthday}</p>
        </div>
    );
}
