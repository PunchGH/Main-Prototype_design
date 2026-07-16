import Link from "next/link";
import Nav from "@/components/landing/Nav";
import Footer from "@/components/landing/Footer";
import landing from "@/components/landing/landing.module.css";
import svc from "@/components/services/services.module.css";

export default function NotFound() {
  return (
    <div className={landing.page}>
      <Nav />
      <div className={svc.notFound}>
        <div className={landing.eyebrow}>404 — SERVICE NOT FOUND</div>
        <h1 className={svc.heading}>We could not find that service</h1>
        <p className={svc.lede}>
          The page you are looking for may have moved. Explore what we build instead.
        </p>
        <Link href="/services" className={`${landing.btn} ${landing.heroPrimaryBtn}`}>
          View all services →
        </Link>
      </div>
      <Footer />
    </div>
  );
}
