import { useRouter } from "next/router";
import { useEffect } from "react";
import Heading from "../components/Heading";

const Error = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/')
    }, 3000);
  }, []);
  return (
    <>
      <Heading text="404" />
      <Heading text="Not Found" tag="h2" />
    </>
  );
};

export default Error;
