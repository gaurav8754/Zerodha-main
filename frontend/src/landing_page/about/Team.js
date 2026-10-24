import React, { useState } from "react";

const teamMembers = [
  {
    name: "Nikhil Kamath",
    role: "Co-founder & CFO",
    image: "/media/images/Nikhil.jpg",
    bio: "Nikhil is an astute and experienced investor, and he heads financial planning at Zerodha. An avid reader, he always appreciates a good game of chess.",
  },
  {
    name: "Dr. Kailash Nadh",
    role: "CTO",
    image: "/media/images/Kailash.jpg",
    bio: "Kailash has a PhD in Artificial Intelligence & Computational Linguistics, and is the brain behind all our technology and products. He has been a developer from his adolescence and continues to write code every day.",
  },
  {
    name: "Venu Madhav",
    role: "COO",
    image: "/media/images/Venu.jpg",
    bio: "Venu is the backbone of Zerodha taking care of operations and ensuring that we are compliant to rules and regulations. He has over a dozen certifications in financial markets and is also proficient in technical analysis. Workouts, cycling, and adventuring is what he does to unwind.",
  },
  {
    name: "Seema Patil",
    role: "Director",
    image: "/media/images/Seema.jpg",
    bio: "Seema who has lead the quality team since the beginning of Zerodha, is now a director. She is an extremely disciplined fitness enthusiast.",
  },
  {
    name: "Karthik Rangappa",
    role: "Chief of Education",
    image: "/media/images/karthik.jpg",
    bio: 'Karthik "Guru" Rangappa single handledly wrote Varsity, Zerodha\'s massive educational program. He heads investor education initiatives at Zerodha and loves stock markets, classic rock, single malts, and photography.',
  },
  {
    name: "Austin Prakesh",
    role: "Director Strategy",
    image: "/media/images/Austin.jpg",
    bio: "Austin is a successful self-made entrepreneur from Singapore. His area of specialty revolves around helping organisations including grow by optimizing revenue streams and creating growth strategies. He is a boxing enthusiast and loves collecting exquisite watches.",
  },
];

function TeamMemberCard({ member }) {
  const [showBio, setShowBio] = useState(true);

  return (
    <div className="col-12 col-md-4 p-4 text-center">
      <img
        src={member.image}
        alt={member.name}
        style={{
          borderRadius: "50%",
          width: "200px",
          height: "200px",
          objectFit: "cover",
        }}
        className="mb-4 shadow-sm"
      />
      <h5>{member.name}</h5>
      <p className="text-muted mb-2">{member.role}</p>
      <p
        className="text-muted"
        style={{ cursor: "pointer", fontSize: "0.9rem", userSelect: "none" }}
        onClick={() => setShowBio(!showBio)}
      >
        Bio <i className={`fa fa-angle-${showBio ? "up" : "down"}`}></i>
      </p>
      {showBio && (
        <p
          className="text-muted text-start mt-3"
          style={{ lineHeight: "1.7", fontSize: "0.95rem" }}
        >
          {member.bio}
        </p>
      )}
    </div>
  );
}

function Team() {
  return (
    <div className="container">
      <div className="row p-3 mt-5 border-top">
        <h1 className="text-center">People</h1>
      </div>

      <div
        className="row p-3 text-muted align-items-center"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-12 col-md-6 p-3 text-center">
          <img
            src="/media/images/nithinKamath.jpg"
            alt="Nithin Kamath"
            style={{
              borderRadius: "50%",
              width: "240px",
              height: "240px",
              objectFit: "cover",
            }}
          />
          <h4 className="mt-4">Nithin Kamath</h4>
          <h6>Founder, CEO</h6>
        </div>
        <div className="col-12 col-md-6 p-3">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on <a href="" style={{ textDecoration: "none" }}>Homepage</a> /{" "}
            <a href="" style={{ textDecoration: "none" }}>TradingQnA</a> /{" "}
            <a href="" style={{ textDecoration: "none" }}>Twitter</a>
          </p>
        </div>
      </div>

      {/* Leadership Team Grid */}
      <div className="row mt-5 pt-3">
        {teamMembers.map((member, index) => (
          <TeamMemberCard key={index} member={member} />
        ))}
      </div>
    </div>
  );
}

export default Team;
