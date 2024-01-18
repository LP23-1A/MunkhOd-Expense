import React from "react";
import { useRouter } from "next/router";

const LogOut = () => {
  const router = useRouter();

  const handleRefresh = () => {
    router.replace(router.asPath);
  };

  return <button onClick={handleRefresh}>Refresh</button>;
};

export default LogOut;
