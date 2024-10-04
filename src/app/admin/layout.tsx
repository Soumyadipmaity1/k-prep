import React from "react";
// impot useRouter
export default function layout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return <div> {children}</div>;
}
