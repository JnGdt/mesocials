import Head from "next/head";
import ReactDOM from "react-dom";
import Allsocials from "../Allsocials/Allsocials";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Jian's | Socials</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Allsocials />
    </div>
  );
}
