import "./listTre.css";
import Trend from "./trend";
export default function Trendlist(){
    return (
        <div id="now">
        <Trend traderank={1} firsttag={"Trish"} secondtag={"DevNFTs"} firsttaguse={"255k"} secondtaguse={"100k"}/>
        <Trend traderank={2} firsttag={"Live"} secondtag={"DevNFTs"} firsttaguse={"255k"} secondtaguse={"100k"}/>
        <Trend traderank={3} firsttag={"MostRequired"} secondtag={"DevNFTs"} firsttaguse={"255k"} secondtaguse={"100k"}/>
        <Trend traderank={4} firsttag={"Viral"} secondtag={"DevNFTs"} firsttaguse={"255k"} secondtaguse={"100k"}/>
        <Trend traderank={5} firsttag={"Coders"} secondtag={"DevNFTs"} firsttaguse={"255k"} secondtaguse={"100k"}/>
        <Trend traderank={6} firsttag={"Coders"} secondtag={"DevNFTs"} firsttaguse={"255k"} secondtaguse={"100k"}/>
        </div>
    )
}