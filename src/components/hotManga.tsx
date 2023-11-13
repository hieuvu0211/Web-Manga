'use client'
import "../styles/hotmanga.scss";
import Image from "next/image";
import Link from "next/link";

export default function HotManga() {
    const myStyle = {
        backgroundImage: 'url("/images/manga/ex2.jpg")',
        width: "230px",
        height: "245px",
    }
    return (
        <>
            <div className="hotmanga_container">
                <h1 className="px-4">Truyện đề cử:</h1>
                <div className="hotmanga_item px-2 gap-4">
                    <div style={{
                        backgroundImage: 'url("/images/manga/example1.jpg")',
                        width: "230px",
                        height: "245px",
                        position: "relative",
                    }} className="hotmanga_image">
                        <div className="hotmanga_name">
                            <a href="#">Kage no Jitsuryokusha ni Naritakute</a>
                        </div>
                    </div>
                    <div style={{
                        backgroundImage: 'url("/images/manga/ex2.jpg")',
                        width: "230px",
                        height: "245px",
                        position: "relative",
                    }} className="hotmanga_image">
                        <div className="hotmanga_name">
                            <a href="#">Gachiakuta</a>
                        </div>

                    </div>
                    <div style={{
                        backgroundImage: 'url("/images/manga/ex3.jpg")',
                        width: "230px",
                        height: "245px",
                        position: "relative",
                    }} className="hotmanga_image">
                        <div className="hotmanga_name">
                            <a href="#">Kimi wa meido sama</a>
                        </div>
                    </div>
                    <div style={{
                        backgroundImage: 'url("/images/manga/ex4.jpg")',
                        width: "230px",
                        height: "245px",
                        position: "relative",
                    }} className="hotmanga_image">
                        <div className="hotmanga_name">
                            <a href="#">Kajiki no ryourinin</a>
                        </div>
                    </div>
                    <div style={{
                        backgroundImage: 'url("/images/manga/ex5.jpg")',
                        width: "230px",
                        height: "245px",
                        position: "relative",
                    }}
                         className="hotmanga_image">
                        <div className="hotmanga_name">
                            <a href="#">Shishidou san ni shikararetai</a>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}