import Header from "../components/Header";
import SignInScreen from "../components/SignInScreen";

export default function Profile() {
  return (
    <div>
      <Header />
      <SignInScreen />
      <p className="my-16">This is the profile page</p>
    </div>
  );
}
