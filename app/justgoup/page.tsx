"use client";
import ProtectedRoute from "@/components/protected-route";
import TypographyH1 from "@/components/typography/h1";
import { TypographyH2 } from "@/components/typography/h2";
import { TypographyP } from "@/components/typography/p";
import { useFetchBucketImages } from "@/hooks/data/use-fetch-images-bucker";

export default function JustGoUp() {
  const { data: images, isLoading, error } = useFetchBucketImages("images");
  return (
    <ProtectedRoute>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {/* Left column: text */}
        <div className="col-span-1 px-5 flex flex-col gap-6">
          <div>
            <TypographyH1 text="Just Go Up" />
            <TypographyH2
              text="A Unity mobile game about climbing endlessly with only one input."
              textSize="text-md"
            />
          </div>

          <TypographyP text="The player climbs endlessly by jumping on moving platforms. The only control is tapping the screen to jump upward." />

          <div>
            <TypographyH2 text="Platforms" textSize="text-lg" />
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <TypographyP text="Regular – moves horizontally at varying heights." />
              </li>
              <li>
                <TypographyP text="Danger – phases out when it hits the right screen edge, making it impossible to land on." />
              </li>
              <li>
                <TypographyP text="Spring – launches the player higher like a trampoline." />
              </li>
            </ul>
          </div>

          <div>
            <TypographyH2 text="Mechanics" textSize="text-lg" />
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <TypographyP text="The player can perform a double jump." />
              </li>
              <li>
                <TypographyP text="Platforms are randomized, creating unpredictable runs." />
              </li>
            </ul>
          </div>

          <div>
            <TypographyH2 text="Challenge" textSize="text-lg" />
            <TypographyP text="The combination of limited controls and random platforms creates a frustrating, Flappy Bird–style challenge loop." />
          </div>
        </div>

        {/* Right column: image/gif grid */}
        <div className="col-span-1 p-5 rounded-xl">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {Array.from(images || []).map((img, index) => (
              <div
                key={`${img.fileName}-${index}`}
                className="col-span-1 bg-white/20 aspect-video rounded"
              >
                <img src={img.url}></img>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}
