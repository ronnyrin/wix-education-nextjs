import { NavBar } from '@app/components/Layout/NavBar/NavBar';
import { Logo } from '@app/components/Logo/Logo';

const Header = () => (
  <>
    <header className="h-header w-full my-6 px-8">
      <div className="flex px-6 sm:px-14 h-header items-center gap-4 sm:gap-8">
        <h2 className="flex-1">
          <a href="/" className="flex items-center gap-6">
            <Logo />
            <div>
              <span className="block font-site">ChoosEquality</span>
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
