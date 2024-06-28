"use client";
import { useState, useEffect } from "react";

//Firestore
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../../config/firestore";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/lib/store";

export default function MyWallet() {
  const logged = useAppSelector((state): string => state["value"]["username"]);

  const router = useRouter();

  let [moveUser, setMoveUser] = useState(false);
  let [movePW, setMovePW] = useState(false);
  let [inputtedUsername, setInputtedUsername] = useState(false);
  let [inputtedPwd, setInputtedPwd] = useState(false);
  let [touchedUsername, setTouchedUsername] = useState(false);
  let [touchedPwd, setTouchedPwd] = useState(false);
  let [loading, setLoading] = useState(false);
  let [balance, setBalance] = useState(0);

  useEffect(() => {
    setLoading(true);

    if (!logged) {
      router.push("/login");
    } else {
      setInterval(function () {
        setLoading(false);
      }, 1000);
    }

    loadBalance();
  }, [logged, router]);

  function handleSubmit() {
    setLoading(true);
    confirm();
  }

  const confirm = async () => {
    let seri = (document.getElementById(`seri`) as HTMLInputElement).value;
    let passcode = (document.getElementById(`passcode`) as HTMLInputElement)
      .value;

    if (await checkExistData(seri, passcode)) {
      let priceToAdd = await getPrice(seri);
      await updateCardValidity(seri);
      await updateBalance(priceToAdd);
      setBalance(balance + priceToAdd);
      setLoading(false);
      alert(`Successfully top up ${priceToAdd} USD to your balance.`);
    } else {
      alert("Incorrect seri or passcode.");
      (document.getElementById(`seri`) as HTMLInputElement).value = "";
      (document.getElementById(`passcode`) as HTMLInputElement).value = "";
      checkInput("seri");
      checkInput("passcode");
      setLoading(false);
    }
  };

  const loadBalance = async () => {
    const userRef = doc(db, "accounts", logged);
    const docSnap = await getDoc(userRef);
    const curBalance = docSnap.get("balance");
    setBalance(curBalance);
  };

  const updateBalance = async (priceToAdd) => {
    const newBalance = balance + priceToAdd;
    await setDoc(
      doc(db, "accounts", logged),
      { balance: newBalance },
      { merge: true }
    );
  };

  async function checkExistData(inputted_seri, inputted_passcode) {
    const cardRef = doc(db, "cards", inputted_seri);
    const docSnap = await getDoc(cardRef);
    const passcode = docSnap.get("passcode");
    const valid = docSnap.get("valid");

    if (passcode == inputted_passcode && valid) {
      return true;
    } else {
      return false;
    }
  }

  async function getPrice(inputted_seri) {
    const cardRef = doc(db, "cards", inputted_seri);
    const docSnap = await getDoc(cardRef);
    const price = docSnap.get("price");

    if (price) {
      return price;
    } else {
      return 0;
    }
  }

  async function updateCardValidity(inputted_seri) {
    await setDoc(
      doc(db, "cards", inputted_seri),
      { valid: false },
      { merge: true }
    );
  }

  function checkInput(field): void {
    const input = (document.getElementById(`${field}`) as HTMLInputElement)
      .value;
    switch (field) {
      case "seri":
        input ? setInputtedUsername(true) : setInputtedUsername(false);
        break;
      case "passcode":
        input ? setInputtedPwd(true) : setInputtedPwd(false);
        break;
      default:
        break;
    }
  }

  function renderUserInput() {
    return (
      <div className="relative bg-black text-white flex flex-col items-center sm:py-16 sm:justify-center border-gray-800 border-[1px]">
        <div className="text-foreground font-semibold text-2xl tracking-tighter mx-auto flex items-center gap-2 text-uppercase">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672Zm-7.518-.267A8.25 8.25 0 1 1 20.25 10.5M8.288 14.212A5.25 5.25 0 1 1 17.25 10.5"
              />
            </svg>
          </div>
          My Wallet
        </div>
        <div>{balance.toFixed(2) + " USD"}</div>
        <div className="relative mt-12 w-full max-w-lg sm:mt-10">
          <div className="relative -mb-px h-px w-full bg-gradient-to-r from-transparent via-sky-300 to-transparent"></div>
          <div className="mx-5 border dark:border-b-white/50 dark:border-t-white/50 border-b-white/20 sm:border-t-white/20 shadow-[20px_0_20px_20px] shadow-slate-500/10 dark:shadow-white/20 rounded-lg border-white/20 border-l-white/20 border-r-white/20 sm:shadow-sm lg:rounded-xl lg:shadow-none">
            <div className="flex flex-col p-6">
              <h3 className="text-xl font-semibold leading-6 tracking-tighter">
                Top up
              </h3>
              <p className="mt-1.5 text-sm font-medium text-white/50 min-w-[335px]">
                Please enter your card information.
              </p>
            </div>
            <div className="p-6 pt-0">
              <form>
                <div>
                  <div>
                    <div className="group relative rounded-lg border focus-within:border-sky-200 px-2 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-sky-300/30">
                      <div className="flex justify-between field">
                        <label
                          className={
                            inputtedUsername
                              ? `text-xs font-medium text-muted-foreground moveup group-focus-within:text-white text-gray-400 `
                              : moveUser
                              ? `text-xs font-medium text-muted-foreground moveup group-focus-within:text-white text-gray-400 group-focus-within:text-sm`
                              : touchedUsername
                              ? "text-xs font-medium text-muted-foreground movedown group-focus-within:text-white text-gray-400 group-focus-within:text-sm"
                              : "text-xs font-medium text-muted-foreground group-focus-within:text-white text-gray-400 group-focus-within:text-sm"
                          }
                        >
                          <div className="bg-black px-1">Seri</div>
                        </label>
                      </div>
                      <input
                        type="text"
                        id="seri"
                        autoComplete="off"
                        onSelect={() => {
                          setMoveUser(true), setTouchedUsername(true);
                        }}
                        onBlur={() => setMoveUser(false)}
                        onChange={() => checkInput("seri")}
                        className="block w-full border-0 bg-transparent px-1 p-0 text-sm file:my-1 file:rounded-full file:border-0 file:bg-accent file:px-4 file:py-2 file:font-medium placeholder:text-muted-foreground/90 focus:outline-none focus:ring-0 sm:leading-7 text-foreground"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <div>
                    <div className="group relative rounded-lg border focus-within:border-sky-200 px-2 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-sky-300/30">
                      <div className="flex justify-between">
                        <label
                          className={
                            inputtedPwd
                              ? `text-xs font-medium text-muted-foreground moveup group-focus-within:text-white text-gray-400 `
                              : movePW
                              ? `text-xs font-medium text-muted-foreground moveup group-focus-within:text-white text-gray-400 group-focus-within:text-sm`
                              : touchedPwd
                              ? "text-xs font-medium text-muted-foreground movedown group-focus-within:text-white text-gray-400 group-focus-within:text-sm"
                              : "text-xs font-medium text-muted-foreground group-focus-within:text-white text-gray-400 group-focus-within:text-sm"
                          }
                        >
                          <div className="bg-black px-1">Passcode</div>
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="text"
                          id="passcode"
                          onSelect={() => setMovePW(true)}
                          onBlur={() => {
                            setMovePW(false), setTouchedPwd(true);
                          }}
                          onChange={() => checkInput("passcode")}
                          className="block w-full border-0 bg-transparent px-1 p-0 text-sm file:my-1 placeholder:text-muted-foreground/90 focus:outline-none focus:ring-0 focus:ring-teal-500 sm:leading-7 text-foreground"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-end gap-x-2">
                  <button
                    className={
                      inputtedUsername && inputtedPwd
                        ? `font-semibold hover:bg-black hover:text-white hover:ring hover:ring-white transition duration-300 inline-flex items-center justify-center rounded-md text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-[#44d62c] text-black h-10 px-4 py-2 text-uppercase`
                        : `font-semibold transition duration-300 inline-flex items-center justify-center rounded-md text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 pointer-events-none disabled:opacity-50 bg-[gray] text-black h-10 px-4 py-2 text-uppercase`
                    }
                    type="button"
                    onClick={() => {
                      handleSubmit();
                    }}
                  >
                    Confirm
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Load animation */}
      <div className={loading ? "" : "hidden"}>
        <svg
          aria-hidden="true"
          className="w-12 h-12 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600 top-[50%] left-[50%] absolute z-10"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
        <span className="sr-only">Loading...</span>
      </div>
      <div className={loading ? "blur -z-10" : ""}>
        <div className="flex flex-col justify-center login-height bg-center bg-cover bg-local bg-[url('https://razerid-assets.razerzone.com/static/media/serpents-eye-v2-20220906.3386559c.jpg')] ">
          <div className="flex justify-center ">{renderUserInput()}</div>
        </div>
      </div>
    </>
  );
}
