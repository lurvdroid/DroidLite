"use client";

import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

export default function Post({ data, onDelete, highlight }) {
  const [liked, setLiked] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    if (highlight) {
      controls.start({
        backgroundColor: ["#fef3c7", "#ffffff"], // Yellow to white
        transition: { duration: 2 },
      });
    }
  }, [highlight, controls]);

  return (
    <motion.div
      animate={controls}
      className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow mt-3"
    >
      <p className="font-semibold">@lurvdroid</p>
      <p className="my-2">{data.text}</p>

      <div className="flex gap-4 items-center">
        <motion.button
          onClick={() => setLiked(!liked)}
          whileTap={{ scale: 0.8 }}
          animate={{ scale: liked ? 1.2 : 1 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="text-xl"
          aria-label="Like post"
        >
          {liked ? "❤️" : "🤍"}
        </motion.button>

        <button onClick={onDelete} className="text-red-500 text-sm">
          Delete
        </button>
      </div>
    </motion.div>
  );
}
