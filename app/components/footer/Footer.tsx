import Container from "../Container";
import Link from "next/link";
import FooterList from "./FooterList";
import {MdFacebook} from "react-icons/md"
import {BsInstagram} from "react-icons/bs"
import { AiFillTwitterCircle, AiFillYoutube } from "react-icons/ai";



const Footer = () => {
  return (
    <footer className="bg-slate-700 py-4 text-slate-200 text-sm mt-16">
      <Container>
        <div className="flex flex-col md:flex-row justify-between pt-16 pb-8">
          <FooterList>
            <h3 className="text-base font-bold mb-2">Shop Categories</h3>
            <Link href="#">Phones</Link>
            <Link href="#">Laptops</Link>
            <Link href="#">Destops</Link>
            <Link href="#">TV's</Link>
            <Link href="#">Accesories</Link>
          </FooterList>
          <FooterList>
            <h3 className="text-base font-bold mb-2">Customer Services</h3>
            <Link href="#">Contact Us</Link>
            <Link href="#">Shipping Policy</Link>
            <Link href="#">Returns & Exchanges</Link>
            <Link href="#">Watches</Link>
            <Link href="#">FAQs</Link>
          </FooterList>
          <FooterList>
            <h3 className="text-base font-bold mb-2">Follow Us</h3>
            <Link href="#" className="flex items-center gap-2">
              <MdFacebook size={20} />
              Facebook
            </Link>
            <Link href="#" className="flex items-center gap-2">
              <AiFillTwitterCircle size={20} />
              Twitter
            </Link>
            <Link href="#" className="flex items-center gap-2">
              <BsInstagram size={20} />
              Instagram
            </Link>
            <Link href="#" className="flex items-center gap-2">
              <AiFillYoutube size={20} />
              Youtube
            </Link>
          </FooterList>
        </div>
      </Container>
    </footer>
  );
};