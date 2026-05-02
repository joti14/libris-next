import React from 'react';
import Marquee from 'react-fast-marquee';
const marqueeItems = [
    {
        id: 1,
        type: "new_arrival",
        label: "New Arrival",
        text: "The Midnight Library",
        author: "Matt Haig"
    },
    {
        id: 2,
        type: "promotion",
        label: "Special Offer",
        text: "Special Discount on Annual Memberships — 40% Off",
        author: null
    },
    {
        id: 3,
        type: "new_arrival",
        label: "New Arrival",
        text: "Atomic Habits",
        author: "James Clear"
    },
    {
        id: 4,
        type: "new_arrival",
        label: "Now Available",
        text: "A Brief History of Time",
        author: "Stephen Hawking"
    },
    {
        id: 5,
        type: "new_arrival",
        label: "New Arrival",
        text: "The Lost Bookshop",
        author: "Evie Woods"
    },
    {
        id: 6,
        type: "promotion",
        label: "Limited Time",
        text: "Free Membership for First 3 Months — New Users Only",
        author: null
    },
    {
        id: 7,
        type: "new_arrival",
        label: "New Arrival",
        text: "Deep Work",
        author: "Cal Newport"
    },
    {
        id: 8,
        type: "new_arrival",
        label: "Now Available",
        text: "Klara and the Sun",
        author: "Kazuo Ishiguro"
    },
    {
        id: 9,
        type: "promotion",
        label: "Feature",
        text: "Borrow Up to 5 Books at Once with Premium Plan",
        author: null
    },
    {
        id: 10,
        type: "new_arrival",
        label: "New Arrival",
        text: "Sapiens",
        author: "Yuval Noah Harari"
    }
];

const Announcement = () => {
    return (
        <div>
            <Marquee className="bg-red-800 py-2" pauseOnHover={true} speed={50}>
                <div className=" flex gap-12  whitespace-nowrap">
                    {marqueeItems.map((item) => (
                        <span key={item.id} className="text-white text-sm">
                            {item.type === "new_arrival" ? (
                                <>✦ {item.label}: <strong>{item.text}</strong>{item.author && ` — ${item.author}`}</>
                            ) : (
                                <>✦ {item.text}</>
                            )}
                            <span className="text-yellow-400 font-bold mx-4">|</span>
                        </span>
                    ))}
                </div>
            </Marquee>
        </div>
    );
};

export default Announcement;