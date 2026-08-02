"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

import styles from "@/public/css/account.module.css";
import { leotaroFree } from "@/app/layout";

interface ModalChatProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ModalChatComponent({ isOpen, onClose }: ModalChatProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="modalBoxPainting relative z-10 w-full max-w-lg rounded-[20px] shadow-2xl p-6"
          >
            <div className={styles.rating_card}>
              <button
                onClick={onClose}
                className={` transition p-1 ${styles.closeModal}`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="15" y1="9" x2="9" y2="15"></line>
                  <line x1="9" y1="9" x2="15" y2="15"></line>
                </svg>
              </button>
            <div className={styles.text_wrapper}>
                <p className={`${styles.text_primary} txtGold ${leotaroFree.className}`}>Rate Your Experience</p>
                <p className={styles.text_secondary}>to help us serve you better</p>
            </div>

            <div className={`${styles.rating_stars_container}`}>
               <input value="star_5" name="star" id="star_5" type="radio" />
                <label htmlFor="star_5" className={styles.star_label}>
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path
                    d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                    pathLength="360"
                    ></path>
                </svg>
                </label>

               <input value="star_4" name="star" id="star_4" type="radio" />
                <label htmlFor="star_4" className={styles.star_label}>
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path
                    d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                    pathLength="360"
                    ></path>
                </svg>
                </label>

                <input value="star_3" name="star" id="star_3" type="radio" />
                <label htmlFor="star_3" className={styles.star_label}>
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path
                    d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                    pathLength="360"
                    ></path>
                </svg>
                </label>

                <input value="star_2" name="star" id="star_2" type="radio" />
                <label htmlFor="star_2" className={styles.star_label}>
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path
                    d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                    pathLength="360"
                    ></path>
                </svg>
                </label>

                <input value="star_1" name="star" id="star_1" type="radio" />
                <label htmlFor="star_1" className={styles.star_label}>
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path
                    d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                    pathLength="360"
                    ></path>
                </svg>
                </label>
            </div>

                <div className={styles.input_evaluation}>
                <textarea name="" id="" placeholder="Enter text..."></textarea>
                </div>

                <Link href={""} className={`${styles.btnChat}`}><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-send-icon lucide-send"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"/><path d="m21.854 2.147-10.94 10.939"/></svg> Send Rather</Link>

            <div className={styles.socials_container}>
                <a className={styles.social_button} href="#">
                <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                    <path
                    d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"
                    ></path>
                </svg>
                </a>
                <a className={styles.social_button} href="#">
                <svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                    <path
                    d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                    ></path>
                </svg>
                </a>
                <a className={styles.social_button} href="#">
                <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                    <path
                    d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
                    ></path>
                </svg>
                </a>
            </div>
            </div>


          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}