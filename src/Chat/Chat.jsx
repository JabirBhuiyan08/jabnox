import { useEffect, useState } from "react";
import { db, auth } from "../firebase/firebase.config";
import {
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
  serverTimestamp,
  limit,
} from "firebase/firestore";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Sign in with Google
  const signInWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
    } catch (err) {
      setError("Failed to sign in: " + err.message);
    }
  };

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const q = query(
          collection(db, "messages"),
          orderBy("timestamp", "desc"),
          limit(100)
        );
        
        const unsubscribe = onSnapshot(q, (snapshot) => {
          const msgs = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
          }));
          setMessages(msgs.reverse()); // Show newest at bottom
          setLoading(false);
        });
        
        return unsubscribe;
      } catch (err) {
        setError("Failed to load messages: " + err.message);
        setLoading(false);
      }
    };

    fetchMessages();
  }, []);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!message.trim() || !user) return;
    
    try {
      await addDoc(collection(db, "messages"), {
        text: message,
        sender: user.displayName,
        userId: user.uid,
        photoURL: user.photoURL,
        timestamp: serverTimestamp(),
      });
      setMessage("");
    } catch (err) {
      setError("Failed to send message: " + err.message);
    }
  };

  if (loading) return <div>Loading chat...</div>;
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <div className="fixed bottom-4 text-black right-4 w-96 bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="bg-gray-800 text-white p-4">
        <h1 className="text-xl font-bold">Live Chat</h1>
        {user && (
          <div className="flex items-center mt-2">
            <img 
              src={user.photoURL} 
              alt={user.displayName} 
              className="w-8 h-8 rounded-full mr-2"
            />
            <span>{user.displayName}</span>
          </div>
        )}
      </div>

      <div className="h-64 p-4 overflow-y-auto bg-gray-50">
        {messages.length === 0 ? (
          <p className="text-gray-500">No messages yet. Be the first to chat!</p>
        ) : (
          messages.map((msg) => (
            <div key={msg.id} className="mb-3">
              <div className="flex items-start">
                {msg.photoURL && (
                  <img
                    src={msg.photoURL}
                    alt={msg.sender}
                    className="w-6 h-6 rounded-full mr-2"
                  />
                )}
                <div>
                  <div className="font-semibold text-sm">{msg.sender}</div>
                  <div className="text-gray-800">{msg.text}</div>
                  <div className="text-xs text-gray-500">
                    {msg.timestamp?.toDate().toLocaleTimeString()}
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {!user ? (
        <div className="p-4 bg-gray-100">
          <button
            onClick={signInWithGoogle}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
          >
            Sign in with Google to Chat
          </button>
        </div>
      ) : (
        <form onSubmit={sendMessage} className="p-4 border-t">
          <div className="flex">
            <input
              type="text"
              placeholder="Type a message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="flex-1 border rounded-l py-2 px-4 focus:outline-none"
            />
            <button
              type="submit"
              disabled={!message.trim()}
              className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-r disabled:opacity-50"
            >
              Send
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Chat;