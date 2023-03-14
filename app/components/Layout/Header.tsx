import { NavBar } from '@app/components/Layout/NavBar/NavBar';

const Header = () => (
  <>
    <header className="h-header z-40 w-full my-6">
      <div className="flex px-6 sm:px-14 h-header items-center gap-4 sm:gap-8">
        <h2 className="flex-1">
          <a href="/" className="flex items-center gap-6">
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
            <div>
              <span className="block">ChoosEquality</span>
              <span className="text-xs">Education for All</span>
            </div>
          </a>
        </h2>
        <div>
          <NavBar />
        </div>
      </div>
    </header>
  </>
);

export default Header;
