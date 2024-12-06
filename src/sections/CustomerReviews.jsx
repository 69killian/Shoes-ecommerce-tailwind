// CustomerReviews.tsx
import { useState, useEffect } from "react";

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/james",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img, name, username, body }: { img: string; name: string; username: string; body: string }) => {
  return (
    <figure className="relative w-64 cursor-pointer overflow-hidden rounded-[4px] border p-3 my-2 text-[#266131] bg-white border border-solid border-[#266131] transition-shadow duration-300 ease-in-out shadow-[4px_4px_0px_#266131] hover:shadow-none ">
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt={name} src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium font-montserrat">{name}</figcaption>
          <p className="text-xs font-medium font-montserrat">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm font-montserrat text-slate-gray">{body}</blockquote>
    </figure>
  );
};

function CustomerReviews() {
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const marqueeElements = document.querySelectorAll(".marquee");
    const handleMouseEnter = () => setPaused(true);
    const handleMouseLeave = () => setPaused(false);

    marqueeElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      marqueeElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
    <div className="flex justify-center text-center py-6 mb-[-100px]">
   <h2 className="font-montserrat text-4xl capitalize font-bold lg:max-w-lg z-10">They <span className="text-[#266131]">loved</span> Our Products :
   </h2>
   </div>
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden">
      <div className="marquee flex gap-4 animate-marquee">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </div>
      <div className="marquee flex gap-4 animate-marquee-reverse">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-pale-blue dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-pale-blue dark:from-background"></div>
    </div>
    </>
  );
}

export default CustomerReviews; 
