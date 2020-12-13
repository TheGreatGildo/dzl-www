import React, { useState, useEffect } from "react";
import CountUp from "react-countup";

import styled from "styled-components";

interface ValueProps {
  value: string | number;
  decimals?: number;
}

const Value: React.FC<ValueProps> = ({ value, decimals }) => {
  const [start, updateStart] = useState(0);
  const [end, updateEnd] = useState(0);

  useEffect(() => {
    if (typeof value === "number") {
      updateStart(end);
      updateEnd(value);
    }
  }, [value]);

  return (
    <StyledValue>
      {typeof value == "string" ? (
        value
      ) : (
        <CountUp
          start={start}
          end={end}
          decimals={
            decimals !== undefined ? decimals : end < 0 ? 3 : end > 1e1 ? 2 : 4
          }
          duration={1}
          separator=","
        />
      )}
    </StyledValue>
  );
};

const StyledValue = styled.div`


  font-family: "Digital-Numbers";
  text-shadow: 0 0 10px #759687, 0 0 20px#bbeed646;
  padding: 1px 5px;
  color: #bbeed6;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0.15em;
  /* letter-spacing: 0.15em; */
`;

export default Value;
