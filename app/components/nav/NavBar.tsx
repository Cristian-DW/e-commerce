import Container  from "../Container";
import Link from "next/link";
import { Redressed } from "next/font/google";

const redressed = Redressed({ subsets: ["latin"], weight: ["400"] });

const NavBar = () => {
  return (
    <div
      className="
      sticky
      top-0
      w-full
      bg-slate-200
      z-30
      shadow-sm
      "
    >
      <div
        className="
         py-4
         border-b-[1px]"
      >
        <Container>
          '
          <div
            className="
               flex
               items-center
               justify-between
               gap-3
               md:gap-0
               "
          >
            <Link href="/" className={`${redressed.className} text-3xl font-bold`}>E-Shop</Link>
            <div className="hiden md:block"> Search</div>
            <div
              className="
                  flex items-center gap-8md:gap-12
                  "
               >
              <div>CartCount</div>
              <div>UserMenu</div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default NavBar;