import "./ProfileCard.css";

function ProfileCard({ user }) {
  return (
    <div className="card">
      <img src={user.avatar} alt="avatar" className="avatar" />
      <h2>
        {user.firstName} {user.lastName}
      </h2>
      <p>
        <b>Occupation:</b> {user.occupation}
      </p>
      <p>
        <b>Hobbies:</b> {user.hobbies.join(", ")}
      </p>
    </div>
  );
}

export default ProfileCard;