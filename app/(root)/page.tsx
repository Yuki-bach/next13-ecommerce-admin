import { UserButton } from "@clerk/nextjs";

const setUpPage = () => {
  return (
    <div className="p-4">
      <UserButton afterSignOutUrl="/"/>
    </div>
  );
};

export default setUpPage;
