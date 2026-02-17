import { useState } from 'react';
import { TOTAL_SPOTS, SPOTS_REMAINING } from '../lib/constants';

export function useSpotsCounter() {
  const [remaining, setRemaining] = useState(SPOTS_REMAINING);

  const decrementSpot = () => {
    setRemaining((prev) => Math.max(0, prev - 1));
  };

  return { remaining, total: TOTAL_SPOTS, decrementSpot };
}
