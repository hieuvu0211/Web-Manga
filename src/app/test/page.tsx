"use client"
import "../../styles/test.scss";
import Image from "next/image";
export default function Test() {
    return(
        <>
            <div className="hotmanga_container mx-auto mt-1">
                <div className="hotmanga_item">
                    <Image src={"/images/manga/example1.jpg"} alt={"bantumlum"} className="image"
                    width={170}
                           height={180}/>
                </div>
                <div className="hotmanga_item"></div>
                <div className="hotmanga_item"></div>
                <div className="hotmanga_item"></div>
                <div className="hotmanga_item"></div>
                <div className="hotmanga_item"></div>
                <div className="hotmanga_item"></div>
                <div className="hotmanga_item"></div>
                <div className="hotmanga_item"></div>
                <div className="hotmanga_item"></div>

            </div>
        </>
    )
}