import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Divider } from '@mantine/core';

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      <Divider size="xs" mx="md" />
      {children}
      <Footer />
    </div>
  );
}