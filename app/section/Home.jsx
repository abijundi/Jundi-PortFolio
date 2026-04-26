import TextAnimation from '../../components/ui/TextAnimation';
import Image from "next/image";


export default function Home() {

  return (
    <div className="w-full sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl h-screen">

      <div>
        <div className="absolute inset-0 z-100 h-screen bg-[linear-gradient(to_bottom,rgba(68,68,78,0)_2%,transparent_20%,transparent_75%,rgba(68,68,78,1)_97%)]">
        </div>
        <div className="relative w-screen h-screen bg-[var(--dark1)] ">
        </div>
      </div>
      <TextAnimation className="" />
    </div>
  );
}
