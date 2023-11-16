"use client";
import "../../styles/truyen-theo-doi.scss";
import Link from "next/link";
import Image from "next/image";
export default function Home() {
  return (
    <>
      <div className="ml-16 font-semibold text-blue-700 font text-2xl">
        Truyện mới cập nhật {">"}
      </div>
      <div className="followPage_container mx-auto mt-1 ml-1 gap-3">
        <div className="follow_item items-center">
          <Link href={"/truyen/gachiakuta"} className="cursor-pointer">
            <Image
              src={"/images/manga/gachiakuta.jpg"}
              alt={"#"}
              className="image"
              width={170}
              height={180}
            />
            <div className="font-bold text-base cursor-pointer">Gachiakuta</div>
          </Link>
          <div className="italic cursor-pointer">Chap 10</div>
          <div className="italic cursor-pointer">Chap 9</div>
          <div className="italic cursor-pointer">...</div>
        </div>
        <div className="follow_item">
          <Link href={"/truyen/gofun-go-no-sekai"} className="cursor-pointer">
            <Image
              src={"/images/manga/gofun-go-no-sekai.jpg"}
              alt={"#"}
              className="image"
              width={170}
              height={180}
            />
            <div className="font-bold text-base ">Gofun go no sekai</div>
          </Link>
          <div className="italic">Chap 87</div>
          <div className="italic">Chap 86</div>
          <div className="italic">...</div>
        </div>
        <div className="follow_item">
          <Link
            href={"truyen/hiep-sy-cong-chua-la-nang-dau-toc-man-di-9983"}
            className="cursor-pointer"
          >
            <Image
              src={
                "/images/manga/hiep-sy-cong-chua-la-nang-dau-toc-man-di-9983.jpg"
              }
              alt={"#"}
              className="image"
              width={170}
              height={180}
            />
            <div className="font-bold text-base ">
              Hiệp sĩ công chúa là nàng dâu tộc man di
            </div>
          </Link>
          <div className="italic">Chap 45</div>
          <div className="italic">Chap 44</div>
          <div className="italic">...</div>
        </div>
        <div className="follow_item">
          <Link
            href={"/truyen/isekai-death-game-ni-tensou-sarete-tsura-5655"}
            className="cursor-pointer"
          >
            <Image
              src={
                "/images/manga/isekai-death-game-ni-tensou-sarete-tsura-5655.jpg"
              }
              alt={"#"}
              className="image"
              width={170}
              height={180}
            />
            <div className="font-bold text-base ">
              Isekai death game ni tensou sarete tsura
            </div>
          </Link>
          <div className="italic">Chap 65</div>
          <div className="italic">Chap 64</div>
          <div className="italic">...</div>
        </div>
        <div className="follow_item">
          <Link href={"/kajiki-no-ryourinin"} className="cursor-pointer">
            <Image
              src={"/images/manga/kajiki-no-ryourinin.jpg"}
              alt={"#"}
              className="image"
              width={170}
              height={180}
            />
            <div className="font-bold text-base ">Kajiki no ryourinin</div>
          </Link>
          <div className="italic">Chap 74</div>
          <div className="italic">Chap 73</div>
          <div className="italic">...</div>
        </div>
        <div className="follow_item">
          <Link
            href={"/truyen/ke-ca-ban-sao-cung-biet-yeu"}
            className="cursor-pointer"
          >
            <Image
              src={"/images/manga/ke-ca-ban-sao-cung-biet-yeu.jpg"}
              alt={"#"}
              className="image"
              width={170}
              height={180}
            />
            <div className="font-bold text-base ">
              Kể cả bản sao cũng biết yêu
            </div>
          </Link>
          <div className="italic">Chap 123</div>
          <div className="italic">Chap 122</div>
          <div className="italic">...</div>
        </div>
        <div className="follow_item">
          <Link href={"/truyen/kimi-wa-meido-sama"} className="cursor-pointer">
            <Image
              src={"/images/manga/kimi-wa-meido-sama.jpg"}
              alt={"#"}
              className="image"
              width={170}
              height={180}
            />
            <div className="font-bold text-base ">Kimi wa meido sama</div>
          </Link>
          <div className="italic">Chap 23</div>
          <div className="italic">Chap 22</div>
          <div className="italic">...</div>
        </div>
        <div className="follow_item">
          <Link
            href={"/truyen/loi-nguyen-van-chua-cham-dut"}
            className="cursor-pointer"
          >
            <Image
              src={"/images/manga/loi-nguyen-van-chua-cham-dut.jpg"}
              alt={"#"}
              className="image"
              width={170}
              height={180}
            />
            <div className="font-bold text-base ">
              Lời nguyền vẫn chưa chấm dứt
            </div>
          </Link>
          <div className="italic">Chap 10</div>
          <div className="italic">Chap 9</div>
          <div className="italic">...</div>
        </div>
        <div className="follow_item">
          <Link
            href={"/truyen/long-lay-phut-lia-doi"}
            className="cursor-pointer"
          >
            <Image
              src={"/images/manga/long-lay-phut-lia-doi.jpg"}
              alt={"#"}
              className="image"
              width={170}
              height={180}
            />
            <div className="font-bold text-base ">Lộng lẫy phút lìa đời</div>
          </Link>
          <div className="italic">Chap 5</div>
          <div className="italic">Chap 4</div>
          <div className="italic">...</div>
        </div>
        <div className="follow_item">
          <Link href={"/truyen/ngon-linh-vuong"} className="cursor-pointer">
            <Image
              src={"/images/manga/ngon-linh-vuong.jpg"}
              alt={"#"}
              className="image"
              width={170}
              height={180}
            />
            <div className="font-bold text-base ">Ngôn linh vương</div>
          </Link>
          <div className="italic">Chap 7</div>
          <div className="italic">Chap 6</div>
          <div className="italic">...</div>
        </div>
        <div className="follow_item">
          <Link
            href={"/truyen/shishidou-san-ni-shikararetai"}
            className="cursor-pointer"
          >
            <Image
              src={"/images/manga/shishidou-san-ni-shikararetai.jpg"}
              alt={"#"}
              className="image"
              width={170}
              height={180}
            />
            <div className="font-bold text-base ">
              Shishidou san ni shikararetai
            </div>
          </Link>
          <div className="italic">Chap 3</div>
          <div className="italic">Chap 2</div>
          <div className="italic">...</div>
        </div>
        <div className="follow_item">
          <Link href={"/truyen/kajiki-no-ryourinin"} className="cursor-pointer">
            <Image
              src={"/images/manga/kajiki-no-ryourinin.jpg"}
              alt={"#"}
              className="image"
              width={170}
              height={180}
            />
            <div className="font-bold text-base ">Kajiki no ryourinin</div>
          </Link>
          <div className="italic">Chap 55</div>
          <div className="italic">Chap 54</div>
          <div className="italic">...</div>
        </div>
      </div>
    </>
  );
}
