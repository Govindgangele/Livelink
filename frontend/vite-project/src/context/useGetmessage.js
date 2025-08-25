import axios from 'axios';
import { useEffect, useState } from 'react';
import useConversation from '../zustand/setselector';

function useGetmessage() {
    const [loading, setLoading] = useState(false);
    const { messages, setMessages, selectedConversation } = useConversation();

    useEffect(() => {
        const getmessage = async () => {
            if (selectedConversation && selectedConversation._id) {
                setLoading(true);
                try {
                    const response = await axios.get(
                        `/api/message/get/${selectedConversation._id}`,
                        { withCredentials: true }
                    );
                    setMessages(Array.isArray(response.data) ? response.data : []);
                } catch (error) {
                    console.log('error: in Getmessage ' + error);
                    setMessages([]); // fallback to empty array
                } finally {
                    setLoading(false);
                }
            }
        };

        getmessage();
    }, [selectedConversation, setMessages]);

    return { loading, messages, setMessages };
}

export default useGetmessage;
