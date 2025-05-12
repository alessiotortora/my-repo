import Container from "../components/layout/container";
import { LinkSection } from "../components/layout/link-section";
import { ProjectSection } from "../components/layout/project-section";
import { WritingSection } from "../components/layout/writing-section";
import { SpotifyShowcase } from "../components/spotify/spotify-showcase";

export default function Home() {
  return (
    <Container>
      <div className="space-y-4">
        <p>
          I'm a full-stack developer and designer at heart. I care deeply about aesthetics, UX and
          crafting thoughtful products. Formerly a physical therapist, I now build digital
          experiences that feel intuitive and delightful.
        </p>
        <p>Outside coding, I'm usually with Milo, my dog and director of break reminders.</p>
      </div>
      <SpotifyShowcase />
      <ProjectSection />
      <WritingSection />
      <LinkSection />
    </Container>
  );
}
