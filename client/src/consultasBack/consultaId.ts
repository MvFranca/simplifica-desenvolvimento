/* eslint-disable react-hooks/rules-of-hooks */
import axios from "axios";

import { pointContext } from "../context/context";
import { useContext } from "react";

export function consultaId() {
  const { userId } = useContext(pointContext);

  axios
    .post("http://localhost:8000/api/points/diamantes", { userId })
    .then((res) => {
      console.log(res);
    })
  // axios
  //   .post("https://simplifica-desenvolvimento.onrender.com/api/points/diamantes", { userId })
  //   .then((res) => {
  //     console.log(res);
  //   })

    .catch((err) => {
      console.log(err);
    });
}
