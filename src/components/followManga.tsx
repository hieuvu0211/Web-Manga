"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function FollowManga() {
  const [listFollow, setListFollow] = useState<any>(null);
  useEffect(() => {
    let data: any = localStorage.getItem("manga");
    const ArrayData: any = JSON.parse(data);
    setListFollow(ArrayData);
    console.log("ArrayData = ", ArrayData);
  }, []);

  const router = useRouter();
  return (
    <>
      <div className="fl_container relative mx-auto mt-1">
        <div className="fl_title flex items-center justify-between">
          <h1 className="pl-3.5 text-blue-500">Truyện đang theo dõi</h1>
          <p
            className="pr-3.5 italic text-sm cursor-pointer hover:text-blue-600"
            onClick={() => router.push("/truyen-theo-doi")}
          >
            Xem tất cả
          </p>
        </div>
        {listFollow &&
          listFollow.map((item: any, index: number) => {
            return (
              <div className="fl_content flex pl-3.5" key={index}>
                <img
                  src={`http://localhost:8000/manga/${item.title}/index.jpg`}
                  alt={"#"}
                  width={100}
                  height={100}
                  className="image cursor-pointer"
                  style={{
                    width: "100%",
                    maxWidth: "100px",
                    minWidth: "100px",
                  }}
                  onClick={() =>
                    router.push(`http://localhost:3000/truyen/${item.title}`)
                  }
                />
                <div className="fl_content1">
                  <h1
                    className="pl-3.5 fl_item1 cursor-pointer hover:text-blue-600"
                    onClick={() =>
                      router.push(`http://localhost:3000/truyen/${item.title}`)
                    }
                  >
                    {item.title}
                  </h1>
                  <div className="fl_item2 flex items-center justify-between pl-3.5">
                    <p
                      className="font-noamal cursor-pointer hover:text-blue-600"
                      onClick={() =>
                        router.push(
                          `/truyen/${item.title}/chapter1?title=${item.title}&c=1`
                        )
                      }
                    >
                      Đọc từ đầu
                    </p>
                  </div>
                  <p className="pl-3.5 font-light italic cursor-pointer hover:text-purple-400">
                    Đọc tiếp
                  </p>
                </div>
              </div>
            );
          })}
        {/* <div className="fl_content flex pl-3.5">
          <Image
            src={"/images/manga/example1.jpg"}
            alt={"#"}
            width={100}
            height={100}
            className="image cursor-pointer"
          />
          <div className="fl_content1">
            <h1 className="pl-3.5 fl_item1 cursor-pointer hover:text-blue-600">
              Kage no Jitsuryokusha ni Naritakute
            </h1>
            <div className="fl_item2 flex items-center justify-between pl-3.5">
              <p className="font-noamal cursor-pointer hover:text-blue-600">
                Chapter 30
              </p>
              <p className="font-medium text-xs italic pr-2">20 giờ trước</p>
            </div>
            <p className="pl-3.5 font-light italic cursor-pointer hover:text-purple-400">
              Đọc tiếp chap 1
            </p>
          </div>
        </div> */}

        {/* <div className="fl_content flex pl-3.5">
          <Image
            src={"/images/manga/ex2.jpg"}
            alt={"#"}
            width={100}
            height={100}
            className="image cursor-pointer"
          />
          <div className="fl_content1">
            <h1 className="pl-3.5 fl_item1 cursor-pointer hover:text-blue-600">
              Đại quản gia là ma hoàng
            </h1>
            <div className="fl_item2 flex items-center justify-between pl-3.5">
              <p className="font-noamal cursor-pointer hover:text-blue-600">
                Chapter 45
              </p>
              <p className="font-medium text-xs italic pr-2">1 phút trước</p>
            </div>
            <p className="pl-3.5 font-light italic cursor-pointer hover:text-purple-400">
              Đọc tiếp chap 44
            </p>
          </div>
        </div> */}

        {/* <div className="fl_content flex pl-3.5">
          <Image
            src={"/images/manga/ex3.jpg"}
            alt={"#"}
            width={100}
            height={100}
            className="image cursor-pointer"
          />
          <div className="fl_content1">
            <h1 className="pl-3.5 fl_item1 cursor-pointer hover:text-blue-600">
              Toàn cầu băng phong
            </h1>
            <div className="fl_item2 flex items-center justify-between pl-3.5">
              <p className="font-noamal cursor-pointer hover:text-blue-600">
                Chapter 63
              </p>
              <p className="font-medium text-xs italic pr-2">5 giờ trước</p>
            </div>
            <p className="pl-3.5 font-light italic cursor-pointer hover:text-purple-400">
              Đọc tiếp chap 47
            </p>
          </div>
        </div> */}

        {/* <div className="fl_content flex pl-3.5">
          <Image
            src={"/images/manga/ex4.jpg"}
            alt={"#"}
            width={100}
            height={100}
            className="image cursor-pointer"
          />
          <div className="fl_content1">
            <h1 className="pl-3.5 fl_item1 cursor-pointer hover:text-blue-600">
              Đại quản gia là ma hoàng
            </h1>
            <div className="fl_item2 flex items-center justify-between pl-3.5">
              <p className="font-noamal cursor-pointer hover:text-blue-600">
                Chapter 30
              </p>
              <p className="font-medium text-xs italic pr-2 ">3 giờ trước</p>
            </div>
            <p className="pl-3.5 font-light italic cursor-pointer hover:text-purple-400">
              Đọc tiếp chap 1.5
            </p>
          </div>
        </div> */}
      </div>
    </>
  );
}
