import { NotFound } from '@/components/error';
import { Container } from '@mantine/core';

const NotFoundPage = () => {
  return (
    <Container className="h-screen relative grid place-content-center">
      <NotFound />
    </Container>
  );
};

export default NotFoundPage;
