"use client";

import { useMemo, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { model } from "../firebase";

const SITE_CONTEXT = `
You are the support assistant for the Fitness-room website.
Only answer questions related to this website and its content.

Website content summary:
- Hero section: "get healthy body with the perfect exercice", CTA "Get stared", "Watch Video".
- Stats shown: 305+ Expert Trainers, 905+ Member Joined, 700+ Fitness Programs.
- Programs section headline: "The Best programs we Offers for you".
- Why choose fitness services:
  - Personal Trainig
  - Expert Trainer
  - Flexible Time
- Pricing section: "Choose the best plan", with sample prices like $99 and $299 per month.
- Testimonials and client cards are displayed in slider/cards.

Behavior rules:
1) Be warm, respectful, and polite.
2) If a question is unrelated to this website, politely refuse and redirect to website-related help.
3) Do not invent features/pages that are not listed in the context above.
4) Keep responses clear and short unless the user asks for more details.
5) Use a professional tone: concise, structured, and helpful.
6) If the user asks for services, plans, comparisons, features, or "list", format the answer as a Markdown table.
7) For lists, avoid long paragraphs; prefer bullets or a table with clear headings.
`;

function formatPrompt(userMessage) {
  return `${SITE_CONTEXT}

User question: ${userMessage}

Respond as the website assistant.`;
}

function parseMarkdownTable(text) {
  const lines = text
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

  const firstTableLine = lines.findIndex((line) => line.startsWith("|") && line.endsWith("|"));
  if (firstTableLine === -1 || firstTableLine + 1 >= lines.length) return null;

  const headerLine = lines[firstTableLine];
  const separatorLine = lines[firstTableLine + 1];
  const isSeparator = /^\|(?:\s*:?-+:?\s*\|)+$/.test(separatorLine);
  if (!isSeparator) return null;

  const header = headerLine
    .split("|")
    .map((cell) => cell.trim())
    .filter(Boolean);

  const rows = [];
  for (let index = firstTableLine + 2; index < lines.length; index += 1) {
    const line = lines[index];
    if (!line.startsWith("|") || !line.endsWith("|")) break;
    const row = line
      .split("|")
      .map((cell) => cell.trim())
      .filter(Boolean);
    if (row.length === header.length) rows.push(row);
  }

  if (!header.length || !rows.length) return null;
  return { header, rows };
}

function renderPlainText(text) {
  const normalizedText = text
    .replace(/\*\*(.*?)\*\*/g, "$1")
    .replace(/__(.*?)__/g, "$1");

  return normalizedText.split("\n").map((line, index) => (
    <p key={`${line}-${index}`} className="leading-relaxed">
      {line || " "}
    </p>
  ));
}

function MessageBody({ text }) {
  const table = parseMarkdownTable(text);
  if (!table) return <div className="space-y-1">{renderPlainText(text)}</div>;

  return (
    <div className="space-y-2">
      <div className="overflow-x-auto rounded-lg border border-slate-600">
        <table className="w-full border-collapse text-left text-xs">
          <thead className="bg-slate-700/80 text-slate-100">
            <tr>
              {table.header.map((item) => (
                <th key={item} className="border-b border-slate-600 px-2 py-2 font-semibold">
                  {item}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-slate-800/60 text-slate-100">
            {table.rows.map((row, rowIndex) => (
              <tr key={`${row[0]}-${rowIndex}`}>
                {row.map((cell, cellIndex) => (
                  <td key={`${cell}-${cellIndex}`} className="border-b border-slate-700 px-2 py-2 align-top">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-slate-300">Presented in table format for quick comparison.</p>
    </div>
  );
}

export default function AiAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const panelRef = useRef(null);
  const messagesRef = useRef(null);
  const launcherRef = useRef(null);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text: "Welcome to Fitness-room. I am here to help with website-specific questions about services, plans, and sections. If you ask for a list, I can present it in a clean table.",
    },
  ]);

  const canSend = useMemo(() => input.trim().length > 0 && !isLoading, [input, isLoading]);

  useGSAP(
    () => {
      if (!panelRef.current && !launcherRef.current) return;

      if (isOpen && panelRef.current) {
        gsap.fromTo(
          panelRef.current,
          { autoAlpha: 0, y: 24, scale: 0.95 },
          { autoAlpha: 1, y: 0, scale: 1, duration: 0.32, ease: "power2.out" }
        );
      }

      if (!isOpen && launcherRef.current) {
        gsap.fromTo(
          launcherRef.current,
          { autoAlpha: 0.6, y: 8, scale: 0.95 },
          { autoAlpha: 1, y: 0, scale: 1, duration: 0.25, ease: "power2.out" }
        );
      }
    },
    { dependencies: [isOpen] }
  );

  useGSAP(
    () => {
      if (!messagesRef.current) return;
      const children = messagesRef.current.querySelectorAll("[data-chat-message='true']");
      if (!children.length) return;
      const lastNode = children[children.length - 1];
      gsap.fromTo(
        lastNode,
        { autoAlpha: 0, y: 14 },
        { autoAlpha: 1, y: 0, duration: 0.22, ease: "power2.out" }
      );
      lastNode.scrollIntoView({ behavior: "smooth", block: "nearest" });
    },
    { dependencies: [messages.length, isLoading] }
  );

  const handleSend = async () => {
    const message = input.trim();
    if (!message || isLoading) return;

    setInput("");
    setIsLoading(true);
    setMessages((prev) => [...prev, { role: "user", text: message }]);

    try {
      const result = await model.generateContent(formatPrompt(message));
      const reply =
        result?.response?.text?.().trim() ||
        "I am sorry, I could not generate a response right now.";

      setMessages((prev) => [...prev, { role: "assistant", text: reply }]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: "Sorry, I could not process that request right now. Please try again in a moment.",
        },
      ]);
      console.error("AI assistant error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[999]">
      {isOpen ? (
        <div
          ref={panelRef}
          className="w-[380px] max-w-[92vw] rounded-2xl border border-slate-700 bg-slate-900 shadow-2xl"
        >
          <div className="flex items-center justify-between rounded-t-2xl border-b border-slate-700 bg-slate-800 px-4 py-3">
            <h3 className="text-sm font-semibold text-white">Fitness-room Assistant</h3>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="rounded-md bg-slate-700 px-2 py-1 text-xs text-slate-100 transition hover:bg-slate-600"
            >
              Close
            </button>
          </div>

          <div ref={messagesRef} className="h-[360px] space-y-3 overflow-y-auto px-4 py-3">
            {messages.map((message, index) => (
              <div
                key={`${message.role}-${index}`}
                data-chat-message="true"
                className={`max-w-[90%] rounded-xl px-3 py-2 text-sm ${
                  message.role === "assistant"
                    ? "bg-slate-800 text-slate-100"
                    : "ml-auto bg-red-700 text-white"
                }`}
              >
                <MessageBody text={message.text} />
              </div>
            ))}
            {isLoading && (
              <div className="max-w-[90%] rounded-xl bg-slate-800 px-3 py-2 text-sm text-slate-300">
                Thinking...
              </div>
            )}
          </div>

          <div className="flex items-center gap-2 border-t border-slate-700 px-3 py-3">
            <input
              type="text"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter") handleSend();
              }}
              placeholder="Ask about programs, plans, or services..."
              className="w-full rounded-xl border border-slate-600 bg-slate-800 px-3 py-2 text-sm text-white outline-none placeholder:text-slate-400 focus:border-red-500"
            />
            <button
              type="button"
              onClick={handleSend}
              disabled={!canSend}
              className="rounded-xl bg-red-700 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-600 disabled:cursor-not-allowed disabled:opacity-60"
            >
              Send
            </button>
          </div>
        </div>
      ) : (
        <button
          ref={launcherRef}
          type="button"
          onClick={() => setIsOpen(true)}
          className="rounded-full bg-red-700 px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-red-600"
        >
          Chat with assistant
        </button>
      )}
    </div>
  );
}
