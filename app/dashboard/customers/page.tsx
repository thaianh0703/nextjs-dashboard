import Image from "next/image";
export default function Page() {
  return <p>
    Customers Page
    <Image
      src="/images/thaianh.png"
      width={1089}
      height={540}
      // className="block md:hidden"
      alt="Screenshot of the dashboard project showing mobile version"
    />
  </p>;
}