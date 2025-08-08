import Home from "./section/Home";
import Porto from './section/Porto';



const Page = () => {

  return (
    <div className="w-full h-full">
        <div><Home /></div>
        <div className="relative"><Porto /></div>
    </div>
  );
}
export default Page;