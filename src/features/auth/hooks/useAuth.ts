"use client";

import { useState } from "react";

const useAuth = () => {
  const [headDesc, setHeadDesc] = useState<string>("Welcome back, adventurer!");

  return { headDesc, setHeadDesc };
};

export default useAuth;
