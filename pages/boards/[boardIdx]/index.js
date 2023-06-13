import React from "react";
import { useRouter } from "next/router";

const index = () => {
  const router = useRouter();

  return <div>{router?.query.boardIdx}</div>;
};

export default index;
