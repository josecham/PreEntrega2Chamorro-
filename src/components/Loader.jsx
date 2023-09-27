
import React from "react";
import { CircularProgress } from '@chakra-ui/react'

const Loader = () => {
  return (

    <CircularProgress value={30} size='120px' className="margin"/>
  );
};

export default Loader;
