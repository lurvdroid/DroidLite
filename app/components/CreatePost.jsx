"use client";

import { useState, useEffect } from "react";

export default function CreatePost({ addPost }) {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (!text) {
      setIsTyping(false);
      return;
    }
    setIsTyping(true);

    const timeout = setTimeout(() => setIsTyping(false), 1000);

    return () => clearTimeout(timeout);
  }, [text]);

  const submit = () => {
    if (!text.trim()) return;
    setLoading(true);

    setTimeout(() => {
      addPost(text);
      setText("");
      setLoading(false);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow mt-4">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="What’s happening?"
        className="w-full bg-transparent outline-none resize-none"
        disabled={loading}
      />
      <button
        onClick={submit}
        className="mt-2 px-4 py-1 bg-blue-500 text-white rounded disabled:bg-gray-400"
        disabled={!text.trim() || loading}
      >
        {loading ? (
          <svg
            className="animate-spin h-5 w-5 mx-auto text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v8H4z"
            />
          </svg>
        ) : (
          "Post"
        )}
      </button>

      {/* Typing Indicator */}
      {isTyping && !loading && (
        <p className="mt-2 text-sm italic text-gray-500 dark:text-gray-400">
          User is typing...
        </p>
      )}
    </div>
  );
}
