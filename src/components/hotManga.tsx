'use client'
import "../styles/hotmanga.scss";
import Image from "next/image";

export default function HotManga() {
    return (
        <>
            <div className="hotmanga_container">
                <h1 className="px-4">Truyện đề cử:</h1>
                <div className="hotmanga_image px-4 gap-4">
                    <div>
                        <Image src={'/images/manga/example1.jpg'} alt={"chua-te-bong-toi"}
                               width={170}
                               height={180}/>
                    </div>
                    <div>
                        <Image src={'/images/manga/example1.jpg'} alt={"chua-te-bong-toi"}
                               width={170}
                               height={180}/>
                    </div>
                    <div>
                        <Image src={'/images/manga/example1.jpg'} alt={"chua-te-bong-toi"}
                               width={170}
                               height={180}/>
                    </div>
                    <div>
                        <Image src={'/images/manga/example1.jpg'} alt={"chua-te-bong-toi"}
                               width={170}
                               height={180}/>
                    </div>
                    <div>
                        <Image src={'/images/manga/example1.jpg'} alt={"chua-te-bong-toi"}
                               width={170}
                               height={180}/>
                    </div>
                </div>

            </div>
        </>
    )
}