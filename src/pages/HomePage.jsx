import UserCard from "../components/UserCard" 

export default function HomePage() {
  const user = {
    name: "Akshatha Swamy", bio: "MCA student | building things",
  followers: 12,
  following: 30,
  repos: 8
  }         
  return (
    <div>
      <UserCard
        name={user.name}
        bio={user.bio}
        followers={user.followers}
        following={user.following}
        repos={user.repos}
      />
    </div>
  );
}
