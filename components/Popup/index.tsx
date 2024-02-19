import React from 'react'

interface PopupProps {
  title: string
  text: string
  text2: string
  show: boolean
  setShow: () => void
}

export default function Popup({ title, text, text2, show, setShow }: PopupProps) {
  return (
    <>
      {show ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="rounded-lg bg-white p-8 shadow-md">
            <div className="relative max-h-full w-full max-w-md">
              <div className="relative rounded-lg bg-white shadow dark:bg-gray-700">
                <div className="flex items-center justify-between rounded-t border-b p-5 dark:border-gray-600 md:p-5">
                  <h3 className="text-xl font-medium text-gray-900 dark:text-white">{title}</h3>
                  <button
                    onClick={() => {
                      setShow()
                    }}
                    type="button"
                    className="ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
                    data-modal-hide="small-modal"
                  >
                    <svg
                      className="h-3 w-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                </div>
                <div className="space-y-4 p-4 md:p-5">
                  <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    {text}
                  </p>
                  <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    {text2}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  )
}
