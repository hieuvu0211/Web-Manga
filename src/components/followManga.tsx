"use client"

import Image from "next/image";

export default function FollowManga() {
    return (
        <>
            <div className="fl_container relative mx-auto mt-1">
                <div className="fl_title flex items-center justify-between">
                    <h1 className="pl-3.5 text-blue-500">Truyện đang theo dõi</h1>
                    <p className="pr-3.5 italic text-sm cursor-pointer hover:text-blue-600">Xem tất cả</p>
                </div>
                <div className="fl_content flex pl-3.5">
                    <Image src={'/images/manga/example1.jpg'} alt={"#"}
                           width={100}
                    height={100}
                    className="image cursor-pointer"/>
                    <div className="fl_content1">
                        <h1 className="pl-3.5 fl_item1 cursor-pointer hover:text-blue-600">Kage no Jitsuryokusha ni Naritakute</h1>
                        <div className="fl_item2 flex items-center justify-between pl-3.5">
                            <p className="font-noamal cursor-pointer hover:text-blue-600">Chapter 30</p>
                            <p className="font-medium text-xs italic pr-2">20 giờ trước</p>
                        </div>
                        <p className="pl-3.5 font-light italic cursor-pointer hover:text-purple-400">Đọc tiếp chap 1</p>
                    </div>
                </div>

                <div className="fl_content flex pl-3.5">
                    <Image src={'/images/manga/ex2.jpg'} alt={"#"}
                           width={100}
                           height={100}
                           className="image cursor-pointer"/>
                    <div className="fl_content1">
                        <h1 className="pl-3.5 fl_item1 cursor-pointer hover:text-blue-600">
                            Đại quản gia là ma hoàng</h1>
                        <div className="fl_item2 flex items-center justify-between pl-3.5">
                            <p className="font-noamal cursor-pointer hover:text-blue-600">Chapter 45</p>
                            <p className="font-medium text-xs italic pr-2">1 phút trước</p>
                        </div>
                        <p className="pl-3.5 font-light italic cursor-pointer hover:text-purple-400">Đọc tiếp chap 44</p>
                    </div>
                </div>

                <div className="fl_content flex pl-3.5">
                    <Image src={'/images/manga/ex3.jpg'} alt={"#"}
                           width={100}
                           height={100}
                           className="image cursor-pointer"/>
                    <div className="fl_content1">
                        <h1 className="pl-3.5 fl_item1 cursor-pointer hover:text-blue-600">Toàn cầu băng phong</h1>
                        <div className="fl_item2 flex items-center justify-between pl-3.5">
                            <p className="font-noamal cursor-pointer hover:text-blue-600">Chapter 63</p>
                            <p className="font-medium text-xs italic pr-2">5 giờ trước</p>
                        </div>
                        <p className="pl-3.5 font-light italic cursor-pointer hover:text-purple-400">Đọc tiếp chap 47</p>
                    </div>
                </div>

                <div className="fl_content flex pl-3.5">
                    <Image src={'/images/manga/ex4.jpg'} alt={"#"}
                           width={100}
                           height={100}
                           className="image cursor-pointer"/>
                    <div className="fl_content1">
                        <h1 className="pl-3.5 fl_item1 cursor-pointer hover:text-blue-600">Đại quản gia là ma hoàng</h1>
                        <div className="fl_item2 flex items-center justify-between pl-3.5">
                            <p className="font-noamal cursor-pointer hover:text-blue-600">Chapter 30</p>
                            <p className="font-medium text-xs italic pr-2 ">3 giờ trước</p>
                        </div>
                        <p className="pl-3.5 font-light italic cursor-pointer hover:text-purple-400">Đọc tiếp chap 1.5</p>
                    </div>
                </div>
            </div>
        </>
    )
}