import DepartmentHeader from '../DepartmentLanding/DepartmentHeader';
import Footer from '../Footer/Footer';


export default function CandidateLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <DepartmentHeader />
      {children}
      <Footer />
    </div>
  );
}