import { IconBrandFacebook, IconBrandInstagram, IconBrandTwitter } from '@tabler/icons-react';

export default function Footer() {
  return (
    <footer className='bg-blue-950 text-grey-800 mt-20 pt-10 pb-5'>
      <div className='max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8'>

        {/* About */}
        <div>
          <h2 className="text-xl font-bold mb-3 text-white">JobPortal</h2>
<p className='text-sm text-white'>
  Job portal with user profiles, skill updates, certifications, work experience and admin job postings.
</p>
          <div className='flex gap-3 mt-4 [&>div]:bg-blue-300 [&>div]:p-2 [&>div]:rounded-full [&>div]:cursor-pointer hover:[&>div]:bg-blue-900 hover:[&>div]:text-white'>
            <div><IconBrandFacebook/></div>
            <div><IconBrandInstagram/></div>
            <div><IconBrandTwitter/></div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className='text-lg font-semibold mb-2 text-white'>Quick Links</h3>
          <ul className='text-sm space-y-1 text-white'>
            <li className='hover:text-blue-700 cursor-pointer'>Home</li>
            <li className='hover:text-blue-700 cursor-pointer'>Jobs</li>
            <li className='hover:text-blue-700 cursor-pointer'>Companies</li>
            <li className='hover:text-blue-700 cursor-pointer'>Contact</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className='text-lg font-semibold mb-2 text-white'>Support</h3>
          <ul className='text-sm space-y-1 text-white'>
            <li className='hover:text-blue-700 cursor-pointer'>Help Center</li>
            <li className='hover:text-blue-700 cursor-pointer'>Terms & Conditions</li>
            <li className='hover:text-blue-700 cursor-pointer'>Privacy Policy</li>
            <li className='hover:text-blue-700 cursor-pointer'>Report a problem</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className='text-lg font-semibold mb-2 text-white'>Contact Us</h3>
          <p className='text-sm text-white'>Email: support@jobportal.com</p>
          <p className='text-sm text-white'>Phone: +91 98765 43210</p>
          <p className='text-sm text-white'>Location: India</p>
        </div>
      </div>

      <div className='text-center text-sm text-white mt-10'>
        © {new Date().getFullYear()} JobPortal. All rights reserved.
      </div>
    </footer>
  );
}