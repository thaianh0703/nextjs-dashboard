import Image from "next/image";
export default function Page() {
  return <p>
    Invoices Page
    <Image
      src="/images/mela.png"
      width={201 }
      height={251}
      // className="block md:hidden"
      alt="Screenshot of the dashboard project showing mobile version"
    />
  </p>;
}