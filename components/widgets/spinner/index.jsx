import React, { useState } from "react";
import {BeatLoader} from "react-spinners";
import { css } from '@emotion/react';

const override = css`
  display: "block";
  margin: "100% auto";
  borderColor: "red";
`;

const Spinner = () => {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#36d7b7");
  
  return (
    <div>
      <BeatLoader color={color} loading={loading} cssOverride={override} size={15}

      />
    </div>
  )
}

export default Spinner