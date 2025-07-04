import { Link, useNavigate } from 'react-router-dom';
import { Button, Divider } from '@mantine/core';
import { IconArrowLeft } from '@tabler/icons-react';
import Company from '../CompanyProfile/Company';
import SimilarCompanies from '../CompanyProfile/SimilarCompanies';


export default function BackButtonComponent() {
  const navigate = useNavigate();  

  return (
    <div>
      <Divider size="xs" />
      <Button
        color="blue" my="md"
        onClick={() => navigate(-1)} 
        leftSection={<IconArrowLeft size={20} />}
        variant="light"
      >Back</Button>
      <div className="flex gap-5 justify-between">
        <Company />
        <SimilarCompanies/>
      </div>
    </div>
  );
}