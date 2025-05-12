import { unstable_ViewTransition as ViewTransition } from "react";
import Container from "../../components/layout/container";

export default function WritingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ViewTransition>
      <Container>{children}</Container>
    </ViewTransition>
  );
}
