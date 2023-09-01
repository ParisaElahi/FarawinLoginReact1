import ChatBox from "./ChatBox";
import Sidebar from "./Sidebar";
import farawin from "farawin";
import { useState, useEffect } from "react";

export default function Chat() {
  const [contact, setContact] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);
  const [allChats, setAllChats] = useState([]);
  const [sender, setSender] = useState([]);
  const [receiver, setReceiver] = useState([]);
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    getContact();
    getChats();
  }, []);

  useEffect(() => {
    if (selectedContact) {
      filterChats();
    } else {
      setSender([]);
      setReceiver([]);
    }
  }, [selectedContact, allChats]);

  const handleOpenMenu = () => {
    setOpenMenu(true);
  };

  const handleCloseMenu = () => {
    setOpenMenu(false);
  };

  const getContact = async () => {
    const res = await farawin.getContacts();
    const filteredContacts = res.contactList.filter(
      (contact) => contact.ref === localStorage.myUsername
    );
    setContact(filteredContacts);
  };

  const getChats = async () => {
    const res = await farawin.getChats();
    setAllChats(res.chatList);
  };

  const filterChats = () => {
    const filteredSender = allChats.filter(
      (chat) =>
        chat.sender === localStorage.myUsername &&
        chat.receiver === selectedContact.username
    );
    const filteredReceiver = allChats.filter(
      (chat) =>
        chat.sender === selectedContact.username &&
        chat.receiver === localStorage.myUsername
    );

    setSender(filteredSender);
    setReceiver(filteredReceiver);
  };
  //console.log(allChats);
  // const lastMessageContact = () => {
  //   const chatMyContact = allChats.filter(
  //     (chat) =>
  //       chat.sender === contact.username &&
  //       chat.receiver === localStorage.myUsername
  //   );

  //   console.log(contact[1].username);
  //   return chatMyContact;
  // };
  // lastMessageContact();

  const handleContactButtonClick = () => {
    getContact();
  };

  const handleChatBoxButtonClick = () => {
    getChats();
  };

  return (
    <div className="box-border bg-[#34393C] w-screen h-screen pl-10 pt-5 pr-10 pb-14 text-white font-mono text-right cursor-default ">
      <div
        id="container"
        className="w-full h-full m-auto mt-5 p-2 rounded-3xl flex flex-row bg-[#202329] max-lg:relative relative "
      >
        <ChatBox
          selectedContact={selectedContact}
          sender={sender}
          receiver={receiver}
          handleContactButtonClick={handleChatBoxButtonClick}
          openMenu={handleOpenMenu}
        />
        <Sidebar
          openMenu={openMenu}
          closeMenu={handleCloseMenu}
          contact={contact}
          setSelectedContact={setSelectedContact}
          handleContactButtonClick={handleContactButtonClick}
          allChats={allChats}
        />
      </div>
    </div>
  );
}
