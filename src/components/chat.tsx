import { useState } from "react";
import axios from "axios";
import styles from "./Chatbot.module.css";

type Message = {
  from: "user" | "bot";
  text: string;
};

export default function Chatbot() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => setIsOpen(!isOpen);

  const sendMessage = async () => {
    if (!input.trim()) return;

    // Add user message
    setMessages((prev) => [...prev, { from: "user", text: input }]);
    const userInput = input;
    setInput("");

    try {
      // 1️⃣ Retrieve context from Qdrant (RAG)
      const qdrantResponse = await axios.post(
        `https://qdrant-api-host/collections/${process.env.NEXT_PUBLIC_QDRANT_COLLECTION}/points/search`,
        { vector: [], top: 3 }, // replace with proper embeddings
        { headers: { "api-key": process.env.NEXT_PUBLIC_QDRANT_API_KEY } }
      );

      const contextText = qdrantResponse.data?.result
        ?.map((item: any) => item.payload.text)
        .join("\n") || "";

      // 2️⃣ Ask Gemini API
      const response = await axios.post(
        "https://api.generative.ai/v1beta2/models/text-bison-001:generate",
        {
          prompt: `Answer the following question based ONLY on the textbook content below:\n\n${contextText}\n\nQuestion: ${userInput}`,
          temperature: 0.3,
          max_output_tokens: 500,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${process.env.NEXT_PUBLIC_GEMINI_API_KEY}`,
          },
        }
      );

      const botReply = response.data?.candidates?.[0]?.content || "Sorry, I cannot answer that.";
      setMessages((prev) => [...prev, { from: "bot", text: botReply }]);
    } catch (error) {
      console.error(error);
      setMessages((prev) => [...prev, { from: "bot", text: "Error fetching answer. Try again." }]);
    }
  };

  return (
    <div className={styles.chatWrapper}>
      {/* Floating Icon */}
      <button className={styles.chatToggle} onClick={toggleChat}>
        💬
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className={styles.chatbot}>
          <div className={styles.header}>
            <span>Book Assistant</span>
            <button onClick={toggleChat}>✕</button>
          </div>

          <div className={styles.messages}>
            {messages.map((m, i) => (
              <div key={i} className={m.from === "user" ? styles.userMessage : styles.botMessage}>
                <strong>{m.from === "user" ? "You" : "Bot"}:</strong> {m.text}
              </div>
            ))}
          </div>

          <div className={styles.inputArea}>
            <input
              type="text"
              placeholder="Ask about the textbook..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
}
