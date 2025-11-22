"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

export default function Post({ data, onDelete, highlight }) {
  const [liked, setLiked] = useState(false);

  // Generate avatar URL from post id
  const avatarSeed = data.id.toString();

  return (
    <motion.div
      animate={highlight ? { backgroundColor: ["#fef3c7", "#ffffff"] } : {}}
      transition={{ duration: 2 }}
      className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow mt-3 flex gap-4"
    >
      <img
        src={`https://avatars.dicebear.com/api/initials/${avatarSeed}.svg`}
        alt="avatar"
        className="w-12 h-12 rounded-full"
      />
      <div className="flex-1">
        <div className="flex justify-between items-center">
          <p className="font-semibold">@lurvdroid</p>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            {dayjs(data.id).fromNow()}
          </p>
        </div>
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
      </div>
    </motion.div>
  );
}
