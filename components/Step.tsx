import React from "react";
import { Zoom } from "./Zoom";

export function Step(props: {
  children: React.ReactNode;
  image?: { src: string; alt: string };
}) {
  if (!props.image) {
    return props.children;
  }

  return (
    <div className="nx-flex nx-mt-6">
      <div style={{ flex: "1 0" }}>{props.children}</div>
      <div style={{ flex: "1 0", position: "relative", minHeight: "320px" }}>
        <Zoom src={props.image.src} alt={props.image.alt} fill />
      </div>
    </div>
  );
}
