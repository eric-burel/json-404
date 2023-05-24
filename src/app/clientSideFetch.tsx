"use client";
import { useEffect } from "react";

export const ClientSideFetch = () => {
  useEffect(() => {
    const res = fetch("/not-exist", {
      headers: {
        // this should be respected
        accept: "application/JSON",
      },
    });
    res.then((r) => r.text()).then(console.debug);
  }, []);
  return <div>Check browser console</div>;
};
