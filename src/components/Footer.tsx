import { LockClosedIcon } from "@heroicons/react/24/outline";
const Footer = () => {
  return (
    <>
      <footer className="md:h-32 h-28 w-screen bg-DarkGrey md:px-28 p-5 font-baseFont font-regular text-Base flex md:flex-row flex-col justify-between items-center">
        <div>
          <span className="">Copyright (c) 2023</span> <span> | </span>{" "}
          <span>Clarifionsupport@clarifion.com</span>
        </div>
        <div>
          <span className="flex gap-2">
            {" "}
            <LockClosedIcon className="h-5 w-5 text-Base font-bold md:mr-2" />
            Secure 256-bit SSL encryption.
          </span>
        </div>
      </footer>
    </>
  );
};
export default Footer;
