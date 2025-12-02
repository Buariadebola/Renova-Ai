import { createContext, useEffect, useState, useRef } from "react";
import main from '../Components/OpenAi'

const ChatAiContext = createContext();

const ContextProvider = (props) => {

    const msgEnd = useRef(null);


    const [input, setInput] = useState("");
    const [imageInput, setImageInput] = useState(null);
    const [dragActive, setDragActive] = useState(false);
    const [showResult, setShowResult] = useState(false);
    const [recentPrompt, setRecentPrompt] = useState("");
    const [prevPrompts, setPrevPrompts] = useState([]);
    const [resultData, setResultData] = useState('');
    const [loading, setLoading] = useState(false);
    const [fileOpen, setFileOpen] = useState(false);
    const [messages, setMessages] = useState([
        {
        text: "Hi, i am Renova AI, A text-based chatbot developed by Renova Codes. I'm designed to understand and generate human-like response based on the input i receive. You can ask me questions, seek information and even request assistance with various tasks. Let me know how i can help you!",
        isBot: true,
        }
    ])

    const handleFileOpen = () => {
        setFileOpen(! fileOpen)
    }

        const newChat = () => {
        setLoading(false)
        setShowResult(false)
    }

    const handleDragOver = (e) => {
        e.preventDefault();
        setDragActive(true);
    }

    const handleDragLeave = () => setDragActive(false);

    const handleDrop = (e) => {
        e.preventDefault();
        setDragActive(false);

        const file = e.dataTransfer.files[0];
        if (file?.type.startsWith('image/')) {
            setImageInput(file);
        }
    }

    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        if (file?.type.startsWith('image/')) {
            setImageInput(file);
        }
    }

const handleSend = async (textArg = null, imageArg = null) => {
    const text = textArg !== null ? textArg : input;
    const image = imageArg !== null ? imageArg : imageInput;

    if (!text.trim() && !image) return;

    setInput("");
    setLoading(true);
    setShowResult(true);

    if (text.trim()) {
        setRecentPrompt(text);
        setPrevPrompts(prev => [...prev, text]);
    }

    setMessages(prev => [
        ...prev,
        {
            text,
            image: image ? URL.createObjectURL(image) : null,
            isBot: false
        }
    ]);

     setMessages(prev => [
        ...prev,
        {
            text: "", 
            isBot: true,
            loading: true
        }
    ]);

    const res = await main(text, image);

    const formatted = formatMarkdown(res);
    function formatMarkdown(text) {
  return text
    // Bold **text**
    .replace(/\*\*(.*?)\*\*/g, "<b>$1</b>")

    // Italic *text*
    .replace(/\*(.*?)\*/g, "<i>$1</i>")

    // Bullets
    .replace(/^\s*\*\s+(.*)$/gm, "<li>$1</li>")

    // Newlines → <br/>
    .replace(/\n/g, "<br/>");
}

    setResultData(formatted);

    setMessages(prev => {
        const updated = [...prev];
        updated[updated.length - 1] = {
            text: formatted,
            isBot: true
        };
        return updated;
    });

    setImageInput(null);
    setFileOpen(false)
    setLoading(false);
};

useEffect(() => {
  if (msgEnd.current) {
    msgEnd.current.scrollIntoView({ behavior: 'smooth' });
  }
}, [messages]);

    const handleEnter = async (e) => {
        if (e.key  === 'Enter') await handleSend();
    }

    const contextValue = {
        handleSend,
        messages,
        handleEnter,
        input,
        setInput,
        loading,
        showResult,
        newChat,
        recentPrompt,
        setRecentPrompt,
        prevPrompts,
        setPrevPrompts,
        resultData,
        msgEnd,
        dragActive,
        handleDragOver,
        handleDragLeave,
        handleDrop,
        handleFileUpload,
        imageInput,
        setImageInput,
        handleFileOpen,
        fileOpen
    }

    return(
        <ChatAiContext.Provider value={contextValue}>
            {props.children}
        </ChatAiContext.Provider>
    )
}

export {ContextProvider, ChatAiContext}