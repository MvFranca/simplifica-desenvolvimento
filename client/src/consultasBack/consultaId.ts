/* eslint-disable react-hooks/rules-of-hooks */

import { pointContext } from '../context/context';
import { useContext } from 'react';
import { api } from '../services/api';

export function consultaId() {
  const { userId } = useContext(pointContext);

  api
    .post('/points/diamantes', { userId })
    .then((res) => {
      console.log(res);
    })

    .catch((err) => {
      console.log(err);
    });
}
