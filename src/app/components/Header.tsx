import Avatar from "./avatar";

function Header() {
  return (
    <div className="flex flex-row items-center mx-auto max-w-7xl px-6 py-2 md:flex md:items-center md:justify-between lg:px-8 bg-bg-200 rounded-md">
      <Avatar />
    </div>
  );
}
export default Header;
