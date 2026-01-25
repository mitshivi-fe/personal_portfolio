import Avatar from "./Avatar";

function Header() {
  return (
    <div className="flex items-center mx-auto max-w-7xl px-6 py-2 md:justify-between lg:px-8 rounded-md">
      <Avatar src="/images/shi_thumbnail.jpg" alt="Shivi Mittal" priority />
    </div>
  );
}

export default Header;
