import React from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { useApolloClient } from "@apollo/react-hooks";

export const GET_ALERT_MESSAGE = gql`
  query {
    Users {
      userId
      name
    }
  }
`;

export default function RandomNumber() {
  const { data, loading, error } = useQuery(GET_ALERT_MESSAGE);
  const client = useApolloClient();
  if (loading) {
    return <div>Loading</div>;
  }
  return (
    <div>
      <div>
        {/* <button
          onClick={() =>
            client.writeData({ data: { randomNumber: Math.random() } })
          }
          style={{
            width: 200,
            height: 40,
            fontSize: 16,
            fontWeight: "bold",
            background: "#ff6b15",
            color: "white",
          }}
        >
          Write Random
        </button> */}
      </div>
      {data.Users.map((item) => {
        return <div>{item.userId}</div>;
      })}
    </div>
  );
}
