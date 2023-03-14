import './footer.css';

const Footer = () => (
  <footer className="m-h-56 leading-7 p-14">
    <div className="flex">
      <div className="basis-2/3 bg-blue-700 text-white p-14 pl-44">
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
      <svg
        className="inline-block"
        preserveAspectRatio="xMidYMid meet"
        data-bbox="9.326 77 180.602 46.37"
        viewBox="9.326 77 180.602 46.37"
        height="100"
        width="100"
        xmlns="http://www.w3.org/2000/svg"
        data-type="color"
        role="img"
      >
        <g>
          <path
            d="M122.262 78.431H73.868c-.771 0-1.396.625-1.396 1.396v13.712c0 .771.625 1.396 1.396 1.396h48.394c.771 0 1.396-.625 1.396-1.396V79.827c0-.771-.625-1.396-1.396-1.396z"
            fill="#272EC6"
            data-color="1"
          ></path>
          <path
            d="M122.262 105.065H73.868c-.771 0-1.396.625-1.396 1.396v13.712c0 .771.625 1.396 1.396 1.396h48.394c.771 0 1.396-.625 1.396-1.396v-13.712c0-.771-.625-1.396-1.396-1.396z"
            fill="#00ECA6"
            data-color="2"
          ></path>
          <path
            fill="#272EC6"
            d="M54.548 100c0 12.488-10.123 22.611-22.611 22.611-12.488 0-22.611-10.123-22.611-22.611 0-12.488 10.123-22.611 22.611-22.611 12.488 0 22.611 10.123 22.611 22.611z"
            data-color="1"
          ></path>
          <path
            d="M189.532 112.336l-34.941-34.941a1.349 1.349 0 0 0-1.908 0l-8.731 8.731a1.349 1.349 0 0 0 0 1.908l34.941 34.941a1.349 1.349 0 0 0 1.908 0l8.731-8.731a1.349 1.349 0 0 0 0-1.908z"
            fill="#00ECA6"
            data-color="2"
          ></path>
          <path
            d="M178.894 77.395l-34.941 34.941a1.349 1.349 0 0 0 0 1.908l8.731 8.731a1.349 1.349 0 0 0 1.908 0l34.941-34.941a1.349 1.349 0 0 0 0-1.908l-8.731-8.731a1.349 1.349 0 0 0-1.908 0z"
            fill="#272EC6"
            data-color="1"
          ></path>
        </g>
      </svg>
      <p className="font-default mb-10">
        © 2035 ChoosEquality. Powered and secured by Wix
      </p>
    </div>
  </footer>
);

export default Footer;
