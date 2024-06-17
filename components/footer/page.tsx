export default function Footer() {
  var footerList = [
    "Terms of Service",
    "Legal Terms",
    "Privacy Policy",
    "Cookie Settings",
  ];
  return (
    <div className="flex flex-col bg-[#222] pb-5 text-[12px]">
      <div className="flex justify-center">
        <div className="flex flex-col min-w-[1140px] mb-2">
          <div className="w-[100%] border-b-[1px] border-[#2e2e2e]"></div>
          <div className="flex flex-row justify-between my-5">
            <div className="text-white">
              Copyright © 2024 Razer Inc. All rights reserved.
            </div>
            <div className="flex flex-row text-[#bbb]">
              {footerList.map((a, index) => {
                return (
                  <div key={index} className="flex flex-row">
                    <div
                      className={
                        index == footerList.length - 1 ? "pl-2" : "px-2"
                      }
                    >
                      {a}
                    </div>
                    <div
                      className={
                        index == footerList.length - 1 ? "hidden" : "block"
                      }
                    >
                      |
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
