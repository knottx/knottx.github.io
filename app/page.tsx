import ProjectTile from "./components/project-tile";
import { allProjects } from "./constants/master-data";
import HeroTile from "./components/hero-tile";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-4 xl:px-32">
      <HeroTile />

      {allProjects.map((props, index) => (
        <ProjectTile key={index} index={index} project={props} />
      ))}
    </main>
  );
}
