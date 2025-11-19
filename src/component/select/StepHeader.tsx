import styled from "@emotion/styled";

interface StepHeaderProps {
  step: number;
  title: string;
  description: string;
}

export default function StepHeader({
  step,
  title,
  description,
}: StepHeaderProps) {
  return (
    <Container>
      <Header>
        step.0{step} {title}
      </Header>
      <Description>{description}</Description>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
`;

const Header = styled.h2`
  color: var(--gr-100);
`;

const Description = styled.span`
  color: var(--gr-50);
`;
