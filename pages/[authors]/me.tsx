import { Container, Typography } from '@mui/material';
import Link from 'next/link';

export default function Me() {
  return (
    <Container>
      <Typography variant='h1'>Author Me</Typography>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </Container>
  );
}
