import './footer.css';
import { Logo } from '@app/components/Logo/Logo';

const Footer = () => (
  <footer className="m-h-56 leading-7 p-14">
    <div className="flex">
      <div className="basis-2/3 bg-blue-site text-white p-14 pl-44">
        <h2 className="text-2xl sm:text-3xl font-bold">CONTACT US</h2>
        <div className="flex text-sm">
          <div className="basis-1/2">
            <p className="mt-10">
              I am a paragraph. Click here to add your own text and edit me.
            </p>
            <p className="mt-10">Registered Charity: 12345-67</p>
          </div>
          <div className="basis-1/2">
            <p className="mt-10">
              500 Terry Francois Street
              <br /> San Francisco, CA 94158
            </p>
            <p className="mt-10">Phone: 1-800-000-0000</p>
          </div>
        </div>
        <h3 className="text-4xl">info@mysite.com</h3>
      </div>
      <div className="basis-1/3 bg-gray-200 p-14 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold">BE THE FIRST TO KNOW</h2>
        <p className="mt-6">Sign up to our newsletter to stay informed</p>
      </div>
    </div>
    <div className="mx-auto text-center sm:text-xs">
      <Logo />
      <p className="font-default mb-10">
        © 2035 ChoosEquality. Powered and secured by Wix
      </p>
    </div>
  </footer>
);

export default Footer;
