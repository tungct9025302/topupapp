"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { db } from "@/config/firestore";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  addDoc,
} from "firebase/firestore";

export default function Login() {
  let [loading, setLoading] = useState(false);

  let [moveUser, setMoveUser] = useState(false);
  let [movePW, setMovePW] = useState(false);
  let [move2ndPW, setMove2ndPW] = useState(false);

  let [inputtedUsername, setInputtedUsername] = useState(false);
  let [inputtedPwd, setInputtedPwd] = useState(false);
  let [inputted2ndPwd, setInputted2ndPwd] = useState(false);

  let [touchedUsername, setTouchedUsername] = useState(false);
  let [touchedPwd, setTouchedPwd] = useState(false);
  let [touched2ndPwd, setTouched2ndPwd] = useState(false);

  let [validUsername, setValidUsername] = useState(false);
  let [valid1stPwd, setValid1stPwd] = useState(false);
  let [valid2ndPwd, setValid2ndPwd] = useState(false);
  const router = useRouter();

  const requestCreateAccount = async () => {
    let username = (document.getElementById(`username`) as HTMLInputElement)
      .value;
    let password = (
      document.getElementById(`firstpassword`) as HTMLInputElement
    ).value;

    if (!(await checkExistData(username))) {
      await setDoc(doc(db, "accounts", username), {
        balance: 0,
        password: password,
      });
      router.push("/login");
    } else {
      alert("This username has been used. Please try with another username.");
      setLoading(false);
    }
  };

  function handleSubmitButton() {
    setLoading(true);
    requestCreateAccount();
  }

  async function checkExistData(id) {
    const userRef = doc(db, "accounts", id);
    const docSnap = await getDoc(userRef);

    if (docSnap.exists()) {
      return true;
    } else {
      return false;
    }
  }

  function checkValidUsername(field): boolean {
    const input = (document.getElementById(`${field}`) as HTMLInputElement)
      .value;

    var nameRegex = /^[a-zA-Z0-9\-]+$/;
    var uname = input.match(nameRegex);

    if (uname == null) {
      return false;
    }

    if (input.length < 3) {
      return false;
    }

    return true;
  }

  function checkValidFirstPassword(field): boolean {
    var input = (
      document.getElementById(`${field}`) as HTMLInputElement
    ).value.toString();

    var passregex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/;

    var firstpassword = input.match(passregex);

    if (firstpassword == null) {
      if (input.length < 8) {
        return false;
      }
    } else {
      return true;
    }
  }

  function checkValidSecondPassword(field): boolean {
    let input = (document.getElementById(`${field}`) as HTMLInputElement).value;
    let firstpassword = (
      document.getElementById(`firstpassword`) as HTMLInputElement
    ).value;

    if (firstpassword == input && input != "") {
      return true;
    } else {
      return false;
    }
  }

  function checkInput(field): void {
    let input = (document.getElementById(`${field}`) as HTMLInputElement).value;
    switch (field) {
      case "username":
        input ? setInputtedUsername(true) : setInputtedUsername(false);
        checkValidUsername(field)
          ? setValidUsername(true)
          : setValidUsername(false);
        break;
      case "firstpassword":
        input ? setInputtedPwd(true) : setInputtedPwd(false);
        checkValidFirstPassword(field)
          ? setValid1stPwd(true)
          : setValid1stPwd(false);
        break;
      case "secondpassword":
        input ? setInputted2ndPwd(true) : setInputted2ndPwd(false);
        checkValidSecondPassword(field)
          ? setValid2ndPwd(true)
          : setValid2ndPwd(false);
        break;
      default:
        break;
    }
  }

  function displayValidIcon() {
    return (
      <div className="absolute right-3 translate-y-0 text-green-200">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path
            fillRule="evenodd"
            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    );
  }

  function displayInvalidIcon() {
    return (
      <div className="absolute right-3 translate-y-0 text-red-200">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path
            fillRule="evenodd"
            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    );
  }

  function renderUserInput() {
    return (
      <div className="bg-black relative text-white flex flex-col items-center sm:py-16 sm:justify-center border-gray-800 border-[1px]">
        <a href="#">
          <div className="absolute left-0 top-0">
            <button
              onClick={() => {
                router.push("/login");
              }}
              type="button"
              className="w-full flex items-center justify-center w-1/2 px-5 py-2 text-md text-white transition-colors duration-200  gap-x-2 sm:w-auto dark:hover:bg-gray-800 rounded dark:bg-gray-900 hover:bg-gray-100 hover:text-black dark:text-gray-200 dark:border-gray-700"
            >
              <svg
                className="w-5 h-5 rtl:rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                />
              </svg>
            </button>
          </div>
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
            RAZER REGISTER
          </div>
        </a>

        <div className="relative mt-12 w-full max-w-lg sm:mt-10">
          <div
            className="relative -mb-px h-px w-full bg-gradient-to-r from-transparent via-sky-300 to-transparent"
            // bis_skin_checked="1"
          ></div>
          <div className="mx-5 border dark:border-b-white/50 dark:border-t-white/50 border-b-white/20 sm:border-t-white/20 shadow-[20px_0_20px_20px] shadow-slate-500/10 dark:shadow-white/20 rounded-lg border-white/20 border-l-white/20 border-r-white/20 sm:shadow-sm lg:rounded-xl lg:shadow-none">
            <div className="flex flex-col p-6">
              <h3 className="text-xl font-semibold leading-6 tracking-tighter">
                REGISTER
              </h3>
              <p className="mt-1.5 text-sm font-medium text-white/50 min-w-[335px]">
                Please enter your register information
              </p>
            </div>
            <div className="p-6 pt-0">
              <form>
                <div>
                  <div>
                    <div className="group relative rounded-lg border focus-within:border-sky-200 px-2 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-sky-300/30">
                      <div className="flex justify-between">
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
                          <div className="bg-black px-1">Username</div>
                        </label>
                        {validUsername
                          ? displayValidIcon()
                          : displayInvalidIcon()}
                      </div>
                      <div className="flex items-center">
                        <input
                          type="username"
                          id="username"
                          onSelect={() => setMoveUser(true)}
                          onBlur={() => {
                            setMoveUser(false), setTouchedUsername(true);
                          }}
                          onChange={() => checkInput("username")}
                          className="block w-full border-0 bg-transparent px-1 p-0 text-sm file:my-1 placeholder:text-muted-foreground/90 focus:outline-none focus:ring-0 focus:ring-teal-500 sm:leading-7 text-foreground"
                        />
                      </div>
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
                          <div className="bg-black px-1">Password</div>
                        </label>
                        {valid1stPwd
                          ? displayValidIcon()
                          : displayInvalidIcon()}
                      </div>
                      <div className="flex items-center">
                        <input
                          type="password"
                          id="firstpassword"
                          onSelect={() => setMovePW(true)}
                          onBlur={() => {
                            setMovePW(false), setTouchedPwd(true);
                          }}
                          onChange={() => {
                            checkInput("firstpassword"),
                              checkInput("secondpassword");
                          }}
                          className="block w-full border-0 bg-transparent px-1 p-0 text-sm file:my-1 placeholder:text-muted-foreground/90 focus:outline-none focus:ring-0 focus:ring-teal-500 sm:leading-7 text-foreground"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <div>
                    <div className="group relative rounded-lg border focus-within:border-sky-200 px-2 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-sky-300/30">
                      <div className="flex justify-between">
                        <label
                          className={
                            inputted2ndPwd
                              ? `text-xs font-medium text-muted-foreground moveup group-focus-within:text-white text-gray-400 `
                              : move2ndPW
                              ? `text-xs font-medium text-muted-foreground moveup group-focus-within:text-white text-gray-400 group-focus-within:text-sm`
                              : touched2ndPwd
                              ? "text-xs font-medium text-muted-foreground movedown group-focus-within:text-white text-gray-400 group-focus-within:text-sm"
                              : "text-xs font-medium text-muted-foreground group-focus-within:text-white text-gray-400 group-focus-within:text-sm"
                          }
                        >
                          <div className="bg-black px-1">Confirm password</div>
                        </label>
                        {valid2ndPwd
                          ? displayValidIcon()
                          : displayInvalidIcon()}
                      </div>
                      <div className="flex items-center">
                        <input
                          type="password"
                          id="secondpassword"
                          onSelect={() => setMove2ndPW(true)}
                          onBlur={() => {
                            setMove2ndPW(false), setTouched2ndPwd(true);
                          }}
                          onChange={() => checkInput("secondpassword")}
                          className="block w-full border-0 bg-transparent px-1 p-0 text-sm file:my-1 placeholder:text-muted-foreground/90 focus:outline-none focus:ring-0 focus:ring-teal-500 sm:leading-7 text-foreground"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <a
                    className="text-sm font-medium text-foreground underline"
                    href="/forgot-password"
                  >
                    Forgot password?
                  </a>

                  <button
                    type="button"
                    className={
                      validUsername && valid1stPwd && valid2ndPwd
                        ? `font-semibold hover:bg-black hover:text-white hover:ring hover:ring-white transition duration-300 inline-flex items-center justify-center rounded-md text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 bg-[#44d62c] text-black h-10 px-4 py-2 text-uppercase`
                        : `font-semibold transition duration-300 inline-flex items-center justify-center rounded-md text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 pointer-events-none disabled:opacity-50 bg-[gray] text-black h-10 px-4 py-2 text-uppercase`
                    }
                    onClick={() => {
                      handleSubmitButton();
                    }}
                  >
                    Register
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

      {/* Blur layer */}
      <div className={loading ? "blur -z-10" : ""}>
        {/* Render page  */}
        <div className="flex flex-col relative justify-center login-height bg-center bg-cover bg-local bg-[url('https://razerid-assets.razerzone.com/static/media/serpents-eye-v2-20220906.3386559c.jpg')] ">
          <div className="flex justify-center ">{renderUserInput()}</div>
        </div>
      </div>
    </>
  );
}
