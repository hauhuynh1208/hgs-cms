import { Dispatch, SetStateAction } from "react";
import { Transition, Dialog } from "@headlessui/react";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { THEME } from "@/constant/theme";
import { Routes } from "@/routes/routes";

export interface SidebarProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export default function Sidebar({ isOpen, setIsOpen }: SidebarProps) {
  const generateSidebarRoute = () => {
    return Routes.map((route, index) => (
      <Link to={route.path}>
        <div key={index}>{route.name}</div>
      </Link>
    ));
  };
  return (
    <>
      <div
        className={clsx(
          "hidden md:block md:w-1/4 lg:w-1/4 h-full",
          THEME.SIDEBAR_BG
        )}
      >
        <div className="p-4">
          <h2 className="text-xl font-bold">Sidebar Content</h2>
          <div className="flex flex-col">{generateSidebarRoute()}</div>
        </div>
      </div>

      {/* Slide-in Sidebar Modal (visible below sm) */}
      <Transition show={isOpen} as="div" className="relative z-50">
        <Dialog
          as="div"
          className="fixed inset-0 z-50"
          onClose={() => setIsOpen(false)}
        >
          <div
            className="fixed inset-0 bg-black bg-opacity-50"
            onClick={() => setIsOpen(false)}
          />

          <Transition.Child
            as={Dialog.Panel}
            enter="transition ease-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
            className={clsx(
              "absolute top-0 left-0 w-3/4 h-full shadow-lg",
              THEME.SIDEBAR_BG
            )}
          >
            <div className="p-4">
              <h2 className="text-xl font-bold">Sidebar Content</h2>
              <p>Some sidebar content here...</p>
            </div>

            {/* Close Button inside the sidebar */}
            <button
              className="absolute top-4 right-4"
              onClick={() => setIsOpen(false)}
            >
              <svg
                className="h-6 w-6 text-gray-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  );
}
