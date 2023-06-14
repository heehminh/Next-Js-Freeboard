import React from "react";
import { useRouter } from "next/router";
import { useQuery, gql } from "@apollo/client";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      writer
      title
      contents
    }
  }
`;

const index = () => {
  const router = useRouter();

  try {
    const { data } = useQuery(FETCH_BOARD, {
      variables: { boardId: router.query.boardIdx },
    });

    console.log(data);
  } catch (error) {
    console.log(error);
  }

  return <div>{data?.fetchBoard?.title}</div>;
};

export default index;
