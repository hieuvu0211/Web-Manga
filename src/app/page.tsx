'use client'
import HotManga from "@/components/hotManga";
import ListManga from "@/components/listManga";
import FollowManga from "@/components/followManga";
import "../styles/style.scss"
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-1">
      <HotManga/>
        <div className="container">
            <div className="container_item">
                <ListManga/>
            </div>
            <div className="follow_container">
                <FollowManga/>
            </div>
        </div>
    </main>
  )
}
