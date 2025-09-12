import ProtectedRoute from "@/components/protected-route";
import TypographyH1 from "@/components/typography/h1";
import { TypographyH2 } from "@/components/typography/h2";
import { TypographyP } from "@/components/typography/p";

export default function JustGoUp() {
  return (
    <ProtectedRoute>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <div className="col-span-1 px-5 md:col-span-2">
          <TypographyH1 text="Some random title" />
          <TypographyH2 text="Some random description" textSize="text-md" />
        </div>
        <div className="col-span-1  text-justify p-5">
          <TypographyP
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at dui fringilla, elementum elit vel, porttitor augue. 
          Vivamus convallis, nulla et vulputate accumsan, orci augue congue risus, at accumsan metus nisl at elit. Morbi eu egestas elit. 
          In blandit mollis arcu in mattis. Fusce sollicitudin diam id gravida ultrices. Nam iaculis eget dui in tristique. Ut sit amet suscipit massa. 
          In bibendum volutpat maximus. Ut vitae interdum augue. Phasellus eget ligula vitae mauris ultricies molestie. Nam pretium justo vel nunc mattis maximus. 
          Pellentesque et tempus felis, id venenatis magna. Phasellus id maximus elit. Donec lobortis nulla ac porttitor feugiat.
          Vestibulum consequat tincidunt nisi, in venenatis metus dictum eget. Sed eu felis blandit, mattis nunc laoreet, maximus mi. 
          Nam nisi lectus, fringilla eget auctor vel, sollicitudin in lorem. Donec sodales justo in lacinia mollis. Curabitur vel mattis tellus. 
          Suspendisse nec odio ut nibh aliquet dignissim. Suspendisse eleifend sapien vitae mi consequat, ullamcorper condimentum lorem scelerisque. 
          Morbi ut tempor nisi, id consequat nibh. Vivamus dui augue, convallis at semper non, aliquam blandit mauris. 
          Pellentesque sed metus nec ligula laoreet pharetra vel sit amet dui. 
          Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam sit amet lorem quis tortor varius pretium. 
          Quisque malesuada sem elit, non dictum felis congue ac. Fusce eleifend turpis sed mi tempus luctus. 
          Maecenas sit amet elementum odio, id elementum libero. Suspendisse interdum rutrum porta."
          />
        </div>
        <div className="col-span-1 p-5 bg-emerald-600">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            <div className="col-span-1">1</div>
            <div>2</div>
            <div>3</div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}
