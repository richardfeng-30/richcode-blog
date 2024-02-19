import React from 'react';

interface PopupProps {
    title: string;
    text: string;
    text2: string;
    show: boolean;
    setShow: () => void;
}

export default function Popup({ title, text, text2, show, setShow }: PopupProps) {
    return (
        <>
        {show ? (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
                <div className="bg-white rounded-lg p-8 shadow-md">
                    <div className="relative w-full max-w-md max-h-full">
                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                            <div className="flex items-center justify-between p-5 md:p-5 border-b rounded-t dark:border-gray-600">
                                <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                                    {title}
                                </h3>
                                <button onClick={() => {setShow()}} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="small-modal">
                                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                    </svg>
                                    <span className="sr-only">Close modal</span>
                                </button>
                            </div>
                            <div className="p-4 md:p-5 space-y-4">
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