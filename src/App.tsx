import { Suspense, useState } from "react";
import Nav from "./Nav"
import Bannar from "./Bannar"
import type { TechType } from "./types/types";
import Technology from "./Components/Technologies/Technology";
import Footer from "./Footer";
import { toast } from "react-toastify";


const TechFetch = async (): Promise<TechType[]> => {
  const res = await fetch("/data.json");
   if (!res.ok) {
       toast.error("Failed to fetch technologies");
    }

  const data = res.json();
  return data;
};



function App() {

   const [TechPromise] = useState(() => TechFetch());
  // console.log(TechPromise)

  return (
    <>
        <Nav></Nav>
        <Bannar></Bannar>
        <Suspense fallback={<h2>Loading....</h2>}>
          
          <Technology TechPromise={TechPromise}></Technology>

        </Suspense>

        <Footer></Footer>
    </>
  )
}

export default App
