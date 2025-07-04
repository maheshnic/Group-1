import CandidateHeader from '../CandidateLanding/CandidateHeader';
import Footer from '../Footer/Footer';


export default function CandidateLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <CandidateHeader />
      {children}
      <Footer />
    </div>
  );
}