import { HandThumbUpIcon,PhoneIcon,RocketLaunchIcon,WalletIcon } from "@heroicons/react/24/solid";

export default function Service() {
  return (
    <div className="grid md:grid-cols-4 gap-5 app-container">
      <div className="h-auto  bg-slate-200/55 w-full p-4">
        <div className="p-3 bg-white w-full h-full grid gap-0 justify-items-center text-center">
          <span className=" ">
            <HandThumbUpIcon
              width={80}
              hanging={8}
              stroke="white"
              fill="white"
              className="w-9 h-9 bg-slate-900 rounded-full p-2"
            />
          </span>
          <h2 className="text-xl md:text-xl lg:text-3xl ">100% satisfaction Guranted</h2>
          <p className="text-xs">
            Lorem ipsum dolor sit amet consectetur. Suspendisse laoreet
            scelerisque morbi vulputate. Quisque bibendum eget id diam elementum
            fringilla duis.{" "}
          </p>
        </div>
      </div>

      <div className="col-span-2 w-full grid gap-5">
      <div className="h-auto  bg-slate-200/55 w-full p-4">
        <div className="p-3 bg-white w-full h-full flex items-center gap-4">
          <span className=" ">
            <PhoneIcon
              width={80}
              hanging={8}
              stroke="white"
              fill="white"
              className="w-9 h-9 bg-slate-900 rounded-full p-2"
            />
          </span>
          <span className="flex flex-col gap-4">
          <h2 className="text-xl md:text-xl lg:text-3xl ">24/7 Online Services</h2>
          <p className="text-xs">
            Lorem ipsum dolor sit amet consectetur. Suspendisse laoreet
            scelerisque morbi vulputate. Quisque bibendum eget id diam elementum
            fringilla duis.{" "}
          </p>
          </span>
        </div>
      </div>
      <div className="h-auto  bg-slate-200/55 w-full p-4">
        <div className="p-3 bg-white w-full h-full flex items-center gap-4">
          <span className=" ">
            <RocketLaunchIcon
              width={80}
              hanging={8}
              stroke="white"
              fill="white"
              className="w-9 h-9 bg-slate-900 rounded-full p-2"
            />
          </span>
          <span className="flex flex-col gap-4">
          <h2 className="text-xl md:text-xl lg:text-3xl ">Fast Delivery</h2>
          <p className="text-xs">
            Lorem ipsum dolor sit amet consectetur. Suspendisse laoreet
            scelerisque morbi vulputate. Quisque bibendum eget id diam elementum
            fringilla duis.{" "}
          </p>
          </span>
        </div>
      </div>
      </div>
      <div className="h-auto  bg-slate-200/55 w-full p-4">
        <div className="p-3 bg-white w-full h-full grid gap-0 justify-items-center text-center">
          <span className=" ">
            <WalletIcon
              width={80}
              hanging={8}
              stroke="white"
              fill="white"
              className="w-9 h-9 bg-slate-900 rounded-full p-2"
            />
          </span>
          <h2 className="text-xl md:text-xl lg:text-3xl ">Payment with Secure System</h2>
          <p className="text-xs">
            Lorem ipsum dolor sit amet consectetur. Suspendisse laoreet
            scelerisque morbi vulputate. Quisque bibendum eget id diam elementum
            fringilla duis.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
