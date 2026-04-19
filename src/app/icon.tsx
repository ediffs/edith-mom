import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

// img metadata
export const size = {
  width: 32,
  height: 32,
};

export const contentType = "image/webp";

// icon generation
export default async function Icon() {
  const atkynsonMono = await readFile(
    join(process.cwd(), "/public/AtkynsonMonoNerdFontMono-Regular.otf"),
  );

  return new ImageResponse(
    // ImageResponse JSX element
    <div
      style={{
        fontSize: 22,
        background: "black",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "mediumpurple",
      }}
    >
      :3
    </div>,
    {
      // ImageResponse options
      ...size, // re-use size exported size metadata for ImageResponse
      fonts: [
        {
          name: "Atkynson",
          data: atkynsonMono,
          style: "normal",
          weight: 400,
        },
      ],
    },
  );
}
