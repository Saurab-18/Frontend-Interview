import { useRouteError } from "react-router-dom";

export const Error = () => {
  const { data, status } = useRouteError();

  return (
    <>
      <h1>{data}</h1>
      <h3>{status}</h3>
    </>
  );
};
