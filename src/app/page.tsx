import Image from "next/image";
import img from "/img/fourth.png";
import Button from "@/app/button";
import Provider from "./themeProvider";
import ThemeSwitcher from "./themeSwitcher";

export default function Home() {
  const data = [
    {
      imgPath: "/img/first.png",
      playerName: "Sacramento River Cats",
      totalEvents: "48 Events",
      sport: "Baseball",
    },
    {
      imgPath: "/img/second.png",
      playerName: "Las Vegas Aviators",
      totalEvents: "28 Events",
      sport: "Baseball",
    },
    {
      imgPath: "/img/third.png",
      playerName: "New Jersey Devils",
      totalEvents: "Ice Hockey",
      sport: "15 Events",
    },
    {
      imgPath: "/img/fourth.png",
      playerName: "Las Vegas Aviators",
      totalEvents: "28 Events",
      sport: "Baseball",
    },
  ];

  const lowerImgData = [
    {
      imgPath: "/img/lowerFirst.png",
      name: "Las Vegas Aviators",
      content: "Las Vegas Ballpark, Las Vegas, Nevada",
      button: "Take Flight Collection",
    },
    {
      imgPath: "/img/lowerSecond.png",
      name: "Sacramento River Cats",
      content: "Sutter Health Park, Sacramento, California",
      button: "Orange Collection",
    },
    {
      imgPath: "/img/lowerFirst.png",
      name: "Las Vegas Aviators",
      content: "Las Vegas Ballpark, Las Vegas, Nevada",
      button: "Take Flight Collection",
    },
  ];

  return (
    <div className="dark:bg-[#292B32] sm:px-[50px] py-[30px] bg-[#F7F7F8] font-[inter]">
      <div className="flex justify-between items-center">
        <span className="font-bold text-2xl border-b-4 p-2 m-2 border-[#738FFF]  dark:text-[white] text-[#000000]">
          Sports
        </span>{" "}
        {/* <Button /> */}
        <div className="mr-[50px]">
          <ThemeSwitcher />
        </div>
      </div>
      <div className="flex my-[50px] gap-5 flex-wrap w-[100%] justify-around text-balck dark:text-white lg:justify-between font-[inter]">
        {data.map((player) => (
          <div className=" dark:bg-[#3B3E47] bg-[#FFFFFF] px-[10px] py-[10px]  shadow-lg shadow-[#00000033] shrink-0">
            <Image
              src={player.imgPath}
              width={217}
              height={385.31}
              alt="Picture of the author"
              className="mb-[10px]"
            />

            <span className="my-[5px] font-bold text-[17px] ">
              {" "}
              {player.playerName}
            </span>
            <div className="flex justify-around dark:bg-[#292B32] bg-[#F7F7F8] mt-[10px] px-[5px] py-[5px]">
              <div>
                <span className="text-[12px] text-[#525965] dark:text-[#DFDFDF]">
                  Total Events
                </span>
                <br />{" "}
                <span className="font-semibold">{player.totalEvents}</span>
              </div>
              <div>
                <span className="text-[12px] text-[#525965] dark:text-[#DFDFDF]">
                  Sport
                </span>
                <br /> <span className="font-semibold">{player.sport}</span>
              </div>
            </div>
          </div>
        ))}
        <div className=" dark:bg-[#3B3E47] px-[10px] py-[10px]  shadow-lg shadow-[#00000033] w-[237px]">
          <div className="relative">
            <Image
              src="/img/ad.png"
              width={217}
              height={218}
              alt="Picture of the author"
              className="mb-[10px] "
            />
            <span className="absolute p-[5px] text-white bg-black top-0 right-0">
              AD
            </span>
          </div>

          <span className="my-[5px] font-bold text-[20px] ">
            {" "}
            Advertisement title
          </span>
          <article>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </article>
        </div>
      </div>
      <div className="dark:bg-gradient-to-b from-[#18282A] to-[#221A2C] bg-[#F9F8FF] sm:px-[77px] py-[77px] dark:text-white">
        <div className="mb-[20px] sm:p-[50px]">
          <div className="text-center text-[50px] md:text-[70px] font-bold mb-[20px] font-serif">
            Collection Spotlight
          </div>
          <div className="text-center font-semibold tex-[12px]">
            Discover extraordinary moments with our Spotlight Collection
            metatickets—exclusive access to premium events for an unforgettable
            experience. Grab yours today!
          </div>
        </div>
        <div className="flex align-middle items-center">
          <div className="hidden lg:visible lg:grid">
            <Image
              src="/img/leftArrow.png"
              width={36.75}
              height={49}
              alt="arrow"
            />
          </div>
          <div className="flex flex-wrap align-middle justify-around w-[100%] text-">
            {lowerImgData.map((player) => (
              <div className="relative dark:bg-[url('/img/lowerImageContainer.png')] bg-[url('/img/lowerImageWhiteBg.png')] w-[257px] h-[600px] dark:shadow-lg  dark:shadow-[#0000000D] bg-contain shrink-0">
                <Image
                  src={player.imgPath}
                  width={217}
                  height={385.31}
                  alt="Picture of the author"
                  className="relative top-[35px] mt-[7px] mr-[10px] mb-[29px] ml-[21px] shrink-0 scale-[1.2] "
                />
                <div className="relative border-[1px] border-dashed border-[#818A97] mx-[auto] mt-[58px] w-[80%]"></div>
                <div className="relative px-[20px] py-[10px]">
                  <div className="text-[17px] font-semibold text-center mt-[12px]">
                    {player.name}
                  </div>
                  <div className="text-[13px] text-center font-semibold my-[10px] ">
                    Oct 15 | Sun | 4:30 PM
                  </div>
                  <div className="text-[12px] text-center">
                    {player.content}
                  </div>
                  <div className="bg-[#000000] text-center text-white mx-[20px] my-[10px] font-semibold text-[13px] p-[2px]">
                    <div>{player.button}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div
            style={{ alignItems: "center" }}
            className="hidden lg:visible lg:grid"
          >
            <Image
              src="/img/rightArrow.png"
              width={36.75}
              height={49}
              alt="arrow"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
