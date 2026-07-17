import { ImageResponse } from "next/og";

// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 22,
          background: "#ff5a24",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#16130d",
          fontWeight: 900,
          fontFamily: "sans-serif",
        }}
      >
        N
      </div>
    ),
    {
      ...size,
    }
  );
}
